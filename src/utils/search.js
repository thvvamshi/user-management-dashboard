export function searchUsers(users, query) {
  if (!query.trim()) {
    return users;
  }

  const keyword = query.toLowerCase();

  return users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();

    return (
      fullName.includes(keyword) ||
      user.email.toLowerCase().includes(keyword) ||
      user.department.toLowerCase().includes(keyword)
    );
  });
}