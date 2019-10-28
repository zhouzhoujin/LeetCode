// export default (str) => {
//   // str按空格分切，保存为数组
//   // 循环分割每一片段，保存为数组之后掉转，然后用join方法连接起来
//   return str.split(' ').map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }
export default (str) => {
  // 正则匹配，保存为数组
  // 循环分割每一片段，保存为数组之后掉转，然后用join方法连接起来
  return str.match(/[\w']+/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}
