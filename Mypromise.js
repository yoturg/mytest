

const FULFILL = 'fulfill'
const REJECT = 'reject'
const PENDING = 'pending'


class MyPromise {
  constructor(resolver) {
    if(typeof resolver === 'function') {
      resolver(this.resolve, this.reject)
    } else {
      throw new TypeError(`Promise resolver ${Object.prototype.toString.call(resolver)} is not a function`)
    }
  }
  status = PENDING
  result = undefined
  reson = undefined

  resolve = (function(res){
    if(this.status === PENDING) {
      this.status = FULFILL
      this.result =res
    }
  }).bind(this)

  reject = (reson) => {
    if(this.status === PENDING) {
      this.status = REJECT
      this.reson = reson
    }
  }
  then = (onFulfillment, onRejection) => {
    if(this.status === FULFILL) {
      onFulfillment(this.result)
    } else {
      onRejection && onRejection(this.reson)
    }
  }
}

// const promise = new Promise((resolve, reject) => {
//   resolve('111')
// })

// promise.then((res) => {
//   console.log(res)
// })

const mypromise = new MyPromise((resolve, reject) => {
  // reject()
  setTimeout(() => {
    resolve()
  }, 2000)
})
mypromise.then(res => {
  console.log('then', res)
})
// console.log('mypromise', mypromise)

// const mypromise = new MyPromise([])