FactoryBot.define do
  factory :product do
    name { "MyString" }
    desription { "MyString" }
    price { 1.5 }
    stock { 1 }
    department { nil }
  end
end
