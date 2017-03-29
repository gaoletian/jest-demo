import model from '../../kernel/model'

test('NirvanaNodeSdk/kernel/model 可以静态导入', () => {
  expect(model).toBeDefined()
})

test('model.user 不是 undefined', () => {
  expect(model.user).toBeDefined()
})