import type { NavigateFunction } from 'react-router-dom';
import type { NewOrderFormData } from '@/pages/Cart/components/Form';
import { Item } from './reducer';
export enum ActionTypes {
  ADD_NEW_COFFEE_CART = 'ADD_NEW_COFFEE_CART',
  INCREASE_QUANTITY_ITEM_IN_CART = 'INCREASE_QUANTITY_ITEM_IN_CART',
  DECREASE_QUANTITY_ITEM_IN_CART = 'DECREASE_QUANTITY_ITEM_IN_CART',
  REMOVE_COFFEE_CART = 'REMOVE_COFFEE_CART',
  NEW_ORDER_DATA_ACTION = 'NEW_ORDER_DATA_ACTION',
}

export function addNewOrderInCartAction(item: Item) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE_CART,
    payload: {
      item,
    },
  };
}

export function newOrderDataAction(
  order: NewOrderFormData,
  callback: NavigateFunction,
) {
  return {
    type: ActionTypes.NEW_ORDER_DATA_ACTION,
    payload: {
      order,
      callback,
    },
  };
}

export function increaseQuantityItemInCartAction(itemId: Item['id']) {
  return {
    type: ActionTypes.INCREASE_QUANTITY_ITEM_IN_CART,
    payload: {
      itemId,
    },
  };
}

export function decreaseQuantityItemInCartAction(itemId: Item['id']) {
  return {
    type: ActionTypes.DECREASE_QUANTITY_ITEM_IN_CART,
    payload: {
      itemId,
    },
  };
}

export function removeCoffeeCartAction(itemId: Item['id']) {
  return {
    type: ActionTypes.REMOVE_COFFEE_CART,
    payload: {
      itemId,
    },
  };
}
