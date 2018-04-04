// channels_index_item.jsx
import React from 'react';
import { connect } from 'react-redux';
import { changeChannel } from 'actions/session_actions';


class ChannelsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.changeChannel = this.changeChannel.bind(this);
  }

  componentDidMount() {
    App.subscribeTo(this.props.channel.name);
  }

  changeChannel(e) {
    this.props.changeChannel(this.props.channel.id)
  }

  render() {
    return (
      <li className='channels-index-item'
        onClick={ this.changeChannel }>
        &nbsp;{ this.props.channel.name }
      </li>
    );
  }
}



const mapDispatchToProps = dispatch => ({
  changeChannel: (id) => dispatch(changeChannel(id))
})

export default connect(
  null, mapDispatchToProps
)(ChannelsIndexItem);