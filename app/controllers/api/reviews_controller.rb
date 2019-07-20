class Api::ReviewsController < ApplicationController

  def index
    render json: @product.reviews
  end

  def create
    @review = @product.reviews.new(review_params)
    if @review.save
      render json: @review
    else
      render json: { errors: review.errors }, status: :unprocessable_entity
    end
  end

  def update
    @review = @product.reviews.find(params[:id])
    if @review.update(review_params)
      render json: @review
    else
      render json: { errors: @review.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @review = @product.reviews.find(params[:id])
    @review.destroy
    render json: { message: 'Review deleted' }
  end

  private

  def review_params
    params.require(:review).permit(:subject, :body, :stars, :date, :id)
  end

  def set_product
    @product = Product.find(params[:product_id])
  end

end
