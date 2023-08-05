import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to='/users'>Users</Link>
      <Link to='/calculate'>Calculate</Link>
    </div>
  );
};

export default Header;
