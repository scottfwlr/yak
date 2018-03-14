json.channels do
  @channels.each do |channel|
    json.partial! 'channel', channel: channel
  end
end

json.messages do 
  @channels.flat_map(&:messages).each do |message|
    json.partial! 'api/messages/message', message: message
  end
end

json.users do 
  @channels.flat_map(&:members).each do |member|
    json.partial! 'api/users/user', user: member
  end
end