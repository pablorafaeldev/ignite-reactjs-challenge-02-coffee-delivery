import type { NewOrderFormData } from '@/pages/Cart/components/Form';
import { ActionTypes } from './actions';

export interface Item {
  id: number;
  quantity: number;
}

export interface Order extends NewOrderFormData {
  id: number;
  items: Item[];
}

interface CartState {
  cart: Item[];
  orders: Order[];
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE_CART: {
      const hasItemInCart = state.cart.find(
        (item) => item.id === action.payload.item.id,
      );

      if (hasItemInCart) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            return item.id === action.payload.item.id
              ? { ...item, quantity: item.quantity + 1 }
              : { ...item };
          }),
        };
      }

      return {
        ...state,
        cart: [...state.cart, action.payload.item],
      };
    }

    case ActionTypes.INCREASE_QUANTITY_ITEM_IN_CART: {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.itemId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return { ...item };
        }),
      };
    }

    case ActionTypes.DECREASE_QUANTITY_ITEM_IN_CART: {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.itemId) {
            return { ...item, quantity: item.quantity - 1 };
          }

          return { ...item };
        }),
      };
    }

    case ActionTypes.REMOVE_COFFEE_CART: {
      const removeCoffeeCart = state.cart.filter((coffee) => {
        return coffee.id !== action.payload.itemId;
      });

      return {
        ...state,
        cart: removeCoffeeCart,
      };
    }

    case ActionTypes.NEW_ORDER_DATA_ACTION: {
      const newOrder = {
        id: new Date().getTime(),
        items: state.cart,
        ...action.payload.order,
      };

      return {
        ...state,
        orders: [...state.orders, newOrder],
        cart: [],
        ...action.payload.callback(`/order/${newOrder.id}/success`),
      };
    }

    default:
      return state;
  }
}
