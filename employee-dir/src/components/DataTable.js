import React from "react";
import API from "../utils/API";

class DataTable extends React.Component {
    state = {
        result: [],
        search: ""
    };

    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = () => {
        API.getUsers()
          .then(res => this.setState({ result: res.data.results }))
          .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;

        const filtered = this.state.result.filter(query => query.name.first.contains(value) || query.name.last.contains(value));

        this.setState({ result: filtered })
    }

    regularSifting = date => (
        date.replace(/T.*/, "")
    );
    render() {
        return(
            <tbody>
                {this.state.result.map(element => (
                    <tr>
                    <th scope="row"><img alt={element.name.first} src={element.picture.thumbnail}></img></th>
                    <td>{element.name.first + " " + element.name.last} </td>
                    <td>{element.phone}</td>
                    <td>{element.email}</td>
                    <td>{this.regularSifting(element.dob.date)}</td>
                    </tr>
                ))}
            </tbody>
        )
    }
}

export default DataTable;