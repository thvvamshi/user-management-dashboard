function DeleteDialog({
  isOpen,
  user,
  onClose,
  onConfirm,
}) {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

      <div className="w-full max-w-md rounded-xl bg-white shadow-xl">

        <div className="border-b p-6">
          <h2 className="text-xl font-semibold">
            Delete User
          </h2>
        </div>

        <div className="space-y-2 p-6">

          <p className="text-slate-700">
            Are you sure you want to delete
          </p>

          <p className="font-semibold text-red-600">
            {user.firstName} {user.lastName}?
          </p>

          <p className="text-sm text-slate-500">
            This action cannot be undone.
          </p>

        </div>

        <div className="flex justify-end gap-3 border-t p-6">

          <button
            onClick={onClose}
            className="rounded-lg border px-5 py-2 hover:bg-slate-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteDialog;