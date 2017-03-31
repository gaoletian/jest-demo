import DataTypes from 'sequelize'
export default class Model {
  constructor (define) {
    this.define = define
    this.instance = null
  }

  init () {
    if (this.instance !== null) return
    this.instance = this.define(global.__seq, DataTypes)
  }

  all () {
    this.init()
    return this.instance.all()
  }

  count (option) {
    this.init()
    return this.instance.count(option)
  }

  max (field, options) {
    this.init()
    return this.instance.max(field, options)
  }

  min (field, options) {
    this.init()
    return this.instance.min(field, options)
  }

  sum (field, options) {
    this.init()
    return this.instance.sum(field, options)
  }

  //
  belongsTo () {
    this.init()
    return this.instance.belongsTo()
  }

  hasMany () {
    this.init()
    return this.instance.hasMany()
  }

  //
  build (values, options) {
    this.init()
    return this.instance.build(values, options)
  }

  bulkCreate (records, options) {
    this.init()
    return this.instance.bulkCreate(records, options)
  }

  save () {
    this.init()
    return this.instance.save()
  }

  find (options) {
    this.init()
    return this.instance.find(options)
  }

  findOne (option) {
    this.init()
    return this.instance.findOne(...args)
  }

  findAll (option, raw = true) {
    this.init()
    return this.instance.findAll(...args)
  }

  findById (id, options) {
    this.init()
    return this.instance.findById(id, options)
  }

  findOrCreate (options) {
    this.init()
    return this.instance.findOrCreate(options)
  }

  findCreateFind (options) {
    this.init()
    return this.instance.findCreateFind(options)
  }

  findAndCount (findOptions) {
    this.init()
    return this.instance.findAndCount(findOptions)
  }

  findAndCountAll (option) {
    this.init()
    return this.instance.findAndCountAll(options)
  }

  findAll () {
    this.init()
    return this.instance.findAll()
  }

  //
  create (values, options) {
    this.init()
    return this.instance.create(values, options)
  }

  update (values, options) {
    this.init()
    return this.instance.update(values, options)
  }

  upsert (values, options) {
    this.init()
    return this.instance.upsert(values, options)
  }

  //
  truncate (options) {
    this.init()
    return this.instance.truncate(options)
  }

  destroy (options) {
    this.init()
    return this.instance.destroy(options)
  }

  restore (options) {
    this.init()
    return this.instance.restore(options)
  }

  describe () {
    this.init()
    return this.instance.describe()
  }
}
