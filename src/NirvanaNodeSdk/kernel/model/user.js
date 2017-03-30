module.exports = function (sequelize,DataTypes) {
  return sequelize.define("user", {
    name: DataTypes.STRING,
    deadline: DataTypes.DATE,
    importance: DataTypes.INTEGER
  })
}
