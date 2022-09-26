const rech = require('../../util/rech.js')
console.log(rech.default)
Page({
  
    data: {
        htmlSnip: rech.default
    },
    complete(res) {
      console.log('=======complete:invoke', res)
    },
  
    reLaunch() {
      
    },
  

  })
  