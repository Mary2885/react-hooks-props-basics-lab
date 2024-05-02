import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "../reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
        <App></App>
        
        </BrowserRouter>
    </React.StrictMode>
)

ReactDOM.render(<App />, document.getElementById("root"));
