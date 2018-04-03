import React, { Component } from 'react';
import './Door.css';
export default class Door extends Component {
    render() {
        return (
            <div className="card text-white bg-dark mb-3" id="DoorCard">
                <div className="card-header h4">Qapı</div>
                <div className="card-body">
                    <div className="DoorImgCover">
                        <img className="card-img-top" src="./public/img/door.png" alt="Card image cap" />
                        <h3>Bağlı</h3>
                    </div>
                    <a href="#" className="card-link text-white">Günlük şkala</a>
                </div>
            </div>
        )
    }
}