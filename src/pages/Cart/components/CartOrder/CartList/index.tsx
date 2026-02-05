import { CoffeQuantity } from "@/components/CoffeeQuantity";
import { AddOrRemoveItemsCart, CoffeeDetails, ItemContainer, ItemContent, ItemDetails, RemoveItemButton } from "./styles";
import { Trash } from "@phosphor-icons/react";
import { Separator } from "../styles";

interface CartListProps {
  onIncreaseCoffeeQuantity: (ItemId: number) => void;
  onDecreaseCoffeeQuantity: (ItemId: number) => void;
  onRemoveCoffee: (ItemId: number) => void;

  coffee: {
  id: number;
  type: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number
  }
}

export function CartList({coffee, onIncreaseCoffeeQuantity, onDecreaseCoffeeQuantity, onRemoveCoffee} : CartListProps) {
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
                onIncreaseCoffeeQuantity(coffee.id)
              }
              decreaseQuantity={() =>
                onDecreaseCoffeeQuantity(coffee.id)
              }
            />
            <RemoveItemButton
              onClick={() => onRemoveCoffee(coffee.id)}
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
  )
}