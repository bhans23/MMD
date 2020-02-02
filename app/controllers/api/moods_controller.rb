class Api::MoodsController < ApplicationController
  before_action :set_mood

  def index
    render json: @day.moods
  end

  def create
    @mood = @day.moods.new(mood_params)
    if @mood.save
      render json: @mood
    else
      render json: {errors: @mood.errors}, status: :unproccessable_entity
    end
  end

  def update
    @mood = @day.moods.find(params[:id])
    if @mood.update(mood_params)
      render json: @mood
    else
      render json: {errors: @mood.errors}, status: :unproccessable_entity
    end
  end

  def destroy
    @day.moods.find(params[:id]).destroy
    render json: {message: 'mood has been wrecked, bro'}
  end

  private

  def set_mood
    @day = Day.find(params[:day_id])
  end

  def mood_params
    params.require(:mood).permit(:date)
  end
end
