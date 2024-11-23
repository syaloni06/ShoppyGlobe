import { Outlet } from "react-router-dom"; // Import Outlet to render nested routes
import "./App.css"; // Import global CSS for the app's styles
import Header from "./components/Header"; // Import Header component
import { Provider } from "react-redux"; // Import Provider to integrate Redux store with the app
import productStore from "./utils/productStore"; // Import the Redux store for product data
import Footer from "./components/Footer"; // Import Footer component

function App() {
  return (
    <>
      <Provider store={productStore}> {/* Provide the Redux store to the app */}
        <Header /> {/* Render the Header component */}
        <Outlet /> {/* Render the content of the matched route */}
        <Footer/> {/* Render the Footer component */}
      </Provider>
    </>
  );
}

export default App; // Export the App component as default
