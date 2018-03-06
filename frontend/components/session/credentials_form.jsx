import React from 'react';


class CredentialsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  updateField(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitCredentials(this.state);
  }

  render() {
    const { email, password } = this.state;
    return (
      <form
        className='credentials-form'
        onSubmit={ this.handleSubmit }>
        <label>Email
          <input
            type='text'
            value={ email }
            onChange={ this.updateField('email') }
            />
        </label>
        <label>Password
          <input
            type='password'
            value={ password }
            onChange={ this.updateField('password') }
            />
        </label>
        <input
          type='submit'
          value='Submit'
          />
      </form>
    );
  }
}

export default CredentialsForm;
