import React from "react"
import "./style.css";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";


function Search(props) {

    return (
        <Container>
            <header className="z-depth-3 col s12" >
                <Row>
                    <Col size="md-6" >
                        <h1>Employee Directory</h1>
                        <p>Use The Search Box To Narrow Search!</p>
                    </Col>
                     <Col size="md-12" >
                        <Col size="md-12" >

                            <input
                                onChange={props.handleInputChange}
                                value={props.value}
                                id="employees"
                                type="text"
                                name="search"
                                list="employee"
                                className=" inputBox "
                                placeholder="Search by name" />
                        </Col>
                        {/* <div className="col m4">
                            <button
                                type="submit"
                                value=""
                                className=" btn z-depth-2 waves-effect  searchBttn"
                                // onClick={props.handleSearch} 
                                >
                                Search
                            </button>
                        </div> */}
                    </Col>
                </Row>
            </header>
        </Container>
    )
}

export default Search