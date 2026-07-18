import { Outlet } from "react-router-dom";
import Header from "./Header";
export default function Layout() {
  return (
    <>
      <Header />
      <main className="bg-gray-100">
        <Outlet />
      </main>
    </>
  );
}
