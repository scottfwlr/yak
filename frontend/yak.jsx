import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'store/store';
import Root from 'components/root';



// TESTING
// import { messageRunsSelector } from 'reducers/selectors';
// import { requestMessages } from 'actions/message_actions';
// import { requestUsers } from 'actions/user_actions';
// import { requestChannel, requestChannels } from 'actions/channel_actions';


// TESTING
// window.requestMessages = requestMessages;
// window.requestUsers = requestUsers;
// window.messageRunsSelector = messageRunsSelector;
// window.requestChannels = requestChannels;
// window.requestChannel = requestChannel;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState;
  if (window.currentUser) {
    preloadedState = { 
      session: { 
        currentUserId: window.currentUser.id,
        currentChannelId: null 
      },
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      } };
    delete window.currentUser;
  }
  const store = configureStore(preloadedState);

  // TESTING
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store} />, root);
});
