import React, { Component } from 'react';
import './Door.css';
export default class Door extends Component {
    constructor() {
        super();
        this.state = {
            doorPath: "./public/img/closed.png",
            doorStatus: true
        }
    }
    render() {
        return (
            <div className="card text-white bg-dark mb-3" id="DoorCard">
                <div className="card-header h4">Qapı</div>
                <div className="card-body">
                    <div className="DoorImgCover" onClick={() => {
                        this.setState({ doorStatus: !this.state.doorStatus })
                        if (this.state.doorStatus == true) {
                            this.setState({ doorPath: "./public/img/open.png" })
                        } else {
                            this.setState({ doorPath: "./public/img/closed.png" })
                        }
                    }}>
                        <img className="card-img-top" src={this.state.doorPath} alt="Card image cap" />
                        <h3 style={this.state.doorStatus == true ? { color: "red" } : { color: "green" }}>{this.state.doorStatus == false ? "Açıq" : "Bağlı"}</h3>
                    </div>
                    <a href="#" className="card-link text-white">Günlük şkala</a>
                </div>
            </div>
        )
    }
}