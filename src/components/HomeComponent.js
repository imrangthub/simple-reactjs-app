import React, { Component } from 'react';
import HomeService from '../services/HomeService';

class HomeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todoList: [],
            message: null
        }
    }
    componentDidMount() {
        let data = HomeService.getStatucData();
        console.log("getStatucData:", data);
        this.setState({ todoList: data });

        // HomeService.getAllData().then((response) => {
        //     console.log(response);
        // });

    }
    render() {
        return (
            <div className="container">
                <h3>My To List</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todoList.map(
                                    todoObj =>
                                        <tr key={todoObj.id}>
                                            <td>{todoObj.id}</td>
                                            <td>{todoObj.text}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default HomeComponent