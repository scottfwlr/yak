
const createCableSubscribers = dispatch => {
  
  const production = process.env.NODE_ENV === 'production';

  App.State = App.cable.subscriptions.create({ channel: 'StateChannel' }, {
    connected: production ? () => null : () => console.log("we connected to StateChannel"),
    disconnected: production ? () => null : () => console.log("we disconnected from StateChannel"),
    received: data => {
      console.log(data);
      dispatch(JSON.parse(data));
    },
    speak: function(text) {
      return this.perform('speak', { text });
    },
    newMessage: function(text) {
      return this.perform('new_message', { text });
    }
  });
}


export default createCableSubscribers;
