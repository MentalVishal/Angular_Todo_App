import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo_App';

  list: any[] = [];
  todo: string = '';

  constructor() {
    const storedTodos = localStorage.getItem('allTodos');
    if (storedTodos) {
      this.list = JSON.parse(storedTodos);
    }
  }

  addTodo(todos: string) {
    this.list.push({
      id: Date.now(),
      name: todos,
      isCompleted: false,
      isEdit: false,
    });
    this.todo = '';
    localStorage.setItem('allTodos', JSON.stringify(this.list));
  }
  toggel(data: any) {
    data.isCompleted = !data.isCompleted;
    localStorage.setItem('allTodos', JSON.stringify(this.list));
  }
  delete(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
    localStorage.setItem('allTodos', JSON.stringify(this.list));
  }
  edit(data: any) {
    if (data.isEdit == true) {
      data.isEdit = false;
    } else {
      data.isEdit = true;
    }
  }
  update(data: any) {
    data.isEdit = !data.isEdit;
    localStorage.setItem('allTodos', JSON.stringify(this.list));
  }
}
