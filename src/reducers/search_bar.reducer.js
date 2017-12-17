// for this particular state the default value is null
export default function(state = [], action = {}) {
  switch (action.type) {
    case 'FETCH_VIDEO':
      return [ action.payload, ...state];
      break;
    default:
      return state;
  }
}
