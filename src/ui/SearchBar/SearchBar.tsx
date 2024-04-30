import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';

import { SearchIcon } from '@/assets';

import type { SeachBarProps } from './SearchBar.types';

export const SearchBar = ({
  placeholder,
  value,
  onValueChange,
  onSubmit,
  ...props
}: SeachBarProps) => {
  return (
    <InputGroup boxShadow="dark.small" borderRadius="12px" height="56px" {...props}>
      <InputLeftElement pointerEvents="none" height="100%">
        <Icon width="15px" height="15px" color="secondary.text" as={SearchIcon} />
      </InputLeftElement>
      <Input
        value={value}
        onChange={(e) => onValueChange(e.currentTarget.value)}
        height="100%"
        focusBorderColor="lightGray"
        _focus={{ border: 'none' }}
        border="none"
        placeholder={placeholder}
        color="primary.text"
      />
      <InputRightElement height="100%" width="100px">
        <Button height="100%" width="100%" onClick={onSubmit}>
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
