import engine from '../src/store-engine.js'
import localStorage from  '../storages/localStorage.js'
import sessionStorage from  '../storages/sessionStorage.js'
import cookieStorage from  '../storages/cookieStorage.js'
import memoryStorage from  '../storages/memoryStorage.js'

const storages = [
	localStorage,
	sessionStorage,
	cookieStorage,
	memoryStorage,
]
var plugins = []

export default engine.createStore(storages, plugins)
