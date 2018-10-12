import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }
  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

// whatever is returned with these exteneral functions will be accessible with this.props for BookList
function mapStateToProps(state) {
  // make this component a container
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  // pass action result to all reducers
  return bindActionCreators({ selectBook }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
