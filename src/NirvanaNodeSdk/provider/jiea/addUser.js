import fetch from 'node-fetch'

export async function addUser () {
  const result = await fetch('http://www.baidu.com').then(res => res.text())
  return {code: 200, message: 'success', result}
}