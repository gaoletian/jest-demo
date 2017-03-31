/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userState', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'user_id'
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'state'
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'create_time'
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'update_time'
    }
  }, {
    tableName: 'user_state'
  });
};
