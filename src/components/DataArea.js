import React from "react";
import Moment from 'react-moment';
import "../style/style.css";

function DataArea(props) {
      return (
        <table className="employeeTable">
            <thead>
                <tr>
                    <th>Head Shot</th>
                    <th onClick={props.sortByName}>Name</th>
                    <th>Phone</th>
                    <th>E-mail</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map(result => (
                      <tr key={result.login.uuid}>
                        <td> <img src={result.picture.medium} alt="" /></td>
                        <td>{result.name.first + " " + result.name.last}  </td>
                        <td>{result.cell}</td>
                        <td><a href={result.email}>{result.email}</a></td>
                        <td><Moment format="MM/DD/YYYY">{result.dob.date}</Moment></td>

                    </tr>
                ))}
            </tbody>
        </table >
    )

}

export default DataArea