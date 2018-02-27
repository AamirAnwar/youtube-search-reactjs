import {FETCH_VIDEOS} from '../actions';

export default function VideosReducer(state=[], action) {
  switch (action.type) {
    case FETCH_VIDEOS:
    return action.payload.data.items;

    default:
    return state
  }
}
