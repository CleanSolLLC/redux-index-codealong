import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo"

class TodosContainer extends Component {
  renderTodos = () => {
    return this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
  }

  render() {
    return (
      <ol>{this.renderTodos()}</ol>
    )
  };
};

const mapStateToProps = (state) => {
  console.log(state.todos)
  return {
    todos: state.todos,
  }
}
export default connect(mapStateToProps)(TodosContainer);