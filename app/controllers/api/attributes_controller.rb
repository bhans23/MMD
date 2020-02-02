class Api::AttributesController < ApplicationController
  def index
    render json: @mood.attributes
  end

  def create
    @attribute = @mood.attributes.new(attribute_params)
    if @attribute.save
      render json: @attribute
    else
      render json: {errors: @attribute.errors}, status: :unproccessable_entity
    end
  end

  def update
    @attribute = @mood.attributes.find(params[:id])
    if @attribute.update(attribute_params)
      render json: @attribute
    else
      render json: {errors: @attribute.errors}, status: :unproccessable_entity
    end
  end

  def destroy
    @mood.attributes.find(params[:id]).destroy
    render json: {message: 'attribute has been wrecked, bro'}
  end

  private

  def set_attribute
    @mood = mood.find(params[:mood_id])
  end

  def attribute_params
    params.require(:attribute).permit(:date)
  end
end
