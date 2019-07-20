class Api::ProductsController < ApplicationController

  def index
    render json: @department.products
  end

  def create
    @product = @department.products.new(product_params)
    if @product.save
      render json: @product
    else
      render json: { errors: product.errors }, status: :unprocessable_entity
    end
  end

  def update
    @product = @department.products.find(params[:id])
    if @product.update(product_params)
      render json: @product
    else
      render json: { errors: @product.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @product = @department.products.find(params[:id])
    @product.destroy
    render json: { message: 'Product deleted' }
  end

  private

  def product_params
    params.require(:product).permit(:name, :description, :price, :stock, :id)
  end

  def set_department
    @department = Department.find(params[:department_id])
  end

end
