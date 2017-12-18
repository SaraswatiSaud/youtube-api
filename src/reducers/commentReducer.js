export default function (state = [], action = {}) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        action.payload
      ];
      break;
    default:
      return state;
  }
}
