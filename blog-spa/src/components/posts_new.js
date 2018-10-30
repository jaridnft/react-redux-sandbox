import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {/* Field is a component of redux-form */}
        <Field
          label="Title of Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

// values is information submitted to form
// called automatically with redux-form on submission
function validate(values) {
  const errors = {};

  if (!values.title || values.title.length < 3) {
    // NOTE: property name must match 'name' property in Field component
    errors.title = "Enter a title that's at least 3 characters!";
  }

  if (!values.categories) {
    errors.categories = 'Enter a category!';
  }

  if (!values.content) {
    errors.content = 'Enter some content!';
  }

  // if errors is empty, the form is fine to submit
  // if errors has non-zero properties, redux-form assumes form is invalid
  return errors;
}

// this combines reduxForm connection with redux/react connection
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(
    null,
    { createPost }
  )(PostsNew)
);
