module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  });

  User.associate = function(models) {
    // Associating Users with Tasks
    // When an User is deleted, also delete any associated Tasks
    User.hasMany(models.Task, {
      onDelete: "cascade"
    }),
    User.hasMany(models.MasterTask);
  };
  return Task;
};
