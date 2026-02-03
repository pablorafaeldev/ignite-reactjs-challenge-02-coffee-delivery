import { createContext, useEffect, useReducer, type ReactNode } from 'react';
import { cartReducer, Item, type Order } from '../reducers/cart/reducer';
import {
  addNewOrderInCartAction,
  decreaseQuantityItemInCartAction,
  increaseQuantityItemInCartAction,
  newOrderDataAction,
  removeCoffeeCartAction,
} from '../reducers/cart/actions';
import { NewOrderFormData } from '@/pages/Cart/components/Form';
import { useNavigate } from 'react-router-dom';

interface CoffeeContextType {
  cart: Item[];
  orders: Order[];
  totalQuantityCoffee: number;
  createNewCoffeeOrder: (item: Item) => void;
  removeCoffeeCart: (itemId: number) => void;
  increaseQuantityItemInCart: (itemId: number) => void;
  decreaseQuantityItemInCart: (itemId: number) => void;
  newOrderData: (order: NewOrderFormData) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (InitialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return InitialState;
    },
  );

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState);

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON);
  }, [cartState]);

  const { cart, orders } = cartState;

  const navigate = useNavigate();

  const totalQuantityCoffee = cart.length;

  function createNewCoffeeOrder(item: Item) {
    dispatch(addNewOrderInCartAction(item));
  }

  function removeCoffeeCart(itemId: Item['id']) {
    dispatch(removeCoffeeCartAction(itemId));
  }

  function newOrderData(order: NewOrderFormData) {
    dispatch(newOrderDataAction(order, navigate));
  }

  function increaseQuantityItemInCart(itemId: Item['id']) {
    dispatch(increaseQuantityItemInCartAction(itemId));
  }

  function decreaseQuantityItemInCart(itemId: Item['id']) {
    dispatch(decreaseQuantityItemInCartAction(itemId));
  }

  return (
    <CoffeeContext.Provider
      value={{
        cart,
        orders,
        newOrderData,
        createNewCoffeeOrder,
        decreaseQuantityItemInCart,
        removeCoffeeCart,
        increaseQuantityItemInCart,
        totalQuantityCoffee,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
