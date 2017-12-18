export default function(state=null, action) {
  switch (action.type) {
    case 'LIKE VIDEO':
      return state + 1
      break;
    default:
      return state;
  };
  return state;
}
