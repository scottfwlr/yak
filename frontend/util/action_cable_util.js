const createChannelSubscriber = (dispatch, channel) => {
  App.channels = {};

  App.subscribeTo = (room) => {
    App.channels[room] = 
    App.cable.subscriptions.create({ channel, room }, {
      connected: () => console.log('we connected'),
      disconnected: () => console.log('we disconnected'),
      received: data => dispatch(JSON.parse(data)),
      newMessage: function(text) {
        return this.perform('new_message', { text });
      },
      editMessage: function(id, text) {
        return this.perform('edit_message', { id, text });
      },
      deleteMessage: function(id) {
        return this.perform('delete_message', { id });
      }
    });
  };

  App.unsubscribeAll = () => {
    Object.values(App.channels).forEach(channel => {
      channel.unsubscribe();
    })
    App.channels = {};
  }
};

export default createChannelSubscriber;
