export const fetchChannels = () => (
  $.ajax({
    url: '/api/channels'
  })
);

export const fetchChannel = id => (
  $.ajax({
    url: `/api/channels/${id}`
  })
);
