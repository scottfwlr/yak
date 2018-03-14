json.set! message.id do
  json.id message.id
  json.authorId message.author_id
  json.channelId message.channel_id
  json.text message.text
  json.createdAt message.created_at.to_f
  json.timestamp message.created_at.to_s(:time)
end
