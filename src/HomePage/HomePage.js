import React, {Component} from 'react';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state ={
            users: []
        };
    }

    componentDidMount() {
        fetch ('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => {
                this.setState({users});
            });

    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Person</th>
                        <th>Email</th>
                        <th>username</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map(user => {
                        return <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                        </tr>
                    })}
                    </tbody>
                </table>


            </div>
        );
    }
}

export default HomePage;