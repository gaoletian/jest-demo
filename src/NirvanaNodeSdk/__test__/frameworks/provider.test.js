import model from '../../kernel/model'
import provider from '../../provider'
import bluebird from 'bluebird'
/**
 * 静态导入测试
 */
describe('es6 import test', () => {
  it('import provider', () => {
    expect(provider).toBeDefined()
  });
  it('import model', () => {
    expect(model).toBeDefined()
  });

});

/**
 * 命名空间测试
 */
describe('name-space test', () => {
  it('provider.nirvana', () => {
    expect(provider.nirvana).toBeDefined()
    expect(provider.nirvana.user).toBeDefined()
    // expect(provider.nirvana.user.addUser).toBeDefined()
  });
  it('provider.jiea', () => {
    expect(provider.jiea).toBeDefined()
    // expect(provider.jiea.addUser).toBeDefined()
  });
});


/**
 * 返回结果测试
 */
describe(`"provider.nirvana.user" all method should contain { code, message, result}`, async () => {
  const allMethod = Object.keys(provider.nirvana.user)
  const expected = ['code', 'message', 'result']

  allMethod.forEach( fucName => {
    it(`provider.nirvana.user.${fucName}()`, async () => {
      let res = await provider.nirvana.user[fucName]()
      expect(Object.keys(res)).toEqual(expect.arrayContaining(expected));
    })
  })
})

describe(`"provider.jiea" all method should contain { code, message, result}`, async () => {
  const allMethod = Object.keys(provider.jiea)
  const expected = ['code', 'message', 'result']

  allMethod.forEach( fucName => {
    it(`provider.jiea.${fucName}()`, async () => {
      let res = await provider.jiea[fucName]()
      expect(Object.keys(res)).toEqual(expect.arrayContaining(expected));
    })
  })
})
