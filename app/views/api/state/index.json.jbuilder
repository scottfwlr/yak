json.users do 
  json.partial! 'api/users/users', users: @users
end

json.channels do
  json.partial! 'api/channels/channels', channels: @channels
end

json.messages do
  json.partial! 'api/messages/messages', messages: @messages
end