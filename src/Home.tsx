import { useGetUsers } from 'queries/users/UserQuery';

const Home = () => {
  const { data } = useGetUsers();
  console.log(data);
  return <div>Home</div>;
};

export default Home;
