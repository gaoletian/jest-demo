/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userIdentityStatus', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    identityType: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'identity_type'
    },
    identityTime: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'identity_time'
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'user_id'
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
    tableName: 'user_identity_status'
  });
};
