function ErrorState({ message }) {
  return (
    <div className="py-12 text-center">

      <h2 className="text-xl font-semibold text-red-600">
        Something went wrong
      </h2>

      <p className="mt-2 text-slate-500">
        {message}
      </p>

    </div>
  );
}

export default ErrorState;