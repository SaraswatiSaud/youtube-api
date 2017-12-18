export const updateReply = (reply) => {
  return {
    type: 'REPLY_COMMENT',
    payload: reply
  };
}
