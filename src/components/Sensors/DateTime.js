import React, { Component } from 'react';
import './DateTime.css';
export default class DateTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
        this.mydtime = setInterval(() => { this.currentTime(), 1000 })
    }
    componentWillUnmount() {
        clearInterval(this.mydtime);
    }
    currentTime() {
        this.setState({
            time: new Date()
        })
    }
    render() {
        let rawSecond = this.state.time.getSeconds();
        let rawMinute = this.state.time.getMinutes();
        let rawHoure = this.state.time.getHours();
        let rawDayOfMounth = this.state.time.getDate();
        let zero = "0";
        let second = "";
        let minute = "";
        let hour = "";
        let mounth = "";
        let dayOfMounth = "";
        let dayOfWeekend = "";
        if (rawSecond < 10) {
            second = zero.concat(rawSecond);
        } else {
            second = rawSecond;
        } if (rawMinute < 10) {
            minute = zero.concat(rawMinute);
        }
        else {
            minute = rawMinute;
        }
        if (rawHoure < 10) {
            zero.concat(rawHoure);
        } else {
            hour = rawHoure;
        } if (rawDayOfMounth < 10) {
            dayOfMounth = zero.concat(rawDayOfMounth);
        } else {
            dayOfMounth = rawDayOfMounth;
        }
        switch (this.state.time.getDate()) {
            case 1:
                dayOfWeekend = "Bazar";
                break;
            case 2:
                dayOfWeekend = "Bazar ertəsi.";
                break;
            case 3:
                dayOfWeekend = "Çərşənbə axşamı";
                break;
            case 4:
                dayOfWeekend = "Çərşənbə";
                break
            case 5:
                dayOfWeekend = "Cümə axşamı";
                break;
            case 6:
                dayOfWeekend = "Cümə";
                break
            case 0:
                dayOfWeekend = "Şənbə";
                break;
        }
        switch (this.state.time.getDay()) {
            case 0:
                mounth = "Yanvar";
                break;
            case 1:
                mounth = "Fevral";
                break;
            case 2:
                mounth = "Mart";
                break;
            case 3:
                mounth = "Aprel";
                break;
            case 4:
                mounth = "May";
                break;
            case 5:
                mounth = "İyun";
                break;
            case 6:
                mounth = "İyul";
                break;
            case 7:
                mounth = "Avgust";
                break;
            case 8:
                mounth = "Sentyabr";
                break;
            case 9:
                mounth = "Oktyabr";
                break;
            case 10:
                mounth = "Noyabr";
                break;
            case 11:
                mounth = "Dekabr";
                break;
        }

        return (
            <div className="card text-white bg-dark mb-3" id="DoorCard">
                <div className="card-header h4">Tarix</div>
                <div className="card-body">
                    <div className="DoorImgCover">
                        <p id="clock">Saat : {hour + ":" + minute + ":" + second}</p>
                        <p>Tarix : {dayOfMounth + "." + mounth + "." + this.state.time.getFullYear()}</p>
                        <p>Həftənin : {dayOfWeekend}</p>
                    </div>
                </div>
            </div>
        )
    }
}