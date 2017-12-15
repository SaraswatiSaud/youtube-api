export const updateComment = (title) => {
  return {
    type: 'ADD_COMMENT',
    payload: title
  };
}
