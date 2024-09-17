import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="top-0 sticky z-10">
      <ul className="p-4 bg-slate-900 flex justify-center gap-5">
        {[
          ["Work", "/"],
          ["About", "/about"],
          ["Thoughts", "/thoughts"],
          ["Contact", "/contact"],
        ].map(([title, url]) => (
          <li key={title + "Page"} className="inline">
            <Link to={url} className="block py-2 px-4 decoration-transparent text-rose-600 font-semibold text-xl hover:bg-slate-800 hover:rounded-lg">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
