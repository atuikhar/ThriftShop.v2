import { combineReducers } from 'redux'

import productsReducer from './product'
import productReducer from './productById'
import userReducer from './user'

const rootReducer = combineReducers({
  products: productsReducer,
  product: productReducer,
  user: userReducer,
})

export default rootReducer
