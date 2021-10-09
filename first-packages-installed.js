// we installed lodash dependency in the json with the terminal
// --> We can require lodash (as it's spelled in the json)
const { INSPECT_MAX_BYTES } = require('buffer')
const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems) 