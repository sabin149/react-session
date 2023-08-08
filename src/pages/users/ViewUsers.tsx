import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Heading, Box, ButtonGroup, Button, Card, CardBody, Flex } from '@chakra-ui/react';
import GetBadgeByStatus from 'components/common/GetBadgeByStatus';
import useTitle from 'hooks/useTitile';
import { useDeleteUser } from 'queries/users/UserCommand';
import { useGetUsers } from 'queries/users/UserQuery';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ViewUsers = () => {
  useTitle('View Users');
  const navigate = useNavigate();
  const { data, isError, error, isLoading } = useGetUsers();
  const deleteUsers = useDeleteUser();

  const handleEdit = (userId: number) => {
    if (userId) navigate(`/users/update/${userId}`);
  };

  const handleDelete = (userId: number) => {
    if (userId) {
      const confirm = window.confirm('Are you sure you want to delete this user?');
      if (confirm) deleteUsers.mutate(userId);
    }
  };

  useEffect(() => {
    deleteUsers.isSuccess && toast.success('User Deleted Successfully!');
  }, [deleteUsers.isSuccess]);

  useEffect(() => {
    isError && toast.error(error?.message);
  }, [error?.message, isError]);

  return (
    <Box mx={'32'} mt={'3.5'}>
      <Flex justifyContent={'space-between'}>
        <Heading as='h3' size='lg' mb={'7'}>
          All Users
        </Heading>
        <Button colorScheme='green' id='add_new_btn' onClick={() => navigate('/users/add')}>
          Add New
        </Button>
      </Flex>
      <Card>
        <CardBody>
          <TableContainer>
            <Table size='sm' variant={'striped'}>
              <Thead>
                <Tr>
                  <Th>Actions</Th>
                  <Th>Id</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Phone Number</Th>
                  <Th>Age</Th>
                  <Th>Gender</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {!isLoading &&
                  data?.map((user, index) => (
                    <Tr
                      key={user.id}
                      sx={{
                        textTransform: 'capitalize'
                      }}
                    >
                      <Td boxSize={'10'}>
                        <ButtonGroup size='sm' isAttached variant='outline'>
                          <Button colorScheme='teal' onClick={() => handleEdit(user.id)}>
                            Edit
                          </Button>
                          <Button colorScheme='red' onClick={() => handleDelete(user.id)}>
                            Delete
                          </Button>
                        </ButtonGroup>
                      </Td>

                      <Td>{index + 1}</Td>
                      <Td>{user.name}</Td>
                      <Td
                        sx={{
                          textTransform: 'lowercase'
                        }}
                      >
                        {user.email}
                      </Td>
                      <Td>{user.phoneNumber}</Td>
                      <Td>{user.age}</Td>
                      <Td>{user.gender}</Td>
                      <Td>
                        <GetBadgeByStatus status={user.status} />
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </Box>
  );
};

export default ViewUsers;
