import { Header } from "@presentation/components/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "@presentation/components/Footer";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
