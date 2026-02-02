import { styled } from "styled-components";

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;

  section {
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme['--base-card']};
    padding: 2.5rem;
    border-radius: 0.375rem 2.75rem;
    width: 28rem;
  }
`;

export const Separator = styled.div`
  border: solid 1px ${(props) => props.theme['--base-button']};
  margin: 1.5rem 0;
`;

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme['--base-text']};
  }

  :nth-of-type(3) {
    font-size: var(--fs-text-l);
    font-weight: bold;
    color: ${(props) => props.theme['--base-subtitle']};
  }
`;

export const ButtonOrderConfirm = styled.button`
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  border: none;
  background: ${(props) => props.theme['--yellow']};
  text-transform: uppercase;
  font-size: 0.875rem;
  cursor: pointer;
  margin-top: 1.5rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme['--white']};
    font-weight: 700;
  }

  &:hover {
    background: ${(props) => props.theme['--yellow-dark']};
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: var(--fs-text-m);
    font-weight: bold;
    color: ${(props) => props.theme['--base-text']};
  }
`;

export const ItemContent = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem;
  justify-content: space-between;
`;

export const AddOrRemoveItemsCart = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ItemDetails = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const CoffeeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    font-size: var(--fs-text-r);
  }
`;

export const RemoveItemButton = styled.button`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  border: none;
  border-radius: 0.25rem;
  background: ${(props) => props.theme['--base-button']};
  color: ${(props) => props.theme['--base-text']};
  font-size: 0.875rem;
  text-transform: uppercase;
  padding: 0 0.5rem;
  cursor: pointer;

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme['--purple']};
  }

  &:hover {
    background: ${(props) => props.theme['--base-hover']};
    svg {
      color: ${(props) => props.theme['--purple-dark']};
    }
  }
`;
