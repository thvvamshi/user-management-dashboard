import { DEFAULT_DEPARTMENT } from "./constants";

export function mapUser(user) {
  const [firstName = "", ...rest] = user.name.split(" ");

  return {
    id: user.id,
    firstName,
    lastName: rest.join(" "),
    email: user.email,
    phone: user.phone,
    department: DEFAULT_DEPARTMENT,
    username: user.username,
    website: user.website,
    company: user.company?.name || "",
    city: user.address?.city || "",
  };
}