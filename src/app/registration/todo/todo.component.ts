import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { ViewChild, ElementRef } from '@angular/core';
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
  textContent: string = '';
    @ViewChild('textEditor') textEditor!: ElementRef<HTMLDivElement>; 
    cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' }
  ];
  selectedCities: any[] = [];
  todos:Todo[]=[];
  updateTodo(e:unknown,todo:Todo){
    console.log(e,todo)
  }
  deleteTodo(event: Event, id: Todo['id']): void {
  event?.preventDefault();
  event?.stopPropagation();
  this.todos = this.todos.filter(todo => todo.id !== id);
}
   onTextChange(event: Event) {
    this.textContent = (event.target as HTMLDivElement).innerText.trim();
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

  // 2. Process editor content
  const editorContent = this.textEditor.nativeElement.innerText.trim();
  
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
    this.textEditor.nativeElement.innerText = '';
  }

  // Reset selections
  this.selectedCities = [];
}


  newTask: string = ''; 
 

  ngOnInit() {
    const script = document.createElement('script');
    script.src =  "https://www.chatbase.co/embed.min.js";
    script.id = 'ZGUm8io9tk08LJJtUul9o';
    script.setAttribute('domain', 'www.chatbase.co');
    document.body.appendChild(script);
  }
  onPaste(event: ClipboardEvent) {
  event.preventDefault();
  const html = event.clipboardData?.getData('text/html') || 
               event.clipboardData?.getData('text/plain');
  document.execCommand('insertHTML', false, html);
}
}
