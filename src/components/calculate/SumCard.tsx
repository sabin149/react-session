import { Card, CardBody, FormLabel, Heading, Input, Stack, Text } from '@chakra-ui/react';

const SumCard = ({ sum }: { sum: number }) => {
  return (
    <Card variant={'outline'} px={5} width={297}>
      <CardBody>
        <Stack direction='row' justifyContent={'space-between'} alignItems={'center'}>
          <Heading as={'h6'} fontSize={20}>
            Sum:{' '}
          </Heading>
          <Input type='number' width={40} textAlign={'end'} fontSize={18} readOnly value={sum} />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default SumCard;
