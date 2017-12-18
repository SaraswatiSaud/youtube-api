export default function(state=null, action) {
  switch (action.type) {
    case 'DISLIKE VIDEO':
      return state + 1
      break;
    default:
      return state;
  };
  return state;
}
