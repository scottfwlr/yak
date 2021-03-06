import React from 'react';


class CredentialsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      fullName: '',
      displayName: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
    this.getDemoUser = this.getDemoUser.bind(this);
    this.handleDemoClick = this.handleDemoClick.bind(this);
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
      password: '',
      fullName: '',
      displayName: ''
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

  handleDemoClick() {
    this.props.clearErrors();
    this.getDemoUser();
  }

  render() {
    const { email, password, fullName, displayName } = this.state;
    return (
      <form className='credentials-box credentials-form'
        onSubmit={ this.handleSubmit }>
          <h2 className='credentials-form-headline'>{ `${this.props.formType} to Yak` }</h2>
          <p className='credentials-form-p'>Enter your <b>email address</b> and <b>password</b>.</p>
          <input className='credentials-form-input input-email'
            type='text'
            placeholder='you@example.com'
            value={ email }
            onChange={ this.updateField('email') } />

          <input className='credentials-form-input input-password'
            type='password'
            placeholder='password'
            value={ password }
            onChange={ this.updateField('password') } />

          {
            this.props.formType === 'Sign up' && Boolean(email) ? (
              <input className='credentials-form-input input-name'
                type='text'
                placeholder='full name'
                value={ fullName }
                onChange={ this.updateField('fullName') } />
            ) : (
              null
            )
          }

          {
            this.props.formType === 'Sign up' && Boolean(email) ? (
              <input className='credentials-form-input input-name'
                type='text'
                placeholder='username'
                value={ displayName }
                onChange={ this.updateField('displayName') } />
            ) : (
              null
            )
          }




          <input className='credentials-form-input credentials-form-submit'
            type='submit'
            value={ this.props.formType } />
          

          {
            this.props.formType === 'Log in' ? (
              <p className='fake-link'
                onClick={ this.handleDemoClick }>
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
