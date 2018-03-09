json.set! message.id do
  json.extract! message, :id, :author_id, :text, :created_at
end