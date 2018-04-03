import React from 'react';
import { Table } from 'reactstrap';

export default class EmployeeTable extends React.Component {
  render() {
    return (
      <Table hover dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Adı Soyadı</th>
            <th>İşə daxil olma vaxtı</th>
            <th>İşdən çıxma vaxtı</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Rasim Ibrahimov </td>
            <td>14.03.2018 14:35</td>
            <td>14.03.2018 18:15</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Rasim Ibrahimov </td>
            <td>14.03.2018 14:35</td>
            <td>14.03.2018 18:15</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Rasim Ibrahimov </td>
            <td>14.03.2018 14:35</td>
            <td>14.03.2018 18:15</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Rasim Ibrahimov </td>
            <td>14.03.2018 14:35</td>
            <td>14.03.2018 18:15</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Rasim Ibrahimov </td>
            <td>14.03.2018 14:35</td>
            <td>14.03.2018 18:15</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Rasim Ibrahimov </td>
            <td>14.03.2018 14:35</td>
            <td>14.03.2018 18:15</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Rasim Ibrahimov </td>
            <td>14.03.2018 14:35</td>
            <td>14.03.2018 18:15</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}