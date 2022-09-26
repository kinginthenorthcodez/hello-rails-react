// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails";
// import "./controllers";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { fetchGreet } from "./redux/messageReducer";
import App from "./components/App";

store.dispatch(fetchGreet());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
