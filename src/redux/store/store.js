// ** Redux, Thunk & Root Reducer Imports
import thunk from 'redux-thunk'
import createDebounce from 'redux-debounced'
import rootReducer from '../reducer/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


// ** init middleware
const middleware = [thunk, createDebounce()]

// ** Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistenceConfigs = {
    key: 'reducer', // whatever you want to keep as your key
    storage
  }
  const persistedReducer = persistReducer(persistenceConfigs, rootReducer)  

// ** Create store
const store = createStore(
    persistedReducer, {}, composeEnhancers(applyMiddleware(...middleware))
  )
  
// ** Presistor
const persistedStore = persistStore(store)
  

export { store, persistedStore }
