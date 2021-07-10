import React from "react";
import Header from "./major/Header";
import BottomBar from "./major/BottomBar";
import Main from "./major/Main";
import Brands from "./major/Brands";
import Categories from "./major/Categories";
import Callback from "./major/Callback";
import Features from "./major/Features";
import Newsletter from "./major/Newsletter";
import RecentProduct from "./major/RecentProduct";
import Review from "./major/Review";
import Footer from "./major/Footer";




const General = (): JSX.Element => {
    return (
        <>
            <Header />
            <BottomBar />
            <Main />
            <Brands />
            <Categories />
            <Callback />
            <Features />
            <Newsletter />
            <RecentProduct />
            <Review />
            <Footer />
        </>
    )
}

export default General