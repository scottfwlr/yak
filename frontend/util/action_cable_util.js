
const developmentSubscriber = (dispatch, channel) => {
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



const productionSubscriber = (dispatch, channel) => {
  // App.cable.subscriptions.create({ '' })

  App.channels = App.channels || {};

  App.subscribeTo = (room) => {
    App.channels[room] = App.cable.subscriptions.create({ channel, room }, {
      connected: () => {},
      disconnected: () => {},
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


let createCableSubscribers;

if (process.env.NODE_ENV !== 'production') {
  createCableSubscribers = developmentSubscriber;
}
else {
  createCableSubscribers = productionSubscriber;
}

export default createCableSubscribers;
