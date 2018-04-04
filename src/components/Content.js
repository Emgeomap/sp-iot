import React from 'react';
import Heat from '../components/Sensors/Heat';
import Humidity from '../components/Sensors/Humidity';
import Door from '../components/Sensors/Door';
import DateTime from '../components/Sensors/DateTime';
import axios from 'axios';
import EmployeeTable from '../components/Sensors/EmployeeTable';
import { Set_Heat, Set_Humudity } from '../../redux/actions';
import './Content.css';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.interval = () => {
            axios.get('http://localhost:3000/gettempurature')
                .then(function (data) {
                    Set_Heat(data.data.heat);
                    Set_Humudity(data.data.humudity)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    componentDidMount() {
        setInterval(this.interval, 5000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col-sm-4 coverSensorColumn" onClick={alert}>
                        <Heat />
                    </div>
                    <div className="col-sm-4 coverSensorColumn">
                        <Humidity />
                    </div>
                    <div className="col-sm-2 coverSensorColumn">
                        <Door />
                    </div>
                    <div className="col-sm-2 coverSensorColumn">
                        <DateTime />
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col-sm-10 offset-1">
                        <h4 className="text-muted tableHeader">İşçi dəvamiyyət cədvəli </h4>
                        <EmployeeTable />
                    </div>
                </div>
            </div>
        )
    }
}
