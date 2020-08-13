import React, { Component } from "react";
import API from "../utils/API";

class Directory extends Component {
    state ={
        employees: [],
        order: "",
        filteredEmployees: [],
        search: ""
    }

    componentDidMount() {
        API.getUsers().then(res => this.setState({ 
            employees: res.data.results,
            filteredEmployees: res.data.results
        })
        )
        .catch(err => console.log(err))
    }
    
    sortByName = () => {
        const filter = this.state.filteredEmployees;
        if (this.state.order === "asc") {
            const sorts = filter.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
            console.log(sorts)

            this.setState({
                filteredEmployees: sorts,
                order: "desc"
            })
        } else {

            const sorts = filter.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
            console.log(sorts)

            this.setState({
                filteredEmployees: sorts,
                order: "asc"
            })

        }
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