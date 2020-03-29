import React, { Component } from "react";
import Pagination from '../../common/pagination';
import axios from 'axios';

class Users extends Component {
    componentDidMount = async () => {
        await axios.get('https://reqres.in/api/users?page=1')
            .then(function (response) {
                // handle success
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    render() {
        return (
            <React.Fragment>
                <h2>Users</h2>
                <Pagination
                    initialPage={1}
                    items={300}
                    onChangePage={(index) => console.log(index)}
                />
            </React.Fragment>
        );
    }
}

export default Users;
