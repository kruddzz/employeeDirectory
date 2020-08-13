import React, { Component } from "react";
import API from "../utils/API";

class Directory extends Component {
    state ={
        users: [],
        order: "descend",
        filteredUsers: [],
        headings: []
    }

}

export default Directory;