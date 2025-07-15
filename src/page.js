import React from "react";
import Header from "./components/header";
import "./page.css";

const Page = () => {
    return  (
        <div className="container">
            {/* Navbar */}
            <Header />
            <div className="main-content">
                <div className="content">
                    <img src="https://raw.githubusercontent.com/duknow/duknow/main/src/assets/logo.png" alt="Logo" className="logo" />
                    <h1 className="title">Welcome to Duknow</h1>
                </div>
            </div>
            
         </div>
    )
}
export default Page;