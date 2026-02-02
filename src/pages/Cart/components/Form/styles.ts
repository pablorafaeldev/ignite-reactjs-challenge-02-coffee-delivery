import { styled } from "styled-components"

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${(props) => props.theme['--base-card']};
  padding: 2.5rem;
  border-radius: 0.375rem;

  h3 {
    font-size: var(--fs-text-m);
    font-weight: 400;
    color: ${( props ) => props.theme["--base-subtitle"]}
  }

  p {
    font-size: var(--fs-text-s);
    color: ${( props ) => props.theme["--base-text"]}
  }
`
export const AddressContainer = styled(BaseContainer)`
  svg {
    color: ${( props ) => props.theme["--yellow-dark"]}
  }
`

export const BaseHeading = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const AddressHeading = styled(BaseHeading)``

export const InputContainer = styled.div`
  display: grid;
  grid-template-areas:
    'zipCode . .'
    'street street street'
    'number complement complement'
    'neighborhood city uf';

  grid-template-columns: 200px 1fr 60px;
  gap: 16px 12px;
`;

export const PayMethodContainer = styled(BaseContainer)`
    svg {
    color: ${( props ) => props.theme["--purple-dark"]}
  }
`
export const PaymentHeading = styled(BaseHeading)``

export const PayDetailsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const PaymentOptions = styled.div`
  display: flex;
  gap: 0.75rem;
`;




