{
  errors: [
    {
      type: CLR
    },
    {
      type: NEW,
      error: 'foo'
    }
  ],
  users: [
    {
      type: SET,
      users: {
        1: { id: 1, name: 'han' },
        2: { id: 2, name: 'luke'}
      }
    },
    {
      type: NEW,
      user: { id: 3, name: 'vader' }
    },
    {
      type: UPD,
      user: { id: 3, name: 'darthvader' }
    },
    {
      type: DEL,
      user: { id: 3 }
    }
  ],
  channels: [
    {
      type: SET,
      channels: {
        4: { id: 4, name: 'general' },
        5: { id: 5, name: 'antiemo' },
      }
    },
    {
      type: NEW,
      channel: { id: 6, name: 'random' }
    },
    {
      type: UPD,
      channel: { id: 5, name: 'jokes'}
    },
    {
      type: DEL,
      channel: { id: 5 }
    }
  ],
  messages: [
    {
      type: SET,
      messages: {
        299: { id: 299, text: 'foo' },
        300: { id: 300, text: 'bar' }
      }
    },
    {
      type: NEW,
      message: { id: 301, text: 'baz' }
    },
    {
      type: UPD,
      message: { id: 300, text: 'qux' }
    },
    {
      type: DEL,
      message: { id: 301 }
    }
  ],
  session: [
    {
      type: SET,
      currentChannel: 4
    },
    {
      type: SET,
      currentUser: 1
    }
  ]
}
