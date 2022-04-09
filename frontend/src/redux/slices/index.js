import { combineReducers } from 'redux'

import productsReducer from './product'

const rootReducer = combineReducers({
  products: productsReducer,
})

export default rootReducer
