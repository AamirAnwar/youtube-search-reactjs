import {DID_SELECT_VIDEO,FETCH_VIDEOS} from '../actions';
export default function(state=null, action) {
  switch (action.type) {
    case FETCH_VIDEOS:
    return action.payload.data.items[0];

    case DID_SELECT_VIDEO:
    return action.payload;
    default:
    return state;
  }
};
