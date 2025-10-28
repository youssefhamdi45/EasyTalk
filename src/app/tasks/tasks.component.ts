import { Component, input, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Title } from '@angular/platform-browser';
import { NewTaskComponent } from './new-task/new-task.component';  
import { NewTaskData } from './task/task.model';
@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isaddingtask = false;
  tasks =[
  {
    id: 't1',
    usersId: 'u1',
    Title: 'master angular',
    summary: 'learn all angular concepts',
    dueDate: '2025-10-27',
  },
  {
    id: 't2',
    usersId: 'u2',
    Title: 'build first prototype',
    summary: 'build first prototype of the onlinestop website',
    dueDate: '2024-10-27',
  },
  {
    id: 't3',
    usersId: 'u3',
    Title: 'prepare issue template',
    summary: 'prepare and describe issue template which will help project management',
    dueDate: '2023-10-27',
  }
]

get selectedUserTasks(){
  return this.tasks.filter((task)=> task.usersId === this.userId);
}
onCompleteTask(id:string){
  this.tasks = this.tasks.filter((task)=> task.id !== id);
}
onStartaddtask(){
  this.isaddingtask = true;
}
onCanceladdtask(){
  this.isaddingtask = false;
}
onAddtask(taskData:NewTaskData){
  this.tasks.push({
    id : new Date().getTime().toString(),
    Title: taskData.title,
    summary: taskData.summary,
    dueDate: taskData.dueDate,
    usersId: this.userId
  });
  this.isaddingtask = false;

}
}