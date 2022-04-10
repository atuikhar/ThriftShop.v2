import { combineReducers } from 'redux'

import productsReducer from './product'
import productReducer from './productById'

const rootReducer = combineReducers({
  products: productsReducer,
  product: productReducer,
})

export default rootReducer
