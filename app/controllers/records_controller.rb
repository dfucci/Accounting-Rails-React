class RecordsController < ApplicationController
  def index
    @records = Record.all.to_a
  end

  def create
    @record = Record.new(record_params)
    if @record.save
      render json: @record.else
      else
        render json: @record.errors, status: :unprocessable_entity
    end
  end
  private
  def record_params
    params.require(:record).permit(:title, :amount, :date)
  end
end
