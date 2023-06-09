import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./reset.css";
import "./index.css";
import "./utility-classes.css";
import { persistor, store as reduxStore } from "./redux/redux-store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Spin } from "antd";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <PersistGate persistor={persistor} loading={<Spin size="large" />}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
