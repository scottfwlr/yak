json.extract! channel, :id, :name, :topic, :purpose
json.members channel.members.map(&:id)
json.messages channel.messages.map(&:id)
