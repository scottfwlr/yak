export const fetchState = () => (
  $.ajax({
    url: 'api/state'
  })
);