import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Provider } from "react-redux";
import productStore from "./utils/productStore";

function App() {
  return (
    <>
      <Provider store={productStore}>
        <Header />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
