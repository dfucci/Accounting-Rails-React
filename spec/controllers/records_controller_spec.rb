require 'spec_helper'
require 'rails_helper'

describe RecordsController do
  describe "GET #index" do
    it "populates an array of records" do
      record = FactoryGirl.create(:record)
      get :index
      expect(assigns(:records)).to eq([record])
    end
    it "renders the :index view" do
      get :index
      expect(response).to render_template :index
    end
  end
end
