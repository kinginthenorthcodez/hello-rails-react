class Api::V1::MessagesController < ApplicationController
  def index
    @greet = Message.order('RANDOM()').first
    render json: { status: 'Success', message: 'Loaded greetings', data: @greet }, status: :ok
  end
end
