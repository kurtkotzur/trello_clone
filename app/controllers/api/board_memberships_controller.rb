module Api
  class BoardMembershipsController < ApiController
    wrap_parameters include: [:board_id, :user_id, :email]
    
    def create
      @board_membership = current_board.board_memberships.new(membership_params)
      
      if @board_membership.save
        render json: @board_membership
      else
        render json: @board_membership.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    def destroy
      @board_membership = BoardMembership.find(params[:id])
      render json: {}
    end
    
    def index
      @board_memberships = BoardMembership.where(board_id: params[:board_id])
      render :index
    end
    
    def show
      @board_membership = BoardMembership.includes().find(params[:id])
      render :show
    end
    
    private
    
    def current_board
      if params[:board_membership]
        @board = Board.find(params[:board_membership][:board_id])
      end
    end

    def membership_params
      params.require(:board_membership).permit(:board_id, :user_id, :email)
    end
    
  end
end
