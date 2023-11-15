import React from 'react';
import Main from '../ComponentsHomePage/Main/Main';
import CoffeeListHome from '../ComponentsHomePage/CoffeeHome/CoffeeListHome';
import DripListHome from '../ComponentsHomePage/DripHome/HomeDripList';
import SliderOpt from '../Sliders/SliderOpt/SliderOpt';
import MerchHome from '../ComponentsHomePage/MerchHome/MerchHome';
import ContactsHome from '../ComponentsHomePage/ContactsHome/ContactsHome';

const HomePage = () => {
    return (
        <>
            <Main/>
            <CoffeeListHome/> 
            <DripListHome/>
            <SliderOpt/>
            <MerchHome/>
            <ContactsHome/>            
        </>

    );
};

export default HomePage;