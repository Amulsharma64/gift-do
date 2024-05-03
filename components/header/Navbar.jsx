import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Company Name */}
        <div className="flex items-center">
          <Link href={`/giftdo`}><span className="text-white text-xl font-bold">GiftDo</span></Link>
        </div>
        {/* Right side: Menu Items */}
        <div className="flex items-center space-x-4">
          <Link href="/about" className="text-white hover:text-gray-300">About</Link>
          <Link href="/Contact" className="text-white hover:text-gray-300">Contact</Link>
          <Link href="/login" className="text-white hover:text-gray-300">Log in</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
