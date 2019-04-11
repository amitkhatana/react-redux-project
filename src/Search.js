import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearch, fetchUsername } from './action/FAction.js';
class Search extends Component{

  constructor(props){
    super(props);
    this.state = {
      username: ''
    }
  }

    handleChange = (event) => {
      event.preventDefault();
      const {value, name} = event.target
      this.setState({ [name]: value });
      this.props.fetchSearch(value);
    }
    handleClick = (item) => {
    const {history} = this.props; 
    console.log(item);
    // this.props.fetchUsername(item.login);
    history.push({
      pathname: '/Info',
      state: { fetchUsername: item.login }
    })
    }
  
    renderList = () => {
      return this.props.Search && this.props.Search.map((item, index) => {
          return(
            <div key={index}>
              <div onClick={() => this.handleClick(item)}> {item.login}</div>
              <img src={item.avatar_url}  />
            </div> 
              
          )
      })
      
  }

    

    
  render(){
  //  console.log(this.props.Username);
    const { username } = this.state;
    return(
  <div>
    <form Style="text-align: center;">
      <input type="text" placeholder="Search.." name="username" value={username} onChange={this.handleChange}/>
      
    </form>
    <div Style="text-align: center;">
  {
    this.renderList()
  }
    </div>
    </div>
      
    
    )
  }
}

const mapStateToProps = state => ({
  Search: state.posts.items,
  Username: state.posts.item
});

export default connect(mapStateToProps, { fetchSearch, fetchUsername })(Search);