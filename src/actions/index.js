import axios from 'axios';
// import _ from 'lodash';
export const DID_SELECT_VIDEO = 'did_select_video';
export const FETCH_VIDEOS = 'fetch_videos';
const API_KEY = "AIzaSyAeAhee6cfDyYaCg0aY9PCKvhdD93Vcqjc";
var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export function didSelectVideo(video) {
  return ({
    type:DID_SELECT_VIDEO,
    payload:video
  });
}



export function fetchVideos(query) {
  // TODO
  var params = {
    part: 'snippet',
    key: API_KEY,
    q: query,
    type: 'video'
  };

  const fetchVideosPromise = axios.get(ROOT_URL, { params: params });
  return {
    type:FETCH_VIDEOS,
    payload:fetchVideosPromise
  };
}
