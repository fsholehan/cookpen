function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center space-y-5 my-12">
      <h1 className="text-6xl text-yellow-400 font-bold">404</h1>
      <p>
        {" "}
        Oops! Halaman yang diminta tidak tersedia, mungkin kompornya belum
        menyala
      </p>
    </div>
  );
}

export default NotFound;
