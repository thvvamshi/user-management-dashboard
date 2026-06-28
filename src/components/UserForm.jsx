function UserForm({
  isOpen,
  onClose,
  editingUser,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-xl bg-white shadow-xl">

        <div className="border-b px-6 py-4">
          <h2 className="text-2xl font-semibold text-slate-800">
            {editingUser ? "Edit User" : "Add User"}
          </h2>
        </div>

        <div className="px-6 py-10">
          <p className="text-slate-500">
            User form will be implemented in the next step.
          </p>
        </div>

        <div className="flex justify-end gap-3 border-t px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-lg border border-slate-300 px-5 py-2 hover:bg-slate-100"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

export default UserForm;