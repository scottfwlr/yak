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
