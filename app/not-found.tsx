import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-content flex-col items-center justify-center px-4 py-24 text-center">
      <p className="font-mono text-sm uppercase tracking-widest text-accent">
        404
      </p>
      <h1 className="font-display mt-4 text-4xl text-dark">Page not found</h1>
      <p className="mt-4 max-w-md text-gray-600">
        The page you are looking for may have moved. Try the navigation menu or
        return home.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-btn bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-light"
      >
        Back to home
      </Link>
    </div>
  );
}
