import { useEffect } from 'react';
import { useSelector } from 'react-redux'; // import the hooks
import { fetchUsers, addUser } from '../store'; // import the thunks we created earlier
import { useThunk } from '../hooks/use-thunks'; // import the hook we just created
import Button from './Button';
import Skeleton from './Skeleton';

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => { // dispatch the thunk on component mount
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
  doCreateUser();
  };

  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="w-full h-10" />;
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((user) => {
      return (
    <div key={user.id} className="mb-2 border rounded">
    <div className="flex items-center justify-between p-2 cursor-pointer">
      {user.name}
    </div>
  </div>
  );
});
}

  return (
    <div className='rounded-lg'>
      <div className="flex flex-row items-center justify-between m-3">
        <h1 className="m-2 text-xl font-semibold">Users</h1>
        <Button loading={isCreatingUser} className="p-3 my-auto rounded-lg bg-slate-100" onClick={handleUserAdd}>
          + Add User
        </Button>
        { creatingUserError && 'Error creating user ...'}
      </div>
      <div className="flex flex-col p-3 space-y-2">{content}</div>
    </div>
  );
}

export default UsersList;