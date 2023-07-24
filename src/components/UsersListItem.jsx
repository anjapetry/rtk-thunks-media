const UsersListItem = ({ user }) => {
    return (
    <div key={user.id} className="mb-2 border rounded">
    <div className="flex items-center justify-between p-2 cursor-pointer">
     {user.name}
     </div>
   </div>
 );
}

export default UsersListItem;