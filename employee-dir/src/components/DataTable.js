import React from "react";
import API from "../utils/API";
//import Nav from "./Nav";

class DataTable extends React.Component {
    state = {
        result: [],
        filter: [],
        search: ""
    };

    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = () => {
        API.getUsers()
          .then(res => this.setState({ result: res.data.results }))
          .then(res => this.setState({ filter: this.state.result }))
          .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        //const name = event.target.name;
        // this.searchEmployees();
        const filtered = this.state.result.filter(query => query.name.first.includes(value) || query.name.last.includes(value));
        this.setState({ filter: filtered })
    }

    regularSifting = date => (
        date.replace(/T.*/, "")
    );
    render() {
        return(
            <>
            <nav className="navbar navbar-dark bg-dark justify-content-center">
                <form className="form-inline">
                    <input 
                    className="form-control mr-sm-2" 
                    onChange={this.handleInputChange}
                    //value={this.state.search}
                    type="search" 
                    placeholder="Search" 
                    />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Reset</button>
                </form>
            </nav>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.filter.map(element => (
                        <tr>
                        <th scope="row"><img alt={element.name.first} src={element.picture.thumbnail}></img></th>
                        <td>{element.name.first + " " + element.name.last} </td>
                        <td>{element.phone}</td>
                        <td>{element.email}</td>
                        <td>{this.regularSifting(element.dob.date)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </>
        )
    }
}

export default DataTable;