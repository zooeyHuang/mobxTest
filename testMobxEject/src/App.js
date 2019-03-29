import React, { Component } from 'react';
import TodoListView from './TodoListView';
import store from './store';
import {Provider} from 'mobx-react';

export default class App extends Component {
  render() {
    return (
      <Provider todolist={store}>
        <TodoListView />
      </Provider>
    );
  }
};
