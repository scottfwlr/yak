import { groupBy } from 'lodash';


const sortMessagesByCreation = (messages) => {
  return messages.sort((mA, mB) => mA.createdAt - mB.createdAt);
};

export const messageRuns = (messages) => {
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

const dayOfMessage = (message) => {
  const date = new Date(message.createdAt*1000);
  return date.toDateString().slice(0,-5);
}

export const messagesByDates = (messageData) => {
  const messages = sortMessagesByCreation(Object.values(messageData));
  const groupedMessages = groupBy(messages, dayOfMessage);
  return Object.keys(groupedMessages).map(date => ({
    date,
    messageArray: groupedMessages[date]
  }));
}

export const messageRunsSelector = (messageData) => {
  const messages = sortMessagesByCreation(Object.values(messageData));
  return messageRuns(messages);
}


export const idFromMessage = (messageData) => Object.keys(messageData)[0];

export const messageFromMessageData = (messageData) => Object.values(messageData)[0];
