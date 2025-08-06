import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import App from "./components/app/App";
import ScrollToTop from "./components/helpers/ScrollToTop";
import { PersistGate } from "redux-persist/integration/react";
import "./utils/i18n";

import "./style/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <ScrollToTop />
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
);
