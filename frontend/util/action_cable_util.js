const createCableSubscribers = (dispatch, channel) => {
  // App.cable.subscriptions.create({ '' })

  App.channels = App.channels || {};

  App.subscribeTo = (room) => {
    App.channels[room] = App.cable.subscriptions.create({ channel, room }, {
      connected: () => console.log(`we connected to ${channel}:${room}`),
      disconnected: () => console.log(`we disconnected from ${channel}:${room}`),
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

export default createCableSubscribers;
