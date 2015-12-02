FactoryGirl.define do
  factory :record do
    title {Faker::Lorem.sentence}
    amount {Faker::Number.decimal(2)}
    date {Date.today}
  end
end
