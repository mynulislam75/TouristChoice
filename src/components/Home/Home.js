import React from 'react';
import Banner from '../Banner/Banner';
import Beautifulplaces from '../BeautifulPlaces/Beautifulplaces';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import History from '../History/History';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Beautifulplaces></Beautifulplaces>
            <History></History>
        </div>
    );
};

export default Home;