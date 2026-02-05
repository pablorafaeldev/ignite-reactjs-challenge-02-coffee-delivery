import { useContext } from 'react';
import { CoffeeContext } from '@/contexts/CoffeeContext';

import { AsideContainer, ButtonOrderConfirm, OrderSummary } from './styles';

import { coffees } from '../../../../../data.json';

import { Item } from '@/reducers/cart/reducer';
import { CartList } from './CartList';

export function CartOrder() {
  const {
    cart,
    increaseQuantityItemInCart,
    decreaseQuantityItemInCart,
    removeCoffeeCart,
  } = useContext(CoffeeContext);

  const cartInCoffee = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);

    if (!coffeeInfo) {
      throw new Error('Item não existe');
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    };
  });

  const totalValueInCart = cartInCoffee.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual.quantity * valorAtual.price;
  }, 0);

  const delivery = 3.5;

  const orderTotal = delivery + totalValueInCart;

  function handleIncreaseCoffeeQuantity(itemId: Item['id']) {
    increaseQuantityItemInCart(itemId);
  }

  function handleDecreaseCoffeeQuantity(itemId: Item['id']) {
    decreaseQuantityItemInCart(itemId);
  }

  function handleRemoveCoffee(itemId: Item['id']) {
    removeCoffeeCart(itemId);
  }

  return (
     <AsideContainer>
      <h2>Cafés Selecionados</h2>
      <section>
        {cartInCoffee.map((coffee) => {
          return (
           <CartList
            onIncreaseCoffeeQuantity={handleIncreaseCoffeeQuantity}
            onDecreaseCoffeeQuantity={handleDecreaseCoffeeQuantity}
            onRemoveCoffee={handleRemoveCoffee}
            coffee={coffee}
           />
          );
        })}
        <OrderSummary>
          <div>
            <p>Total de Itens</p>
            <p>R${totalValueInCart.toFixed(2)}</p>
          </div>
          <div>
            <p>Entrega</p>
            <p>R${delivery.toFixed(2)}</p>
          </div>
          <div>
            <p>Total</p>
            <p>R${orderTotal.toFixed(2)}</p>
          </div>
        </OrderSummary>
        <ButtonOrderConfirm type="submit" form="order">
          <a href="/pedidos">Confirmar pedido</a>
        </ButtonOrderConfirm>
      </section>
    </AsideContainer>
  )
}