import React from 'react';
import { CustomInput, Button, Table } from 'reactstrap';

const RowItem = ({ todo, toggleSelect, toggleComplete }) => (
  <tr>
    <th scope="row">
      <CustomInput type="checkbox" id={todo.id} checked={todo.isSelect} onChange={() => toggleSelect(todo.id)} />
    </th>
    <th> {todo.time.toDateString()}</th>
    <th>{todo.text}</th>
    <Button className="ml-auto" color={todo.isComplete ? 'danger' : 'success'} onClick={() => toggleComplete(todo.id)}>
      {todo.isComplete ? 'Complete' : 'Running'}
    </Button>
  </tr>
);

const TableView = ({ todos, toggleSelect, toggleComplete }) => (
  <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Time</th>
        <th>Todo</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {todos.map((todo) => (
        <RowItem key={todo.id} todo={todo} toggleSelect={toggleSelect} toggleComplete={toggleComplete} />
      ))}
    </tbody>
  </Table>
);

export default TableView;
