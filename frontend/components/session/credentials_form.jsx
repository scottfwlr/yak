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
    this.setState({
      email: '',
      password: ''
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <form className='credentials-form'
        onSubmit={ this.handleSubmit }>
        {/* <div className='credentials-form-container'> */}
          <h2 className='credentials-form-headline'>{ `${this.props.formType} to Yak` }</h2>
          <p className='credentials-form-p'>Enter your <b>email address</b> and <b>password</b>.</p>
          <input className='credentials-form-input input-email'
            type='text'
            placeholder='you@example.com'
            value={ email }
            onChange={ this.updateField('email') }
            />
          <input className='credentials-form-input input-password'
            type='password'
            placeholder='password'
            value={ password }
            onChange={ this.updateField('password') }
            />
          <input className='credentials-form-input credentials-form-submit'
            type='submit'
            value={ this.props.formType }
            />
          {/* </div> */}
      </form>
    );
  }
}

export default CredentialsForm;
