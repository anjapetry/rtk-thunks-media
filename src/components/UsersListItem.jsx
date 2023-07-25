import { GoTrash } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store';
import { useThunk } from '../hooks/use-thunk';
import ExpendablePanel from './ExpendablePanel';

export default function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = 
  <>
    <Button loading={isLoading} onClick={handleClick} className="mr-3 rounded">
      <GoTrash />
    </Button>
      {error && <div className="text-red-500">Error deleting user.</div>}
      {user.name}
  </>;

  return (
    <ExpendablePanel header={header}>
      CONTENT !!!
    </ExpendablePanel>
  );
}


