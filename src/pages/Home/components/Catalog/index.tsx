import {
  CartNavigationButton,
  CoffeeTitle,
  ContainerCoffeeMenu,
  ContainerContentCoffeeMenu,
  ContainerPriceCoffeeMenu,
} from './styles';

import { ShoppingCartSimple } from '@phosphor-icons/react';
import { CoffeQuantity } from '../../../../components/CoffeeQuantity';
import { useContext, useState } from 'react';
import { CoffeeContext } from '../../../../contexts/CoffeeContext';
import currencyFormatter from '@/utils/currencyformatter';

interface CatalogProps {
  coffee: {
    id: number;
    type: string;
    title: string;
    description: string;
    price: number;
    image: string;
  }
}

export function Catalog({ coffee } : CatalogProps) {
  const { createNewCoffeeOrder } = useContext(CoffeeContext);
  const [quantity, setQuantity] = useState<number>(1);

  function handleCreateNewCoffee() {
    createNewCoffeeOrder({ id: coffee.id, quantity });
  }

  function incrementQuantity() {
    if (quantity < 20) {
      setQuantity((state) => state + 1);
    }
  }

  function decreaseQuantity() {
    if (quantity > 0) {
      setQuantity((state) => state - 1);
    }
  }

  return (
    <ContainerCoffeeMenu>
      <img src={ coffee.image } alt="" />

      <ContainerContentCoffeeMenu>
        <header>
          {coffee.type}
        </header>

        <CoffeeTitle>
          {coffee.title}
        </CoffeeTitle>

        <p>
          {coffee.description}
        </p>
        <ContainerPriceCoffeeMenu>
          <p>
            R$ <span>{currencyFormatter(coffee.price)}</span>
          </p>
          <div>
            <CoffeQuantity
              decreaseQuantity={decreaseQuantity}
              incrementQuantity={incrementQuantity}
              quantity={quantity}
            />
            <CartNavigationButton onClick={handleCreateNewCoffee}>
              <ShoppingCartSimple size={22} weight="fill" />
            </CartNavigationButton>
      
          </div>
        </ContainerPriceCoffeeMenu>
      </ContainerContentCoffeeMenu>
    </ContainerCoffeeMenu>
  );
}
