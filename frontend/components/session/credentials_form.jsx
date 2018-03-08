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
    this.getDemoUser = this.getDemoUser.bind(this);
  }

  componentDidMount () {
    this.props.clearErrors();
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

  getDemoUser() {
    const demoUsers = [
      'vader@deathstar.gov',
      'palpatine@deathstar.gov',
      'han@falcon.io',
      'leia@hoth.com',
      'luke@dagobah.edu'
    ];
    const email = demoUsers[Math.floor(Math.random()*demoUsers.length)];
    this.setState({ email, password: 'starwars' });
  }


  render() {
    const { email, password } = this.state;
    return (
      <form className='credentials-box credentials-form'
        onSubmit={ this.handleSubmit }>
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

          {
            this.props.formType === 'Log in' ? (
              <p className='fake-link'
                onClick={ this.getDemoUser }>
                Use a demo account
              </p>
            ) : (
              null
            )
          }
      </form>
    );
  }
}

export default CredentialsForm;
