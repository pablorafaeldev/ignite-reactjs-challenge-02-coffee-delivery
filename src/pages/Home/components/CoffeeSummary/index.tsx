import type { IconProps } from '@phosphor-icons/react';
import { CoffeeSummaryContainer,type ColorVariant } from './styles';

interface CoffeeSummaryProps {
  text: string;
  variant: ColorVariant;
  Icon: React.ComponentType<IconProps>;
}

export function CoffeeSummary({ text, Icon, variant }: CoffeeSummaryProps) {
  return (
    <CoffeeSummaryContainer variant={variant}>
      <div>
        <Icon weight="fill" />
      </div>
      <p>{text}</p>
    </CoffeeSummaryContainer>
  );
}
