import { Component, input, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Title } from '@angular/platform-browser';
import { NewTaskComponent } from './new-task/new-task.component';  
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';
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

  constructor(private tasksService: TasksService) {
    this.tasksService = tasksService;
  }

get selectedUserTasks(){
  return this.tasksService.getUserTasks(this.userId);
}

onStartaddtask(){
  this.isaddingtask = true;
}
onCloseAddTask(){
  this.isaddingtask = false;
}

}