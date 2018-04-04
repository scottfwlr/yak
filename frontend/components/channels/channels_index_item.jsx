// channels_index_item.jsx
import React from 'react';

class ChannelsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    App.subscribeTo(this.props.channel.name);
  }

  render() {
    return (
      <li className='channels-index-item'
        onClick={ this.props.changeChannel(this.props.channel.id) }>
        &nbsp;{ this.props.channel.name }
      </li>
    );
  }
}

export default ChannelsIndexItem;