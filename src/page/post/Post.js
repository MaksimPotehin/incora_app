import React, {Component} from "react";
import './Post.css'
import {connect} from 'react-redux'
import Loader from "../../loader/Loader";
import {deletedPost, editPost, getFullInfo} from "../../store/actions/actionsPost";
import {withRouter} from "react-router-dom";




class Post extends Component {

    componentDidMount() {
        this.props.getFullInfo(this.props.match.params.id)
    }

    render() {
        let {post, comments} = this.props;
        let postId = this.props.match.params.id;
        console.log('post', post)
        return(
            <div className='post'>
                <h2>POST ITEM</h2>
                {!post.id?
                    <Loader/>
                    :
                    <div>
                        <table >
                            <tbody>
                            <tr>
                                <td><h3>Title</h3> {post.title}</td><td><p><span>Posts:</span></p> {post.body}</td>
                            </tr>
                            </tbody>
                        </table>
                        <div>
                            <h2>Comments:</h2>
                            {comments?comments.map((item,idx) =>(
                                <div className='comments_item' key={idx}>
                                    <p><span>name:</span> {item.name}</p>
                                    <p><span>email:</span>  {item.email}</p>
                                    <p><span>comment:</span> {item.body}</p>
                                </div>
                            )) : null }
                            <div className='button_wrap'>
                                <div onClick={()=>this.props.editPost(postId)} className="button">Edit</div>
                                <div onClick={()=>this.props.deletedPost(postId)} className="button">Delete</div>
                            </div>
                        </div>
                    </div>

                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        post: state.post.post,
        comments: state.post.comments,
    }
}

function mapDispatchToProps(dispatch){
    return{
        getFullInfo:(id) => dispatch(getFullInfo(id)),
        deletedPost:(id) => dispatch(deletedPost(id)),
        editPost:(id) => dispatch(editPost(id))
    }
}

export default withRouter (connect(mapStateToProps, mapDispatchToProps)(Post))