import { Box, Button, Card, CardBody, FormErrorMessage, FormLabel, Input, Stack } from '@chakra-ui/react';
import SumCard from 'components/calculate/SumCard';
import React, { useState, useEffect } from 'react';

const Calculate = () => {
  const [calculate, setCalculate] = useState({
    num1: 0,
    num2: 0
  });
  const [sum, setSum] = useState(0);
  const [showSum, setShowSum] = useState(false);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setCalculate({ ...calculate, [name]: value });
  };

  const handleCalculate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSum(Number(calculate.num1) + Number(calculate.num2));
    setShowSum(true);
  };

  useEffect(() => {
    const handleShow = setTimeout(() => {
      setShowSum(false);
    }, 3000);
    return () => {
      clearTimeout(handleShow);
    };
  }, [sum]);

  return (
    <Box height={'100%'} display={'flex'} flexDirection={'column'} gap={4} width={'100%'} alignItems={'center'} justifyContent={'center'}>
      <Card variant={'outline'} px={5} py={2}>
        <CardBody>
          <form onSubmit={handleCalculate}>
            <Stack direction={'column'}>
              <FormLabel fontSize={18} mb={0}>
                Number 1
              </FormLabel>
              <Input type='number' name='num1' value={calculate.num1} onChange={handleChange} borderColor={'gray.300'} />
              <FormErrorMessage />
              <FormLabel fontSize={18} mb={0}>
                Number 2
              </FormLabel>
              <Input type='number' name='num2' value={calculate.num2} onChange={handleChange} borderColor={'gray.300'} />
              <Button variant={'solid'} colorScheme='green' mt={2} type='submit'>
                Add
              </Button>
            </Stack>
          </form>
        </CardBody>
      </Card>
      {showSum && <SumCard sum={sum} />}
    </Box>
  );
};

export default Calculate;
