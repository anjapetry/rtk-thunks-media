import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/thunks/fetchUsers";


function UserList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return 'Users List'
}

export default UserList
