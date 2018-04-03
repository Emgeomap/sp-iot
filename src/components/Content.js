import React from 'react';
import Heat from '../components/Sensors/Heat';
import Humidity from '../components/Sensors/Humidity';
import Door from '../components/Sensors/Door';
import DateTime from '../components/Sensors/DateTime';
import EmployeeTable from '../components/Sensors/EmployeeTable'
import './Content.css';

export default class Content extends React.Component {
    render() {
        return (
            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col-sm-4 coverSensorColumn">
                        <Heat heat="75"/>
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
