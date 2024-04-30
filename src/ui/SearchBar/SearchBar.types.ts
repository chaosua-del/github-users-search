import { InputGroupProps } from '@chakra-ui/react';

export interface SeachBarProps extends InputGroupProps {
  placeholder: string;
  value: string;
  onValueChange: (value: string) => void;
  onSubmit: () => void;
}
