import { FETCH_SEARCH,FETCH_USERNAME} from './types';

export const fetchSearch = (text) => dispatch => {
  fetch('https://api.github.com/search/users?q=' + text + '+repos:%3E42+followers:%3E1000')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_SEARCH,
        payload: posts
      })
    );
};
export const fetchUsername = user => dispatch => {
  fetch('https://api.github.com/users/'+user)
    .then(res => res.json())
    .then(post =>
      dispatch({
        type:FETCH_USERNAME,
        payload: post
      })
      
    );
    console.log(user)
};