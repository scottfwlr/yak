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
