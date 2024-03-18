import { Outlet } from "react-router-dom";
import Header from "./components/header"
import Footer from "./components/footer";

function Home() {
  return (
    <div className="h-full w-full lg:w-[1024px] p-8 pt-20 overflow-x-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Home;
