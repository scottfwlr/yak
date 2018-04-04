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
    console.log(e.currentTarget);
    this.props.changeChannel(this.props.channel.id)
  }

  render() {
    return (
      <li className='channels-index-item'
        key={ this.props.channel.id }
        onClick={ this.changeChannel }>
        # { this.props.channel.name }
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