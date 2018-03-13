
const sortMessagesByCreation = (messages) => {
  return messages.sort((mA, mB) => mA.createdAt - mB.createdAt);
};

export const messageRunsSelector = (messageData) => {
  const messages = sortMessagesByCreation(Object.values(messageData));
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

export const idFromMessage = (messageData) => Object.keys(messageData)[0];

export const messageFromMessageData = (messageData) => Object.values(messageData)[0];
