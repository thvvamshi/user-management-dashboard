export function sortUsers(users, sortBy, order) {
  if (!sortBy) {
    return users;
  }

  const sorted = [...users];

  sorted.sort((a, b) => {
    let valueA = "";
    let valueB = "";

    switch (sortBy) {
      case "name":
        valueA = `${a.firstName} ${a.lastName}`;
        valueB = `${b.firstName} ${b.lastName}`;
        break;

      case "email":
        valueA = a.email;
        valueB = b.email;
        break;

      case "department":
        valueA = a.department;
        valueB = b.department;
        break;

      default:
        return 0;
    }

    if (order === "asc") {
      return valueA.localeCompare(valueB);
    }

    return valueB.localeCompare(valueA);
  });

  return sorted;
}