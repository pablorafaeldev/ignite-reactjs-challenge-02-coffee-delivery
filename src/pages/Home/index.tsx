import { ShoppingCart, Package, Timer, Coffee, type IconProps } from '@phosphor-icons/react';

import { coffees } from '../../../data.json';
import { CoffeeSummary } from '@/pages/Home/components/CoffeeSummary';
import type { ColorVariant } from '@/pages/Home/components/CoffeeSummary/styles';
import { Catalog } from './components/Catalog';

import glassImage from '@/assets/Imagem.svg';

import {
  CatalogSubtitle,
  CoffeeGrid,
  CoffeeListContainer,
  CoffeeSummaryContainer,
  HomeContainer,
  HomeDetails,
  HomeFeature,
} from './styles';

interface CoffeeSummary {
  id: number;
  text: string;
  variant: ColorVariant;
  Icon: React.ComponentType<IconProps>;
}

const coffeeSummary: CoffeeSummary[] = [
  {
    id: 1,
    text: 'Compra simples e segura',
    variant: 'yellowDark',
    Icon: ShoppingCart,
  },
  {
    id: 2,
    text: 'Embalagem mantém o café intacto',
    variant: 'base',
    Icon: Package,
  },
  {
    id: 3,
    text: 'Entrega rápida e rastreada',
    variant: 'yellow',
    Icon: Timer,
  },
  {
    id: 4,
    text: 'O café chega fresquinho até você',
    variant: 'purple',
    Icon: Coffee,
  },
];

export function Home() {
  return (
    <HomeContainer>
      <HomeFeature>
        <div>
          <HomeDetails>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </HomeDetails>
          
          <CoffeeSummaryContainer>
            {
              coffeeSummary.map((summary) => 
                <CoffeeSummary
                  key={summary.id}
                  text={summary.text}
                  Icon={summary.Icon}
                  variant={summary.variant}
                />
              )}
          </CoffeeSummaryContainer>
        </div>
        
        <img src={glassImage} alt="Copo de café do Coffee Delivery"/>
      </HomeFeature>

      <CoffeeListContainer>
        <CatalogSubtitle>Nossos Cafés</CatalogSubtitle>

        <CoffeeGrid>
          {
            coffees.map((coffee) =>
              <Catalog key={coffee.id} coffee={coffee}/>
            )
          }
        </CoffeeGrid>
      </CoffeeListContainer>
    </HomeContainer>
  );
}