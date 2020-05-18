import React, { Component } from 'react';

import { Link } from "react-router-dom";
import Footer from '../template/Footer';
import Header from '../template/Header';
import HomeForm from '../forms/HomeForm'
// import MapContainer from '../forms/MapContainer';
// import SideBar from "../../sidebar";
import axios from 'axios';

class HomePage extends Component {

    submit = (data) => {
        console.log(data);
        console.log("axios post")
        // axios.post('http://localhost:3000/', data)
        axios.post('/', data)
            .then(function (response) {
                console.log("Success posting the all coordinates");
                console.log(response);
            }).catch(function (error) {
                console.log("Error posting");
                console.log(error);
            });
        this.props.history.push('/area');
    }

    render() {
        return (
            <div>
                <Header />
                <HomeForm submit={this.submit} />
                <Footer />
            </div>
        )
    }
}

export default HomePage;
