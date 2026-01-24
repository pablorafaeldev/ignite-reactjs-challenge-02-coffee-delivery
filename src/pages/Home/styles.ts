import styled from 'styled-components';

export const HomeContainer = styled.main`
  max-width: 1120px;
  margin-inline: auto;
`

export const HomeFeature = styled.section`
  display: flex;
  gap: 3.5rem;
  padding-block: 5.75rem;
`;

export const HomeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: 588px;

  p {
    font-size: var(--fs-text-l);
  }
`
export const CoffeeSummaryContainer = styled.div`
  max-width: 567px;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 1.25rem 2.5rem;
  margin-top: 4rem;
`;

export const CoffeeListContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  gap: 4rem;
`;

export const CatalogSubtitle = styled.h2`
  margin-top: 2rem;
  font-family: var(--ff-sans-baloo);
  font-size: var(--fs-title-l);
`
export const CoffeeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  gap: 2.5rem 2rem;
`;
