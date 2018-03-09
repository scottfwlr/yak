import React from 'react';
import MessagesBox from 'chat/messages_box';
import { connect } from 'react-redux';
import { messageRunsSelector } from 'reducers/selectors';





const mapStateToProps = state => ({
  messageRuns: messageRunsSelector(state)
});

const mapDispatchToProps = dispatch => ({

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow);
