const subscribeTo = (channel, room) => {
  return App.cable.subscriptions.create({ channel, room }, {
    connected: () => console.log('we connected'),
    disconnected: () => console.log('we disconnected'),
    // received: () => { define in component for proper bindings }
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

export default subscribeTo;
