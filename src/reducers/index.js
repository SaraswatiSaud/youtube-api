import {combineReducers} from 'redux';
import SearchBarReducer from './search_bar.reducer';
import LikeReducer from './like.reducer';
import DislikeReducer from './dislike.reducer';
import CommentReducer from './comment.reducer';

const allReducers = combineReducers({
  video: SearchBarReducer,
  likeValue: LikeReducer,
  dislikeValue: DislikeReducer,
  comment: CommentReducer
});

export default allReducers;
