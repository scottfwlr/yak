export const createSession = (data) => (
  $.ajax({
    url: 'api/session',
    method: 'POST',
    data
  })
);

export const destroySession = () => (
  $.ajax({
    url: 'api/session',
    method: 'DELETE'
  })
);
