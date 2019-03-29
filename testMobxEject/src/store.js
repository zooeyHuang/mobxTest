import {observable, computed, action} from 'mobx';
// import {observer} from

class Todo {
	id = Math.random();
	@observable title;
	@observable finished = false;
	constructor(title) {
		this.title = title;
	}
}

class TodoList {
	@observable todos = [];
	@computed get unfinishedTodoCount() {
		return this.todos.filter(todo => !todo.finished).length;
	}
	@action
	addTodo = title => {
		if (!title) return;
		this.todos.push(new Todo(title));
	}
}

const store = new TodoList();
store.todos.push(new Todo('Get Coffee'), new Todo('Write blog'));
store.todos[0].finished = true;

export default store;
