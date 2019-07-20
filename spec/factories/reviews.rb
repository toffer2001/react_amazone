FactoryBot.define do
  factory :review do
    subject { "MyString" }
    body { "MyString" }
    stars { 1 }
    date { "2019-07-20" }
    product { nil }
  end
end
