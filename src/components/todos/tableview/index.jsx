import React from 'react';
import { CustomInput, Button, Table } from 'reactstrap';

const RowItem = ({ todo, toggleSelect, toggleComplete }) => (
  <tr className="">
    <td>
      <CustomInput type="checkbox" id={todo.id} checked={todo.isSelect} onChange={() => toggleSelect(todo.id)} />
    </td>
    <td> {todo.time.toDateString()}</td>
    <td>{todo.text}</td>
    <td>
      <Button
        className="ml-auto mt-2"
        color={todo.isComplete ? 'danger' : 'success'}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.isComplete ? 'Complete' : 'Running'}
      </Button>
    </td>
  </tr>
);

const TableView = ({ todos, toggleSelect, toggleComplete }) => (
  <Table className="table table-bordered">
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
