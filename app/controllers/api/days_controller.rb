class Api::DaysController < ApplicationController
  before_action :set_user

  def index
    render json: @user.days
  end

  def create
    @day = @user.days.new(day_params)
    if @day.save
      render json: @day
    else
      render json: {errors: @day.errors}, status: :unproccessable_entity
    end
  end

  def update
    @day = @user.days.find(params[:id])
    if @day.update(day_params)
      render json: @day
    else
      render json: {errors: @day.errors}, status: :unproccessable_entity
    end
  end

  def destroy
    @user.days.find(params[:id]).destroy
    render json: {message: 'day has been wrecked, bro'}
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def day_params
    params.require(:day).permit(:date)
  end
end
