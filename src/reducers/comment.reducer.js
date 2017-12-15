export default function (state = [], action = {}) {
  switch (action.type) {
    case 'ADD_COMMENT':
      // let id = action.id
      return [
        ...state,
        action.payload
      ];
      break;
    default:
      return state;
  }
}
