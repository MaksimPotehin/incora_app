import React, {Component} from "react";
import './Posts.css'
import {connect} from 'react-redux'
import {createNewPost, getPosts, handlePopup, sendNewPost} from "../../store/actions/actionsPosts";
import Loader from "../../loader/Loader";
import {Link, withRouter} from "react-router-dom";




class Posts extends Component {

    state = {

    }

    componentDidMount() {
        this.props.getPosts(this.props.match.params.id)
    }

    render() {
        let {posts, isPopupOpen} = this.props;
        let path = this.props.match.params.id
        return(
            <div className='posts'>
                {posts.length === 0 ?
                    <Loader/>
                    :
                    <div>
                        <table >
                            <tbody>
                            {posts.map((item, idx) =>
                                <tr key={idx}>
                                    <td>{item.title}</td><td>{item.body}</td><td><Link to={'/posts/'+ path +'/'+item.id}>Details</Link></td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                        <div onClick={this.props.handlePopup} className='button'>Add New Post</div>
                        {
                            isPopupOpen
                                ?
                                <div>
                                    <div onClick={this.props.handlePopup} className="popup_wrapper"/>
                                    <div className="popup">
                                        <div onClick={this.props.handlePopup} className="close">x</div>
                                        <textarea onChange={(e)=>this.props.createNewPost(e.target.value)} name="" id="" cols="30" rows="10"/>
                                        <div onClick={this.props.sendNewPost} className="button">додати</div>
                                    </div>
                                </div>
                                :
                                null
                        }
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        posts: state.posts.posts,
        isPopupOpen: state.posts.isPopupOpen,
        newPost: state.posts.newPost
    }
}

function mapDispatchToProps(dispatch){
    return{
        getPosts:(id) => dispatch(getPosts(id)),
        handlePopup: () => dispatch(handlePopup()),
        sendNewPost: () => dispatch(sendNewPost()),
        createNewPost: (newPost) => dispatch(createNewPost(newPost))

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts))