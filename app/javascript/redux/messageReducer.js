const initialState = {
  id: 13,
  greet: "Hey, how are you doing?",
  created_at: "2022-09-20T21:27:23.675Z",
  updated_at: "2022-09-20T21:27:23.675Z",
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ISLOADED":
      return action.payload;
    default:
      return state;
  }
};

//action

export const onFectchOk = (data) => ({
  type: "ISLOADED",
  payload: data,
});

// Thunk function to handle api calls
export const fetchGreet = () => async (dispatch) => {
  const response = await fetch("http://localhost:3000/api/v1/messages");
  const result = await response.json();
  dispatch(onFectchOk(result.data));
};
export default messageReducer;
