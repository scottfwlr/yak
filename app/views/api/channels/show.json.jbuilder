json.channels do
  json.partial! 'channel', channel: @channel
end
json.messages do 
  @channel.messages.each do |message|
    json.partial! 'api/messages/message', message: message
  end
end
json.users do 
  @channel.members.each do |member|
    json.partial! 'api/users/user', user: member
  end
end