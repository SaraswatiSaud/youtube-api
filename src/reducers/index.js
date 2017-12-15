import {combineReducers} from 'redux';
import LikeReducer from './like.reducer';
import DislikeReducer from './dislike.reducer';

const allReducers = combineReducers({
  likeValue: LikeReducer,
  dislikeValue: DislikeReducer
});

export default allReducers;
