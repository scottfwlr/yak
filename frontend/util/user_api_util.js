export const fetchUser = (id) => (
  $.ajax({
    url: `api/users/${id}`
  })
);

export const createUser = (user) => (
  $.ajax({
    url: 'api/users',
    method: 'POST',
    data: { user }
  })
);
