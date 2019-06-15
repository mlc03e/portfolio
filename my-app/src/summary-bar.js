import React, { Component } from 'react';
import Todos from './todos';
import { api, getApiPromise } from '../helpers/api';
import PropTypes from 'prop-types';

// import React from 'react';
//
/**
 * TodosPage component
 * @class
 */
// const noop = () => {};
// //
// // @private
// //
// // @returns {ReactElement}

class SummaryBar extends React.Component {

  /**
   * Base CSS class
   * @static
   */
  static baseCls = 'summary-bar'



  state= {
    completeAll: false
  }

  completeAll =()=> {
    const status= this.props.todos.map(todo => todo.status= 'complete')
    this.setState({completeAll: true})
  }
  todosRemaining= ()=> {

    const todosArray= Object.keys(this.props.todos).map(i=>this.props.todos[i])

    return todosArray.filter(todo => todo.status === 'active').length

  }
  render() {

    return (
      <div className={SummaryBar.baseCls}>
        <h3> {this.todosRemaining()} tasks remaining </h3>
        <h4 onClick={this.completeAll}> Complete All </h4>
        <Todos
          filterBy={this.props.filterBy}
          todos={this.props.todos}
          updateTodos={this.props.updateTodos}
          deleteTodo={this.props.deleteTodo}

        />
      </div>
    );
  }

}

export default SummaryBar;
