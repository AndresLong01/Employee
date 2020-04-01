import React from "react";

function Table () {
    return (
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
                <tr>
                <th scope="row"><img alt= "cat" src="https://d2ph5fj80uercy.cloudfront.net/04/cat3730.jpg"></img></th>
                <td>Cat Jones</td>
                <td>123-456-7890</td>
                <td>cat@mdo</td>
                <td>01-01-2002</td>
                </tr>
                <tr>
                <th scope="row"><img alt= "cat" src="https://d2ph5fj80uercy.cloudfront.net/04/cat3730.jpg"></img></th>
                <td>Cat Jones</td>
                <td>123-456-7890</td>
                <td>cat@mdo</td>
                <td>01-01-2002</td>
                </tr>
                <tr>
                <th scope="row"><img alt= "cat" src="https://d2ph5fj80uercy.cloudfront.net/04/cat3730.jpg"></img></th>
                <td>Cat Jones</td>
                <td>123-456-7890</td>
                <td>cat@mdo</td>
                <td>01-01-2002</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;