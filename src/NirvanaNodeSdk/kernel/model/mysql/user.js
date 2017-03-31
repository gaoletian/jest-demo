/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    mobile: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'mobile'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'name'
    },
    idNo: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'id_no'
    },
    bankCardNo: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'bank_card_no'
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'email'
    },
    registerChannelId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'register_channel_id'
    },
    channelUserId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'channel_user_id'
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
    tableName: 'user'
  });
};
