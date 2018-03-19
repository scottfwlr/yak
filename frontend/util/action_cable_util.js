
const createCableSubscribers = (dispatch, channel) => {
  
  const production = process.env.NODE_ENV !== 'production';

  App.channels = App.channels || {};

  App.subscribeTo = (name) => {
    
    App.channels[name] = App.cable.subscriptions.create({ channel, room: name }, {
      connected: () => production ? null : console.log(`we connected to ${channel}:${name}`),
      disconnected: () => production ? null : console.log(`we disconnected from ${channel}:${name}`),
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
    });
    App.channels = {};
  };
};


export default createCableSubscribers;
