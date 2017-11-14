module.exports = function(sequelize, DataTypes) {
    var MasterTask = sequelize.define("MasterTask", {
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      taskID: {
          type : DataTypes.INTEGER,
          allowNull : false
      }
    });
    //Contains User IDs and Task IDs (cross table)
    MasterTask.associate = function(models) {
        //MasterTasks are the tasks the user is "in charge of"
        MasterTask.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        },
        
      }),
       //MasterTasks are the tasks the user is "in charge of"
       MasterTask.belongsTo(models.Task, {
        foreignKey: {
          allowNull: false
        },
        
      });
    };
    return MasterTask;
  };
  