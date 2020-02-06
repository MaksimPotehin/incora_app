import React, {Component} from "react";
import {connect} from 'react-redux'
import './Users.css'
import {getUsers} from "../../store/actions/actionsUsers";
import Loader from "../../loader/Loader";
import {Link} from "react-router-dom";


class Users extends Component {

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        const {users} = this.props;
        console.log('props', users? users:'err');
        return(
            <div className='users'>
                {!users ?
                    <Loader/>
                    :
                    <table >
                        <tbody>
                        {users.map((item, idx) =>
                            <tr key={idx}>
                                <td>{item.id}</td><td>{item.name}</td><td><Link to={'posts/' + item.id}>posts</Link></td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        users: state.users.usersList,
    }
}

function mapDispatchToProps(dispatch){
    return{
        getUsers:() => dispatch(getUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)