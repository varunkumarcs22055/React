import React from "react";
import ReactDOM from "react-dom/client";
import HeaderEle from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import Footer from "./components/Footer";

const AppLayout = () => {
    return (
        <div className="app">
            <HeaderEle />
            <Body />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

