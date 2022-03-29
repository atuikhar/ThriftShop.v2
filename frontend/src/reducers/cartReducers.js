import { CART_ADD_ITEM, CART_REMOVE_ITEM } from 'constants/cartConstants'
import { CART_UPDATE } from './../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload

      // const existItem = state.cartItems.find((x) => x.product === item.product)

      // if (existItem) {
      //   return {
      //     ...state,
      //     cartItems: state.cartItems.map((x) =>
      //       x.product === existItem.product ? item : x
      //     ),
      //   }
      // } else {
      return {
        ...state,
        cartItems: [...state.cartItems, item],
        // }
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      }
    case CART_UPDATE:
      const patchColor = action.payload
      const itemInCart = state.cartItems.find(
        (x) => x.product === patchColor.product
      )
      if (itemInCart) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.color === itemInCart.color ? patchColor.color : x
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    default:
      return state
  }
}
