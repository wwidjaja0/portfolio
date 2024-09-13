import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="bg-slate-900">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
