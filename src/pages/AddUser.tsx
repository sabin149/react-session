import useTitle from 'hooks/useTitile';
import AddUpdateUserForm from 'components/users/AddUpdateUserForm';

const AddUser = () => {
  useTitle('Add User');

  return (
    <section>
      <AddUpdateUserForm isEditing={false} />
    </section>
  );
};

export default AddUser;
