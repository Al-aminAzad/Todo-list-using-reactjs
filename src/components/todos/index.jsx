import React, { Component } from 'react';
import ListView from './listview';
import TableView from './tableview';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import CreateTodoForm from './create-form';
import Controller from './controllers';
import shortid from 'shortid';
import { FaMastodon  } from "react-icons/fa";

class Todos extends Component {
  state = {
    todos: [
      {
        id: '1',
        text: 'First dummy text',
        description: 'Simple dummy first description',
        time: new Date(),
        isSelect: false,
        isComplete: false,
      },
      {
        id: '2',
        text: 'Second dummy text',
        description: 'Simple dummy second description',
        time: new Date(),
        isSelect: false,
        isComplete: false,
      },
    ],
    isOpenTodoForm: false,
    searchTerm: '',
    view: 'list',
    filter: 'all',
  };

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isSelect = !todo.isSelect;
    this.setState({ todos });
  };
  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isComplete = !todo.isComplete;
    this.setState({ todos });
  };
  searchHandler = (value) => {
    this.setState({ searchTerm: value });
  };
  performSearch = () => {
    return this.state.todos.filter((todo) => todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
  };
  toogleForm = () => {
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm,
    });
  };
  createTodo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isSelect = false;
    todo.isComplete = false;

    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toogleForm();
  };

  filterHandler = (filter) => {
    this.setState({ filter });
  };
  performFilter = (todos) => {
    const { filter } = this.state;
    if (filter === 'completed') {
      return todos.filter((todo) => todo.isComplete);
    } else if (filter === 'running') {
      return todos.filter((todo) => !todo.isComplete);
    } else {
      return todos;
    }
  };
  changeView = (event) => {
    this.setState({ view: event.target.value });
  };
  clearSlected = () => {
    const todos = this.state.todos.filter((todo) => !todo.isSelect);
    this.setState({ todos });
  };
  clearCompleted = () => {
    const todos = this.state.todos.filter((todo) => !todo.isComplete);
    this.setState({ todos });
  };
  reset = () => {
    this.setState({
      isOpenTodoForm: false,
      searchTerm: '',
      view: 'list',
      filter: 'all',
    });
  };
  getView = () => {
    let todos = this.performSearch();
    todos = this.performFilter(todos);
    return this.state.view === 'list' ? (
      <ListView todos={todos} toggleSelect={this.toggleSelect} toggleComplete={this.toggleComplete} />
    ) : (
      <TableView todos={todos} toggleSelect={this.toggleSelect} toggleComplete={this.toggleComplete} />
    );
  };
  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5">Stack Todo <FaMastodon /> </h1>
        <Controller
          term={this.state.searchTerm}
          searchHandler={this.searchHandler}
          toggleForm={this.toogleForm}
          view={this.state.view}
          filterHandler={this.filterHandler}
          changeView={this.changeView}
          clearSlected={this.clearSlected}
          clearCompleted={this.clearCompleted}
          reset={this.reset}
        />
        <div>{this.getView()}</div>
        <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toogleForm}>
          <ModalHeader toggle={this.toogleForm}>Create new todo item</ModalHeader>
          <ModalBody>
            <CreateTodoForm createTodo={this.createTodo} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Todos;
