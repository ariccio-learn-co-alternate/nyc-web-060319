class RappersController < ApplicationController
  def index
    @rappers = Rapper.all 
  end

  def show
    @rapper = Rapper.find(params[:id])
  end

  def edit
    @rapper = Rapper.find(params[:id])
  end

  def update
    rapper = Rapper.find(params[:id])
    rapper.update(rapper_params)
    redirect_to rapper_path(rapper)
  end
  def create
    rapper = Rapper.create(rapper_params)
    redirect_to rapper_path(rapper)
  end

  def new
    @rapper = Rapper.new
  end

  private

  def rapper_params
    params.require(:rapper).permit(:name, :age)
  end
end
