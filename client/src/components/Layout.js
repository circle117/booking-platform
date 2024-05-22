import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div class="py-4 px-8 flex flex-col min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
}
