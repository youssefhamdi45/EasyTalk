import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";
@Injectable({
  providedIn: 'root'
})
export class TasksService {
    private tasks =[
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
    ];
    constructor(){
      const tasks = localStorage.getItem('tasks');
      if(tasks){
        this.tasks = JSON.parse(tasks);
    }
  }
    getUserTasks(userId:string){
      return this.tasks.filter((task)=> task.usersId === userId);
    }
    addTask(taskData:NewTaskData, userId:string){
        this.tasks.push({
            id : new Date().getTime().toString(),
            Title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.dueDate,
            usersId: userId
        });
        this.saveTasks();

}
removeTask(id:string){
    this.tasks = this.tasks.filter((task)=> task.id !== id);
    this.saveTasks();
  }
private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
}
}