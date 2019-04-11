import { FETCH_SEARCH,FETCH_USERNAME} from '../action/types';

const initialState = {
  items: [],
  item:{}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEARCH:
      return {
        ...state,
        items: action.payload.items
      };
      case FETCH_USERNAME:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}