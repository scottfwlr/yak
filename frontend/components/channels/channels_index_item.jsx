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
      <li className={`channels-index-item ${this.props.selected ? 'channel-selected' : ''}`}
        onClick={ this.changeChannel }>
        &nbsp;{ this.props.channel.name }
      </li>
    );
  }
}

const mapStateToProps = ({ session: { currentChannelId } }, ownProps) => ({
  selected: currentChannelId === ownProps.channel.id
})

const mapDispatchToProps = dispatch => ({
  changeChannel: (id) => dispatch(changeChannel(id))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ChannelsIndexItem);