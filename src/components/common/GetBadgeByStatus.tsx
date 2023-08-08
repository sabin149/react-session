import { Badge } from '@chakra-ui/react';

const GetBadgeByStatus = ({ status }: { status: string }) => {
  return status === 'active' ? (
    <Badge colorScheme='green' variant='solid' p='1.5' borderRadius='lg' fontSize='xs'>
      Active
    </Badge>
  ) : status === 'inactive' ? (
    <Badge colorScheme='red' variant='solid' p='1.5' borderRadius='lg' fontSize='xs'>
      Inactive
    </Badge>
  ) : (
    <Badge colorScheme='yellow' variant='solid' p='1.5' borderRadius='lg' fontSize='xs'>
      Pending
    </Badge>
  );
};

export default GetBadgeByStatus;
