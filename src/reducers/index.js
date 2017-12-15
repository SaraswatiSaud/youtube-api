import {combineReducers} from 'redux';
import LikeReducer from './like.reducer';
import DislikeReducer from './dislike.reducer';
import CommentReducer from './comment.reducer';

const allReducers = combineReducers({
  likeValue: LikeReducer,
  dislikeValue: DislikeReducer,
  comment: CommentReducer
});

export default allReducers;
