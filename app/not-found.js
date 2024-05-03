import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-semibold mb-4">Not Found</h2>
      <p className="text-lg mb-4">Could not find requested resource</p>
      <Link href="/">
        <span className="text-red-300 hover:underline">Return Home</span>
      </Link>
    </div>
  );
}
