import React, { Component } from 'react';
import './Door.css';
import axios from 'axios';
export default class Door extends Component {
    constructor() {
        super();
        this.state = {
            doorPath: "./public/img/closed.png",
            doorStatus: "false"
        }
    }
    getDoorInfo = () => {
        let _this = this
        axios.get('http://localhost:3000/getDoorPosition')
            .then(function (data) {
                if (data.data.status !=_this.state.doorStatus) {
                    console.log("recived");
                    _this.setState({ doorStatus: data.data.status })
                    _this.state.doorStatus == "false" ? _this.setState({ doorPath: "./public/img/closed.png" }) : _this.setState({ doorPath: "./public/img/open.png" })
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    componentDidMount() {
        setInterval(this.getDoorInfo, 2000);
    }

    render() {
        return (
            <div className="card text-white bg-dark mb-3" id="DoorCard">
                <div className="card-header h4">Qapı</div>
                <div className="card-body">
                    <div className="DoorImgCover" >
                        <img className="card-img-top" src={this.state.doorPath} alt="Card image cap" />
                        <h3 style={this.state.doorStatus == "false" ? { color: "green" } : { color: "red" }}>{this.state.doorStatus == "true" ? "Açıq" : "Bağlı"}</h3>
                    </div>
                    <a href="#" className="card-link text-white">Günlük şkala</a>
                </div>
            </div>
        )
    }
}