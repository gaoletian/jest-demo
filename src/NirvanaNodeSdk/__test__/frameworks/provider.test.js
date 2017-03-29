import provider, {nirvana, jiea} from '../../provider'
test('NirvanaNodeSdk/provider 可以静态导入', () => {
  expect(provider).toBeDefined()
})

/**
 * 命名空间测试
 */
test('provider.nirvana 不是 undefined', () => {
  expect(provider.nirvana).toBeDefined()
})
test('nirvana 不是 undefined', () => {
  expect(nirvana).toBeDefined()
})


test('provider.jiea 不是 undefined', () => {
  expect(provider.jiea).toBeDefined()
})

test('jiea 不是 undefined', () => {
  expect(jiea).toBeDefined()
})

/**
 * 函数测试
 */

test('nirvana.user.addUser() 结果应包含 {code, message, result}', async () => {
  let res = await nirvana.user.addUser()
  expect(res.code).toBe(200)
})

test('nirvana.addUser() 结果应包含 {code, message, result}',  async () => {
  let res = await jiea.addUser()
  expect(res.code).toBe(200)
})
