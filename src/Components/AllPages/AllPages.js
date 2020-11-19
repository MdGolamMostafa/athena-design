import React from 'react';
import Footer from '../Footer/Footer';
import GetSearchDesign from '../GetSearchDesign/GetSearchDesign';
import Home from '../Home/Home';
const AllPages = () => {
    return (
        <div>
            <Home/>
            <GetSearchDesign/>
            <Footer/>
        </div>
    );
};

export default AllPages;