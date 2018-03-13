@channels.each do |channel|
  json.partial! 'channel', channel: channel
end