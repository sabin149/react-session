import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Heading, Box, ButtonGroup, Button, Card, CardBody, Flex } from '@chakra-ui/react';
import GetBadgeByStatus from 'components/GetBadgeByStatus';
import useTitle from 'hooks/useTitile';
import { useDeleteUser } from 'queries/users/UserCommand';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { deleteUser, getAllUsers } from 'redux/slice/userSlice';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { ERROR, SUCCESS } from 'redux/constant/constant';

const ViewUsers = () => {
  useTitle('View Users');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { usersData, usersStatus, usersError, deleteUserStatus } = useAppSelector((state) => state.user);

  // const deleteUsers = useDeleteUser();

  const handleEdit = (userId: number) => {
    if (userId) navigate(`/users/update/${userId}`);
  };

  const handleDelete = (userId: number) => {
    if (userId) {
      const confirm = window.confirm('Are you sure you want to delete this user?');
      if (confirm) dispatch(deleteUser(userId));
    }
  };

  useEffect(() => {
    deleteUserStatus === SUCCESS && toast.success('User Deleted Successfully!');
  }, [deleteUserStatus]);

  useEffect(() => {
    usersStatus === ERROR && toast.error(usersError);
  }, [usersError, usersStatus]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <Box mx={'36'} mt={'1'}>
      <Flex justifyContent={'space-between'}>
        <Heading as='h3' size='lg' mb={'7'}>
          All Users
        </Heading>
        <Button colorScheme='green' onClick={() => navigate('/users/add')}>
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
                {usersStatus === SUCCESS &&
                  usersData?.map((user, index) => (
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
