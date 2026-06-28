import { useEffect, useState } from "react";
import { User, Mail, Building2, X } from "lucide-react";
import toast from "react-hot-toast";

import { DEPARTMENTS } from "../utils/constants";
import { validateUser } from "../utils/validators";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {editingUser ? "Edit User" : "Add User"}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {editingUser
                ? "Update user information."
                : "Fill in the details to create a new user."}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          {/* First Name */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              First Name
            </label>

            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {errors.firstName && (
              <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Last Name
            </label>

            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {errors.lastName && (
              <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Email
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Department */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Department
            </label>

            <div className="relative">
              <Building2
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <select
                name="department"
                value={values.department}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                {DEPARTMENTS.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Footer */}

          <div className="flex justify-end gap-3 border-t border-slate-200 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-300 px-5 py-2.5 font-medium transition hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-2.5 font-medium text-white transition hover:bg-blue-700"
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
