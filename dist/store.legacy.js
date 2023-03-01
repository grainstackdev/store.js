import engine from '../src/store-engine.js'

import storages from '../storages/all.js'
import plugins from '../plugins/json2.js'

export default engine.createStore(storages, plugins)
