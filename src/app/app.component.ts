import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from './task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todoApp';
  task: string = '';
  completed: boolean = false;

  task1: Task = {
    taskDesc: 'clean kitchen',
    completed: false,
  };
  task2: Task = {
    taskDesc: 'wash car',
    completed: true,
  };
  task3: Task = {
    taskDesc: 'lift weights',
    completed: true,
  };
  task4: Task = {
    taskDesc: 'take out trash',
    completed: false,
  };

  tasks: Task[] = [this.task1, this.task2, this.task3, this.task4];

  addTask(f: NgForm): void{
    let newTask: Task = {
      taskDesc: f.form.value.todoItem,
      completed: false,
    };

    this.tasks.push(newTask);

  }

  completeTask(t: Task): void{
    t.completed = true;
  }


}
