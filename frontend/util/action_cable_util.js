
const developmentSubscriber = (dispatch, channel) => {
  // App.cable.subscriptions.create({ '' })

  App.channels = App.channels || {};
  App.channelNameFromId = App.channelNameFromId || {};

  App.subscribeTo = ({ name, id }) => {
    
    App.channels[name] = App.cable.subscriptions.create({ channel, room: name }, {
      connected: () => console.log(`we connected to ${channel}:${name}`),
      disconnected: () => console.log(`we disconnected from ${channel}:${name}`),
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

    App.channelNameFromId[id] = name;
  };

  App.unsubscribeAll = () => {
    Object.values(App.channels).forEach(channel => {
      channel.unsubscribe();
    })
    App.channels = {};
    App.channelNameFromId = {};
  }
};



const productionSubscriber = (dispatch, channel) => {
  // App.cable.subscriptions.create({ '' })

  App.channels = App.channels || {};
  App.channelNameFromId = App.channelNameFromId || {};


  App.subscribeTo = ({ name, id }) => {
    App.channels[name] = App.cable.subscriptions.create({ channel, name }, {
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

    App.channelNameFromId[id] = name;
  };

  App.unsubscribeAll = () => {
    Object.values(App.channels).forEach(channel => {
      channel.unsubscribe();
    })
    App.channels = {};
    App.channelNameFromId = {};
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
