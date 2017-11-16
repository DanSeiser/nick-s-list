module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    completeBy: {
      type: DataTypes.DATEONLY
    },
    isComplete: {
      type: DataTypes.BOOLEAN,
      default : 0
    },
    isConfirmed: {
      type: DataTypes.BOOLEAN,
      default : 0
    }
  });

  Task.associate = function(models) {
    // We're saying that a Task should belong to a User
    // A Task can't be created without an User due to the foreign key constraint
    Task.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Task;
};
