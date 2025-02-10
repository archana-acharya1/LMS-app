import Avatar from "./Avatar";

export default function Navbar() {
  return (
    <nav className="bg-amber-200 h-16 flex justify-between items-center px-4">
      <p className="text-lg font-bold">Library Management System</p>
      <Avatar
        imageUrl="https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png"
        name="John Doe"
      />
    </nav>
  );
}
