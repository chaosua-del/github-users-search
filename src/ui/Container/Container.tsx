import { Container as ChakraContainer, type ContainerProps } from '@chakra-ui/react';

const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <ChakraContainer
      maxWidth={{
        xl: '1530px',
        lg: '1344px',
        md: '1020px',
        base: '100%',
      }}
      paddingX={{
        lg: '45px',
        md: '30px',
        base: '16px',
      }}
      {...props}
    >
      {children}
    </ChakraContainer>
  );
};

export default Container;
