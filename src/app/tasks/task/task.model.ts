export type Task ={
  id: string;
  usersId: string;
  Title: string;
  summary: string;
  dueDate: string;
}
export interface NewTaskData {
  title: string;
  summary: string;
  dueDate: string;
}