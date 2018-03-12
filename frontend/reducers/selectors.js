// select all author_ids that aren't defined yet?

export const messageRunsSelector = (messageData) => {
  const messages = Object.values(messageData);
  const runs = [];
  for (var i = 0; i < messages.length; i++) {
    const newRun = [messages[i]];
    while (messages[i + 1] && messages[i + 1].authorId === newRun[0].authorId) {
      newRun.push(messages[i + 1]);
      i++;
    }
    runs.push(newRun);
  }
  return runs;
};
