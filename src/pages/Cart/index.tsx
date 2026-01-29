import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import {
  CurrencyDollar,
  MapPinLine,
  Trash,
  Bank,
  CreditCard,
  Money,
} from '@phosphor-icons/react';
import {
  AddressDetails,
  AsideContainer,
  ButtonOrderConfirm,
  CartContainer,
  OrderSummary,
  PayDetails,
  PayDetailsContainer,
  PayMethodContainer,
  Separator,
  AddOrRemoveItemsCart,
  CoffeeDetails,
  ItemContainer,
  ItemContent,
  ItemDetails,
  RemoveItemButton,
  PaymentOptions,
  AddressForm,
  AddressContainer,
  AddressHeading,
} from './styles';

import { Radio } from './components/Form/Radio';
import { useContext } from 'react';
import { CoffeeContext } from '../../contexts/CoffeeContext';
import { CoffeQuantity } from '../../components/CoffeeQuantity';
import { coffees } from '../../../data.json';
import { TextInput } from './components/Form/TextInput';
import { Item } from '../../reducers/cart/reducer';

const newOrderFormValidationSchema = zod.object({
  city: zod.string().min(1, 'informe a cidade'),
  complement: zod.string().min(1, 'informe o complemento'),
  neighborhood: zod.string().min(1, 'informe o bairro'),
  number: zod.number().min(1, 'informe o número da casa'),
  street: zod.string().min(1, 'informe a rua'),
  uf: zod.string().min(1, 'informe a UF').max(2),
  zipCode: zod.string().min(8, 'Informe o CEP').max(9),
  pagamentMethod: zod.enum(['credit', 'debit', 'cash']),
});

export type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>;

export function Cart() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      city: '',
      complement: '',
      neighborhood: '',
      street: '',
      uf: '',
      zipCode: '',
      pagamentMethod: 'cash',
    },
  });

  const isPaymentMethod = watch('pagamentMethod');

  const {
    cart,
    increaseQuantityItemInCart,
    decreaseQuantityItemInCart,
    removeCoffeeCart,
    newOrderData,
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

  const handleOrderCheckout: SubmitHandler<NewOrderFormData> = (data) => {
    newOrderData(data);
  };

  return (
    <CartContainer>
      <section>
        <h2>Complete seu pedido</h2>

        <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
          <AddressContainer>
            <AddressHeading>
              <MapPinLine size={22} />

              <AddressDetails>
                <p>Endereço de Entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </AddressDetails>
            </AddressHeading>

            <AddressForm>
              <TextInput
                placeholder="CEP"
                error={errors.zipCode}
                {...register('zipCode')}
                containerPropsStyle={{ style: { gridArea: 'zipCode' } }}
              />
              <TextInput
                placeholder="Rua"
                error={errors.street}
                {...register('street')}
                containerPropsStyle={{ style: { gridArea: 'street' } }}
                />
              <TextInput
                placeholder="Complemento"
                error={errors.complement}
                {...register('complement')}
                containerPropsStyle={{ style: { gridArea: 'complement' } }}
              />
              <TextInput
                placeholder="Cidade"
                error={errors.city}
                {...register('city')}
                containerPropsStyle={{ style: { gridArea: 'city' } }}
                />
              <TextInput
                placeholder="Bairro"
                error={errors.neighborhood}
                {...register('neighborhood')}
                containerPropsStyle={{ style: { gridArea: 'neighborhood' } }}
                />
              <TextInput
                placeholder="Número"
                error={errors.number}
                {...register('number', { valueAsNumber: true })}
                containerPropsStyle={{ style: { gridArea: 'number' } }}
              />
              <TextInput
                placeholder="UF"
                error={errors.uf}
                {...register('uf')}
                containerPropsStyle={{ style: { gridArea: 'uf' } }}
                />
            </AddressForm>
          </AddressContainer>

          <PayMethodContainer>
            <PayDetailsContainer>
              <CurrencyDollar size={22} />
              <PayDetails>
                <p>Pagamento</p>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja pagar
                </p>
              </PayDetails>
            </PayDetailsContainer>
            <PaymentOptions>
              <Radio
                isSelected={isPaymentMethod === 'credit'}
                {...register('pagamentMethod')}
                value="credit"
              >
                <CreditCard size={16} />
                <span>Cartão de crédito</span>
              </Radio>

              <Radio
                isSelected={isPaymentMethod === 'debit'}
                {...register('pagamentMethod')}
                value="debit"
              >
                <Bank size={16} />
                <span>Cartão de débito</span>
              </Radio>

              <Radio
                isSelected={isPaymentMethod === 'cash'}
                {...register('pagamentMethod')}
                value="cash"
              >
                <Money size={16} />
                <span>Dinheiro</span>
              </Radio>
            </PaymentOptions>
        </PayMethodContainer>
        </form>
      </section>
      <AsideContainer>
        <h2>Cafés selecionados</h2>
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
    </CartContainer>
  );
}
