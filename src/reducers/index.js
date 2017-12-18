import {combineReducers} from 'redux';
import videos from './searchBarReducer';
import LikeReducer from './likeReducer';
import DislikeReducer from './dislikeReducer';
import CommentReducer from './commentReducer';
import ReplyReducer from './replyReducer';

const allReducers = combineReducers({
  videos: videos,
  likeValue: LikeReducer,
  dislikeValue: DislikeReducer,
  comment: CommentReducer,
  reply: ReplyReducer
});

export default allReducers;
