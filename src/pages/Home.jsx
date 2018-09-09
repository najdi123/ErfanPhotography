 import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Gallery from '../components/Gallery'
 import Services from '../components/Services'
 import About from '../components/About'
 import Process from '../components/Process'
 import Brands from '../components/Brands'
 import News from '../components/News'



class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron/>
                <Gallery/>
                <Services/>
                <About/>
                <Process/>
                <Brands/>
                <News/>

                <Footer />
            </div>
        );
    }
}

export default Home;