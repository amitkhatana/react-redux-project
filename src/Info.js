import React, {Component} from "react";
import { connect } from 'react-redux';
import { fetchSearch, fetchUsername } from './action/FAction.js';
class Info extends Component{
    constructor(props) {
        super(props);
        this.state = {
          data:[]  
            
        }

    }
    
componentWillMount(){
    this.props.fetchUsername(this.props.location.state.fetchUsername); 
    console.log(this.props.location.state.fetchUsername); 
}
    
    render(){
        console.log('data::',this.props.posts)
       
        return(
            <div>
                <h1>{this.props.posts.item.login}</h1>
                <img src={this.props.posts.item.avatar_url}/>
            </div>
    )
}
}
const mapStateToProps = state => {
    const {posts} = state;
    return {posts};
    }
export default connect(mapStateToProps,{fetchSearch, fetchUsername})(Info);