class Api::DepartmentsController < ApplicationController

  def index
    render json: Department.all
  end

  def create
    @department = Department.new(department_params)
    if department.save
      render json: department
    else
      render json: { errors: course.errors }, status: :unprocessable_entity
    end
  end

  def update
    @department = Department.find(params[:id])
    if department.update(department_params)
      render json: department
    else
      render json: { errors: department.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Department.find(params[:id]).destroy
    render json: { message: 'department deleted' }
  end

  def show
    # shows a indvidual course lesson
    @department = Department.find(params[:id])
    render json: @department.products
  end

  private

  def department_params
    params.require(:department).permit(:title, :id)
  end

end
