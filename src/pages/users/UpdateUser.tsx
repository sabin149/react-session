import useTitle from 'hooks/useTitile';
import AddUpdateUserForm from 'components/users/AddUpdateUserForm';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
  useTitle('Update User');
  const { userId } = useParams<string>();
  return (
    <section>
      <AddUpdateUserForm isEditing={true} userId={userId} />
    </section>
  );
};

export default UpdateUser;
