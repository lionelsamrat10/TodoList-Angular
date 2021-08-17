import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title = 'todos-app'
  todos: Todo[];
  constructor() { 
    this.todos = [
      {
        sno: 1,
        title: "This is first title",
        desc: "Description of the first todo",
        active: true
      },
      {
        sno: 2,
        title: "This is second title",
        desc: "Description of the second todo",
        active: true
      },
      {
        sno: 3,
        title: "This is third title",
        desc: "Description of the third todo",
        active: false
      }
    ]
  }

  ngOnInit(): void {
  }
  deleteTodo(todo: Todo) {
    console.log(todo);
    // Remove the todo from the array Todos.. 
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
