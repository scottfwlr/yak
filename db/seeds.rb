# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create([
  {email: 'vader@deathstar.gov', password: 'starwars'},
  {email: 'palpatine@deathstar.gov', password: 'starwars'},
  {email: 'han@falcon.io', password: 'starwars'},
  {email: 'leia@hoth.com', password: 'starwars'},
  {email: 'luke@dagobah.edu', password: 'starwars'}
])

luke = User.find_by(email: 'luke@dagobah.edu')
leia = User.find_by(email: 'leia@hoth.com')
han = User.find_by(email: 'han@falcon.io')
palpatine = User.find_by(email: 'palpatine@deathstar.gov')
vader = User.find_by(email: 'vader@deathstar.gov')

Message.destroy_all

Message.create([
  {author: luke, text: "May the force be with you"},
  {author: han, text: "She may look like a hunk of junk, but she's fast where it counts."},
  {author: leia, text: "You... scruffy-looking nerf herder!"},
  {author: palpatine, text: "Witness the power of this fully-operational battle station!"},
  {author: vader, text: "Luke, I am your father"},
  {author: luke, text: "Nooooo!"},
  {author: luke, text: "Your overconfidence is your weakness."},
  {author: luke, text: "*is repeatedly struck by lightning*"},
  {author: han, text: "Where did you dig up this old fossil?"}

])
