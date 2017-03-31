/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userLoginLog', {
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
    loginChannelId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'login_channel_id'
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
    tableName: 'user_login_log'
  });
};
