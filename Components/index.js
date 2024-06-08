import React from "react";
import ReactDOM from "react-dom";
import aboutUs from "../pages/aboutUs";
import store from "./redux/store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  
  function tick() {
    const element = (
      <div>
      <Provider store={store}>
        <aboutUs />
      </Provider>
      </div>
    );
    root.render(element);
  }
  
  setInterval(tick, 1000);

  