import styled from 'styled-components';

export const ContainerCoffeeMenu = styled.div`
  position: relative;
  background: ${(props) => props.theme['--base-card']};
  padding-inline: 1.25rem;
  padding-bottom: 1.25rem;
  border-radius: 0.375rem 2.25rem;

  img {
    position: absolute;
    top: -20px;
    left: 68px;
    width: 7.5rem;
    height: 7.5rem;
  }
`;

export const ContainerContentCoffeeMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;
  gap: 1rem;
  text-align: center;

  header {
    text-transform: uppercase;
    font-weight: bold;
    background: ${(props) => props.theme['--yellow-light']};
    color: ${(props) => props.theme['--yellow-dark']};
    padding: 0.25rem 0.5rem;
    border-radius: 10rem;
    font-size: 10px;
  }

  > p {
    font-size: var(--fs-text-s);
    color: ${(props) => props.theme['--base-label']};
  }
`;

export const CoffeeTitle = styled.h2`
  font-size: var(--fs-title-s);
  font-family: var(--ff-sans-baloo);
  color: ${(props) => props.theme['--base-subtitle']};
`

export const ContainerPriceCoffeeMenu = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    gap: 0.5rem;
  }

  > p {
    font-size: var(--fs-text-s);
    color: ${(props) => props.theme['--base-text']};
    margin-right: 1.5rem;

    & span {
      font-family: var(--ff-sans-baloo);
      font-size: var(--fs-title-m);
      font-weight: 700;
      color: ${(props) => props.theme['--base-text']};
    }
  }
`;

export const CartNavigationButton = styled.button`
  border: none;
  background: ${(props) => props.theme['--purple-dark']};
  padding: 0.5rem;
  border-radius: 0.375rem;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['--purple']};
  }

  svg {
    color: ${(props) => props.theme['--white']};
  }
`;
