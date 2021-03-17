import React, { Component } from 'react';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import Principle from 'components/Principle';
import Links from 'components/Links';
import Articles from 'components/Articles';
import Resources from 'components/Resources';
import './index.less';

class Index extends Component {
    render() { 
        return (
            <div className="home" >
                <NavBar activeKey='1'/>
                <div className="body">
                    <Banner />
                    <Principle />
                    <Links />
                    <Articles />
                    <Resources />
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Index;
