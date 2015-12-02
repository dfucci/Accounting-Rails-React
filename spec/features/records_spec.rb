require 'spec_helper'

describe "accessing the Records page", :js => true do
  it "shows the title in the header" do
    visit '/records'
    expect(page).to have_content 'Records'
  end

end
