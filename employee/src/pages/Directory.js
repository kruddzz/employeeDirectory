import React, { Component } from "react";
import API from "../utils/API";
import Search from "../components/Search"
import DataArea from "../components/DataArea"

class Directory extends Component {
    state ={
        employees: [],
        order: "",
        filteredEmployees: [],
        search: ""
    }

    componentDidMount() {
        this.employeeSearch();
    }
    
    sortByName = () => {
        const filter = this.state.filteredEmployees;
        if (this.state.order === "asc") {
            const sorts = filter.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
            // console.log(sorts)

            this.setState({
                filteredEmployees: sorts,
                order: "desc"
            })
        } else {
            const sorts = filter.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
            // console.log(sorts)

            this.setState({
                filteredEmployees: sorts,
                order: "asc"
            })
        }
    }

    handleInputChange = event => {
        const employees = this.state.employees;
        const UserInput = event.target.value;
        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
        )
        this.setState({
            filteredEmployees,
        });
    };

    employeeSearch = () => {
        API.getUsers().then(res => this.setState({
                filteredEmployees: res.data.results,
                employees: res.data.results
            })
            )
            .catch(err => console.log(err))
    }



    render() {
        return (
            <div>
                <Search
                    employee={this.state.employees}
                    handleSearch={this.handleSearch}
                    handleInputChange={this.handleInputChange} />
                <DataArea results={this.state.filteredEmployees}
                    sortByName={this.sortByName}
                />
            </div >
        )
    }
}

export default Directory;