import localStorage from './localStorage.js'
import oldFFglobalStorage from './oldFF-globalStorage.js'
import oldIEuserDataStorage from './oldIE-userDataStorage.js'
import cookieStorage from './cookieStorage.js'
import sessionStorage from './sessionStorage.js'
import memoryStorage from './memoryStorage.js'

export default [
	// Listed in order of usage preference
	localStorage,
	oldFFglobalStorage,
	oldIEuserDataStorage,
	cookieStorage,
	sessionStorage,
	memoryStorage,
]
