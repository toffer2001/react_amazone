require 'faker'
require 'database_cleaner'

DatabaseCleaner.clean_with(:truncation)

user = User.new({
  name: 'user',
  email: 'user@email.com',
  password: 'password',
})
user.save!


department = Department.new({
    title: 'Beer',
})
department.save!

7.times do 
  product = Product.create(
      name: Faker::Beer.brand,
      description:Faker::Beer.style,
      price: Faker::Number.between(3, 11),
      stock: Faker::Number.between(4, 20),
      department_id: 1
  )
  end

department = Department.new({
    title: 'Coffee',
})
department.save!

14.times do 
  product = Product.create(
      name: Faker::Coffee.blend_name,
      description:Faker::Coffee.notes,
      price: Faker::Number.between(5, 30),
      stock: Faker::Number.between(12, 55),
      department_id: 2
  )
  end

department = Department.new({
    title: 'Cannabis',
})
department.save!

10.times do 
  product = Product.create(
      name: Faker::Cannabis.strain,
      description:Faker::Cannabis.health_benefit,
      price: Faker::Number.between(5, 30),
      stock: Faker::Number.between(12, 55),
      department_id: 3
  )
  end

puts "Data Seeded."

