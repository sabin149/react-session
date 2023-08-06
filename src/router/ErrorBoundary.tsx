import { Box, Button, Container, Image, Text, Flex } from '@chakra-ui/react';
import { ArrowLeftIcon, RepeatIcon } from '@chakra-ui/icons';
import { isRouteErrorResponse, useRouteError, Link } from 'react-router-dom';
import errorImg from 'assets/errorImage.png';

function ErrorBoundary({ isNotFoundError = false }: { isNotFoundError?: boolean }) {
  const error = useRouteError();

  const isRouteError = isRouteErrorResponse(error) || isNotFoundError;
  return (
    <Box as='main' display='flex' alignItems='center' justifyContent='center' flexGrow={1} minHeight={isRouteError ? '100vh' : '85vh'}>
      <Container maxWidth='md'>
        <Flex direction='column' alignItems='center'>
          <Box mb={3} textAlign='center'>
            <Image src={errorImg} alt='ErrorImage' display='inline-block' maxWidth='100%' width={400} />
          </Box>
          <Text align='center' fontSize='3xl' mb={3}>
            {!isRouteError ? 'Error Occurred' : '404: The page you are looking for isn’t here'}
          </Text>
          {isRouteError && (
            <Text align='center' color='gray.500' variant='body1'>
              You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation
            </Text>
          )}
          <Button
            colorScheme='red'
            variant='solid'
            rightIcon={<RepeatIcon />}
            mt={3}
            onClick={() => {
              window.location.reload();
            }}
          >
            Reload
          </Button>
          <Button as={Link} to='/' leftIcon={<ArrowLeftIcon />} mt={4} variant='solid'>
            Go back to home
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}

export default ErrorBoundary;
