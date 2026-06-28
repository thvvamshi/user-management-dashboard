function Header({ totalUsers, filteredUsers }) {
  return (
    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          User Management Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Showing {filteredUsers} of {totalUsers} users
        </p>
      </div>

      <button className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700">
        Add User
      </button>
    </div>
  );
}

export default Header;