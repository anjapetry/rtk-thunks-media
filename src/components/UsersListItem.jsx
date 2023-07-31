import { GoTrash } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store';
import { useThunk } from '../hooks/use-thunk';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';

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
      {error && <div className="text-xl text-red-500 m-2">Error deleting user.</div>}
      {user.name}
  </>;

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}


