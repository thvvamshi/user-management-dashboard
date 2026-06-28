export function filterUsers(users, department) {
  if (!department || department === "All") {
    return users;
  }

  return users.filter(
    (user) => user.department === department
  );
}