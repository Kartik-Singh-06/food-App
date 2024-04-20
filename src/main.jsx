import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Context from "./utils/Context.jsx";
import {Provider} from "react-redux";
import store from "./utils/Store.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
 <Provider store={store}> 
    <Context>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context>
    </Provider>
);
