import engine from '../src/store-engine.js'

import storages from '../storages/all.js'
import plugins from '../plugins/all.js'

export default engine.createStore(storages, plugins)
