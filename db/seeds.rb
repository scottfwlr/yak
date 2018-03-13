# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create([
  {email: 'vader@deathstar.gov', password: 'starwars', full_name: 'Darth Vader', display_name: 'Vader', description: "Anakin Skywalker was a Force-sensitive Human male who served the Galactic Republic as a Jedi Knight and later served the Galactic Empire as the Sith Lord Darth Vader.", profile_pic_url: '/assets/vader.png'},
  {email: 'palpatine@deathstar.gov', password: 'starwars', full_name: 'Emperor Palpatine', display_name: 'Palpatine', description: "Palpatine, also known as Darth Sidious, was a Force-sensitive Human male who served as the last Supreme Chancellor of the Galactic Republic and the first Emperor of the Galactic Empire.", profile_pic_url: '/assets/palpatine.png'},
  {email: 'han@falcon.io', password: 'starwars', full_name: 'Han Solo', display_name: 'Han', description: "Han Solo was a male Human smuggler from the planet Corellia who achieved galactic fame as a member of the Rebel Alliance and later the New Republic.", profile_pic_url: '/assets/han.png'},
  {email: 'leia@hoth.com', password: 'starwars', full_name: 'Leia Organa Solo', display_name: 'Leia', description: "Leia Organa (born Leia Amidala Skywalker) was a Force-sensitive human female who served as princess of Alderaan, a member of the Imperial Senate, a general in the Alliance to Restore the Republic and New Republic, and the founding general of the Resistance.", profile_pic_url: '/assets/leia.png'},
  {email: 'luke@dagobah.edu', password: 'starwars', full_name: 'Luke Skywalker', display_name: 'Luke', description: "Luke Skywalker was a Force-sensitive human male Jedi Master who was instrumental in restoring balance to the Force, defeating the Sith and the Galactic Empire, and inspiring a legend that brought a spark of hope to the galaxy in the fight to defeat the First Order.", profile_pic_url: '/assets/luke.png'}
])

luke = User.find_by(email: 'luke@dagobah.edu')
leia = User.find_by(email: 'leia@hoth.com')
han = User.find_by(email: 'han@falcon.io')
palpatine = User.find_by(email: 'palpatine@deathstar.gov')
vader = User.find_by(email: 'vader@deathstar.gov')



Channel.destroy_all

Channel.create([
  {name: 'general', topic: 'Rebels rule, Imperials drool', purpose: "This channel is a general-purpose conference room. If you want to start a conversation and this room is already active, try #general2"},
  {name: "cloud_city", topic: "Lando is a traitor", purpose: "Goings-on and events in Lando Calrissian's Cloud City on Bespin. UNDER NEW MANAGEMENT"},
  {name: "cantina", topic: "*loud cantina music*", purpose: "A wretched hive of scum and villainy."},
  {name: "boardroom", topic: "Days since last Force-choking incident: 0", purpose: "Imperial generals holding strategy meetings with Vader and Palpatine."},
  {name: 'trench_run', topic: "Yeehaw!", purpose: "For crazy suicide assaults on Imperial targets."}
])

general = Channel.find_by(name: 'general')
cloud_city = Channel.find_by(name: 'cloud_city')
cantina = Channel.find_by(name: 'cantina')
boardroom = Channel.find_by(name: 'boardroom')
trench_run = Channel.find_by(name: 'trench_run')




Message.destroy_all

messages = [
  {author: luke, channel: general, text: "May the force be with you."},
  {author: vader, channel: cloud_city, text: "I have altered the deal. Pray I do not alter it further."},
  {author: han, channel: cantina, text: "It's the ship that made the Kessel Run in less than twelve parsecs."},
  {author: han, channel: cantina, text: "She may look like a hunk of junk, but she's fast where it counts."},
  {author: vader, channel: boardroom, text: "I find your lack of faith disturbing."},
  {author: palpatine, channel: boardroom, text: "It is of no concern. Soon the rebellion will be crushed and young Skywalker will be one of us."},
  {author: palpatine, channel: boardroom, text: "Witness the power of this fully-operational battle station!"},
  {author: leia, channel: general, text: "You... scruffy-looking nerf herder!"},
  {author: han, channel: general, text: "Well, Your Worship, looks like you managed to keep me around for a little while longer."},
  {author: leia, channel: trench_run, text: "Aren't you a little short for a stormtrooper?"},
  {author: han, channel: trench_run, text: "Hokey religions and ancient weapons are no match for a good blaster at your side, kid."},
  {author: han, channel: trench_run, text: "Where did you dig up this old fossil?"},
  {author: luke, channel: cloud_city, text: "You killed my father!"},
  {author: vader, channel: cloud_city, text: "No Luke, I am your father."},
  {author: luke, channel: cloud_city, text: "Nooooo!"},
  {author: luke, channel: boardroom, text: "Your overconfidence is your weakness."},
  {author: palpatine, channel: boardroom, text: "Your faith in your friends is yours."},
  {author: luke, channel: boardroom, text: "*is repeatedly struck by lightning*"}
]

times = messages.map { rand(1..10000) }.sort.reverse

messages.zip(times).each do |message, seconds|
  m = Message.new(message)
  m.created_at = Time.now - seconds
  m.save
end

m = Message.new({author: leia, channel: general, text: "Help me Obi-wan Kenobi, you're my only hope."})
m.created_at = Time.now - 65000
m.save

[luke, leia, han, vader, palpatine].each do |character|
  character.channels = character.messages.map(&:channel).uniq
end
