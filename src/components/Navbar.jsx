import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="p-4">
        <ul className="list-none flex justify-center gap-5">
          {[
            ["Work", "/"],
            ["About", "/about"],
            ["Thoughts", "/thoughts"],
            ["Contact", "/contact"],
          ].map(([title, url]) => (
            <li className="inline">
              <Link
                to={url}
                key={title + "Page"}
                className="block py-2 px-4 decoration-transparent text-red-500 font-semibold text-xl hover:bg-slate-800 hover:rounded-lg"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
