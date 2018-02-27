import {combineReducers} from 'redux';
import SelectedVideoReducer from './reducer_selected_video';
import VideosReducer from './reducer_videos';

const RootReducer = combineReducers({
  selected_video:SelectedVideoReducer,
  videos:VideosReducer
});
export default RootReducer;
