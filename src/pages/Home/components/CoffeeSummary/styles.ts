import styled from 'styled-components';

export type ColorVariant = 'yellowDark' | 'yellow' | 'base' | 'purple';

interface PropsColor {
  variant: ColorVariant;
}

const setVariant = {
  yellowDark: '--yellow-dark',
  yellow: '--yellow',
  base: '--base-text',
  purple: '--purple',
} as const;

export const CoffeeSummaryContainer = styled.div<PropsColor>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    padding: 0.5rem;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    background-color: ${(props) => props.theme[setVariant[props.variant]]};
    color: ${(props) => props.theme['--white']};
  }
`;
