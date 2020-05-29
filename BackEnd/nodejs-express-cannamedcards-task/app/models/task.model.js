module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define("task", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    finished: {
      type: Sequelize.BOOLEAN
    }
  });

  return Task;
};
