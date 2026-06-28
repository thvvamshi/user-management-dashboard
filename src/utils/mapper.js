import { DEPARTMENTS } from "./constants";

export function mapUser(user) {
  const [firstName = "", ...rest] = user.name.split(" ");

  return {
    id: user.id,
    firstName,
    lastName: rest.join(" "),
    email: user.email,
    phone: user.phone,
    username: user.username,
    website: user.website,
    company: user.company?.name || "",
    city: user.address?.city || "",

    // Assign departments cyclically
    department: DEPARTMENTS[(user.id - 1) % DEPARTMENTS.length],
  };
}