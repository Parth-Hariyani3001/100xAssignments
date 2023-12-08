/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.arr = [];
  }

  add(todo) {
    this.arr.push(todo);
  }

  remove(idx) {
    const beforeRemoval = this.arr.slice(0, idx);
    const afterRemoval = this.arr.slice(idx + 1)
    this.arr = [];
    this.arr = this.arr.concat(beforeRemoval, afterRemoval)
  }

  update(idx, updatedTodo) {
    if (!this.arr[idx]) {
      return;
    }
    this.arr[idx] = updatedTodo;
  }

  getAll() {
    return this.arr;
  }

  get(idx) {
    if (!this.arr[idx]) {
      return null;
    }
    return this.arr[idx];
  }

  clear() {
    this.arr = [];
  }
}

module.exports = Todo;
