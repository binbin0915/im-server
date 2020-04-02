module.exports = app => {
  const { STRING, JSON, INTEGER, BOOLEAN } = app.Sequelize;

  const Message = app.model.define('message', {
    hasRead: {
      type: BOOLEAN
    },
    // 消息体
    body: {
      type: JSON
    },
    fromId: { type: INTEGER },
    toId: { type: INTEGER }
  });

  return Message;
};
