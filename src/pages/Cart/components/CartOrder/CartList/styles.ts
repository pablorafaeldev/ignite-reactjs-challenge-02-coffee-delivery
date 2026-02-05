import { styled } from 'styled-components'

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
`
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



export const AddOrRemoveItemsCart = styled.div`
  display: flex;
  gap: 0.5rem;
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
