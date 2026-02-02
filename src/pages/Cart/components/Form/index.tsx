  import { useForm, type SubmitHandler } from 'react-hook-form';
  import { zodResolver } from '@hookform/resolvers/zod';
  import * as zod from 'zod';

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { TextInput } from "./TextInput";
import { Radio } from "./Radio";
import { useContext } from 'react';
import { CoffeeContext } from '@/contexts/CoffeeContext';

import { 
  AddressContainer, 
  AddressHeading, 
  FormContainer, 
  InputContainer, 
  PaymentHeading, 
  PaymentOptions, 
  PayMethodContainer 
} from "./styles";

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

export function Form() {
  const { newOrderData } = useContext(CoffeeContext)

  const { 
    register, handleSubmit, watch, formState: { errors },
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

  const handleOrderCheckout: SubmitHandler<NewOrderFormData> = (data) => {
    newOrderData(data)
  };

  return (
    <section>
      <h2>Complete seu pedido</h2>
      <FormContainer id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
        <AddressContainer>
          <AddressHeading>
            <MapPinLine size={22} />

            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AddressHeading>

          <InputContainer>
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
          </InputContainer>
        </AddressContainer>

        <PayMethodContainer>
          <PaymentHeading>
            <CurrencyDollar size={22} />

            <div>
              <h3>Pagamento</h3>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </PaymentHeading>
          
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
      </FormContainer>
    </section>
  )
}