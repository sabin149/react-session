import { Box, Flex, Spacer, HStack, IconButton, useDisclosure, useColorMode, useColorModeValue, Tooltip } from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const color = useColorModeValue('gray.900', 'gray.100');

  return (
    <Box bg={bgColor} px={8} boxShadow='md'>
      <Flex h={16} alignItems='center' justifyContent='space-between'>
        <IconButton
          color={color}
          aria-label='Open Menu'
          display={{ base: 'inline-flex', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          icon={<HamburgerIcon />}
        />
        <HStack spacing={8} alignItems='center'>
          <HStack as='nav' spacing={4} display={{ base: 'none', md: 'flex' }} alignItems='center'>
            <Link to='/'>Home</Link>
            <Link to='/users'>Users</Link>
          </HStack>
        </HStack>
        <Spacer />
        <HStack spacing={4}>
          <Tooltip label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`} aria-label='Color Mode' placement='bottom'>
            <IconButton
              color={color}
              aria-label='Toggle Color Mode'
              onClick={toggleColorMode}
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            />
          </Tooltip>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <HStack as='nav' spacing={4} alignItems='flex-start' flexDirection={'column'}>
            <Link to='/'>Home</Link>
            <Link to='/users'>Users</Link>
          </HStack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
