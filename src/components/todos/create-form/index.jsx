import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class CreateTodoForm extends Component {
  state = {
    text: '',
    description: '',
  };

  changeHnadler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitHandler = (event) => {
    event.preventDefault();
    this.props.createTodo(this.state);
    event.target.reset();
    this.setState({ text: '', description: '' });
  };
  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <FormGroup>
          <Label>Enter Task</Label>
          <Input name="text" value={this.state.text} onChange={this.changeHnadler} placeholder="Enter To Do list" />
        </FormGroup>
        <FormGroup>
          <Label>Write down your description</Label>
          <Input
            type="textarea"
            name="description"
            value={this.state.description}
            onChange={this.changeHnadler}
            placeholder="Description"
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default CreateTodoForm;
