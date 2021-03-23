// const url = 'https://www.nowcoder.com/practice/a3ded747e3884a3c86d09d88d1652e10?tpId=2&tqId=10852&rp=1&ru=%2Fta%2Ffront-end&qru=%2Fta%2Ffront-end%2Fquestion-ranking&tab=answerKey'
const url = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key'

const getUrlParam = (url, key) => {
  const paramList = url.split('#')[0].replace(/^.+\?(.+)#??$/, '$1').split('&').reduce((acc, cur) => {
    const key = cur.replace(/(.+)=(.+)/, '$1')
    const val = cur.replace(/(.+)=(.+)/, '$2')
    acc[key] = acc[key] ? [].concat(acc[key], val): val
    return acc
  }, {})


  return key ? paramList[key] || '': paramList
}

console.log(getUrlParam(url, 'a'))
