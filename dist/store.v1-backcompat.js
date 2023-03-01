import engine from '../src/store-engine.js'

import storages from '../storages/all.js'
import plugins from '../plugins/v1-backcompat.js'

export default engine.createStore(storages, plugins)
