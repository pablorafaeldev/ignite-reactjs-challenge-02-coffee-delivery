import { useContext } from 'react';
import { CoffeeContext } from '@/contexts/CoffeeContext';

import {
  AsideContainer,
  ButtonOrderConfirm,
  OrderSummary,
  Separator,
  AddOrRemoveItemsCart,
  CoffeeDetails,
  ItemContainer,
  ItemContent,
  ItemDetails,
  RemoveItemButton,
} from './styles';

import { coffees } from '../../../../../data.json';

import { Item } from '@/reducers/cart/reducer';
import { CoffeQuantity } from '@/components/CoffeeQuantity';
import { Trash } from '@phosphor-icons/react';

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

  function handleRemoveCoffeeCart(itemId: Item['id']) {
    removeCoffeeCart(itemId);
  }

  return (
     <AsideContainer>
      <h2>Cafés Selecionados</h2>

      <section>
        {cartInCoffee.map((coffee) => {
          return (
            <ItemContainer key={coffee.id}>
              <ItemContent>
                <ItemDetails>
                  <img src={coffee.image} alt="" />
                  <CoffeeDetails>
                    <p>{coffee.title}</p>
                    <AddOrRemoveItemsCart>
                      <CoffeQuantity
                        quantity={coffee.quantity}
                        incrementQuantity={() =>
                          handleIncreaseCoffeeQuantity(coffee.id)
                        }
                        decreaseQuantity={() =>
                          handleDecreaseCoffeeQuantity(coffee.id)
                        }
                      />
                      <RemoveItemButton
                        onClick={() => handleRemoveCoffeeCart(coffee.id)}
                      >
                        <Trash />
                        Remover
                      </RemoveItemButton>
                    </AddOrRemoveItemsCart>
                  </CoffeeDetails>
                </ItemDetails>
                <p>R${coffee.price.toFixed(2)}</p>
              </ItemContent>
              <Separator></Separator>
            </ItemContainer>
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