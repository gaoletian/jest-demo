// import DataTypes from 'sequelize'

// const __seq = global.__seq
// const env = process.env.NODE_ENV = 'unit'

const modelMock = {
  all() {},
  count(option){},
  max(field, [options]) {},
  min(field, [options]) {},
  sum(field, [options]) {},

  //
  belongsTo() {},
  hasMany() {},

  //
  build(values, options) {},
  bulkCreate(records, [options]) {},
  save() {},

  find () {},
  findOne (option) {},
  findAll (option ,raw = true) {},
  findById (id, options) {},
  findOrCreate(options) {},
  findCreateFind(options) {},
  findAndCount(findOptions) {},
  findAndCountAll(option) {},
  findAll(){},
  //
  create(values, options) {},
  update(values, options) {},
  upsert(values, options) {},

  //
  truncate(options) {},
  destroy(options) {},
  restore(options) {},
  describe() {},
}

// const Models = (env === 'unit') ?
//   {
//     user: modelMock,
//     user_bank_card: modelMock,
//   }
//   :
//   {
//     user: require('./user')(__seq, DataTypes),
//     user_bank_card: require('./user')(__seq, DataTypes),
//   }
export default {
  user: modelMock,
  user_bank_card: modelMock,
}
