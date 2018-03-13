json.set! message.id do
  json.id message.id
  json.authorId message.author_id
  json.text message.text
  json.createdAt message.created_at.to_i
  json.timestamp message.created_at.to_s(:time)
end
