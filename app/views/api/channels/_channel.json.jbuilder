# `channel` local variable

json.set! channel.id do
  json.id channel.id
  json.name channel.name
  json.topic channel.topic
  json.purpose channel.purpose
  json.members channel.members.map(&:id)
  json.messages channel.messages.map(&:id)
end