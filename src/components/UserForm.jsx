import { useEffect, useState } from "react";

import { DEPARTMENTS } from "../utils/constants";
import { validateUser } from "../utils/validators";
import toast from "react-hot-toast";

function UserForm({ isOpen, onClose, editingUser, addUser, updateUser }) {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "Engineering",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingUser) {
      setValues({
        firstName: editingUser.firstName,
        lastName: editingUser.lastName,
        email: editingUser.email,
        department: editingUser.department,
      });
    } else {
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        department: "Engineering",
      });
    }

    setErrors({});
  }, [editingUser, isOpen]);

  function handleChange(e) {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateUser(values);

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    if (editingUser) {
      updateUser({
        ...editingUser,
        ...values,
      });

      toast.success("User updated successfully");
    } else {
      addUser(values);

      toast.success("User added successfully");
    }

    onClose();
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-xl rounded-xl bg-white shadow-xl">
        <div className="border-b px-6 py-4">
          <h2 className="text-2xl font-semibold">
            {editingUser ? "Edit User" : "Add User"}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          <div>
            <label className="mb-2 block font-medium">First Name</label>

            <input
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
            />

            {errors.firstName && (
              <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block font-medium">Last Name</label>

            <input
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
            />

            {errors.lastName && (
              <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block font-medium">Email</label>

            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block font-medium">Department</label>

            <select
              name="department"
              value={values.department}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
            >
              {DEPARTMENTS.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border px-5 py-2"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
            >
              {editingUser ? "Update User" : "Add User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
