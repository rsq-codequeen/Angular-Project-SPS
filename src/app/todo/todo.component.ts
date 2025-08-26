import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from 'src/app/todo';
import { Editor } from 'primeng/editor';
import { ProductService } from '../services/product.service';

interface FilterOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  textContent: string = ''; // This will now hold the Quill editor content
 
  

  @ViewChild('textEditor') editor!: Editor;
  
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' }
  ];
  
  selectedCities: any[] = [];
  todos: Todo[] = [];
   getEditorTextContent(): string {
  if (this.editor && this.editor.getQuill) {
    const quill = this.editor.getQuill();
    if (quill) {
      // Get the text content without HTML
      return quill.getText();
    }
  }
  return '';
}
  updateTodo(e: unknown, todo: Todo) {
    console.log(e, todo);
  }
  
  deleteTodo(event: Event, id: Todo['id']): void {
    event?.preventDefault();
    event?.stopPropagation();
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
  
  onTextChange(event: any) {
    // The textContent is already bound via ngModel
    // This function is kept for any additional logic you might need
  }
  
  addSelectedCities(): void {
    // Calculate next available ID
    const maxId = this.todos.length > 0
      ? Math.max(...this.todos.map(todo => typeof todo.id === 'number' ? todo.id : 0))
      : 0;
    let nextId = maxId + 1;

    // 1. Add selected cities
    this.selectedCities.forEach(city => {
      const newTodo = {
        id: nextId++,
        task: city.name,
        completed: false
      };
      if (!this.todos.some(todo => todo.task === newTodo.task)) {
        this.todos = [...this.todos, newTodo];
      }
    });

    // 2. Process editor content - get text content from Quill
   const editorContent = this.getEditorTextContent();
    
    if (editorContent) {
      // Split by newlines and process each line
      const lines = editorContent.split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0); // Remove empty lines

      lines.forEach(line => {
        // Clean bullet formatting if present (but keep the content)
        const cleanText = line.replace(/^[\s•\-*▪∙○⦿◘◦]+/, '') // Remove leading bullets
                            .replace(/^\d+[\.\)]\s*/, '')     // Remove numbered bullets
                            .trim();

        const newTodo = {
          id: nextId++,
          task: cleanText,
          completed: false
        };
        
        if (!this.todos.some(todo => todo.task === newTodo.task)) {
          this.todos = [...this.todos, newTodo];
        }
      });

      // Clear the editor
      this.textContent = '';
    }

    // Reset selections
    this.selectedCities = [];
  }

  newTask: string = ''; 
  
  // Remove the onPaste function as Quill handles pasting internally

  ngOnInit() {
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = 'ZGUm8io9tk08LJJtUul9o';
    script.setAttribute('domain', 'www.chatbase.co');
    document.body.appendChild(script);
  }
   constructor(private todoService:ProductService){}
    saveTodoData() {
  if (this.todos.length === 0) {
    alert('No todos found to save');
    return false;
  }
  
  // Save each todo individually
  this.todos.forEach(todo => {
    this.todoService.saveTodo(todo).subscribe(res => {
      console.log('Todo saved:', res);
    }, error => {
      console.error('Error saving todo:', error);
    });
  });
  
  alert('Saving todos...');
}
}