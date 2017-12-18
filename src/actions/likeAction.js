export const like = (likeValue) => {
  return {
    type: 'LIKE VIDEO',
    payload: likeValue
  };
}
