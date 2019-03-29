import React, { Component } from 'react';
import { Button } from 'antd';
import {observer, inject} from 'mobx-react';
const TodoView = ({todo}) => (
	<li>
		<input
			type="checkbox"
			checked={todo.finished}
			onChange={() => {todo.finished = !todo.finished;}}
		/>
		{todo.title}
	</li>
)

@inject('todolist')
@observer
class TodoListView extends Component {
	state = {
		title: ''
	}
	changeTitle = e => {
		let title = e.target.value;
		this.setState({title});
	}
	submit = () => {
		this.props.todolist.addTodo(this.state.title);
	}
	render() {
		return (
			<div>
				<input type="text" value={this.state.title} onChange={this.changeTitle} />
				<Button onClick={this.submit}>submit</Button>
				<ul>
					{this.props.todolist.todos.map(todo => (
						<TodoView todo={todo} key={todo.id} />
					))}
				</ul>
				Tasks left: {this.props.todolist.unfinishedTodoCount}
			</div>
		);
	}
}

export default TodoListView
