import React, { Component } from 'react';
import './Door.css';
import axios from 'axios'
export default class Door extends Component {
    constructor() {
        super();
        this.state = {
            doorPath: "./public/img/closed.png",
            doorStatus: true
        }
        this.interval = () => {
            let _this = this;
            axios.get('http://localhost:3000/doorPosition')
                .then(function (data) {
                    console.log(data)
                    _this.setState({doorStatus:data.data.status})
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    componentDidMount() {
        setInterval(this.interval, 2000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div className="card text-white bg-dark mb-3" id="DoorCard">
                <div className="card-header h4">Qapı</div>
                <div className="card-body">
                    <div className="DoorImgCover" >
                        <img className="card-img-top" src={this.state.doorPath} alt="Card image cap" />
                        <h3 style={this.state.doorStatus == true ? { color: "red" } : { color: "green" }}>{this.state.doorStatus == false ? "Açıq" : "Bağlı"}</h3>
                    </div>
                    <a href="#" className="card-link text-white">Günlük şkala</a>
                </div>
            </div>
        )
    }
}