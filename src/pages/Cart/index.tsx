import { CartContainer } from './styles';

import { Form } from '@/pages/Cart/components/Form';
import { CartOrder } from '@/pages/Cart/components/CartOrder';

export function Cart() {
  return (
    <CartContainer>
      <Form/>
      <CartOrder />
    </CartContainer>
  );
}
