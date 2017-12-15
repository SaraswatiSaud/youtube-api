export default function(state=0, action) {
  switch (action.type) {
    case 'LIKE VIDEO':
      return state + 1
      break;
    default:
      return state;
  };
  return state;
}
