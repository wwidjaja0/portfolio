import { lazy, Suspense } from "react";
import { useMediaQuery } from 'react-responsive';

const Navbar = lazy(() => import("../components/Navbar"));
const BackgroundBeams = lazy(() => import("../background/background-beams"));

export default function MainLayout({ children }) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div>
      <Suspense fallback={<div>Loading navigation...</div>}>
        <Navbar />
      </Suspense>

      <div className="bg-neutral-950 text-white flex flex-col font-josefin">
        {children}
      </div>
      
      <Suspense fallback={<div>Loading visual effects...</div>}>
        <BackgroundBeams />
      </Suspense>
    </div>
  );
}
