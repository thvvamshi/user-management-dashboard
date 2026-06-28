import UserCard from "./UserCard";

function MobileUserList({
  users,
  onEdit,
  onDelete,
}) {
  return (
    <div className="space-y-5 lg:hidden">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default MobileUserList;