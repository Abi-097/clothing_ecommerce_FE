import "./App.css";
import Banners from "./sections/Banners";
import BestSellers from "./sections/BestSellers";
import Blogs from "./sections/Blogs";
import Clients from "./sections/Clients";
import Collections from "./sections/Collections";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import NewArrivals from "./sections/NewArrivals";
import { DarkModeProvider } from "./components/DarkModeContext";
function App() {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <Collections />
        <BestSellers />
        <Banners />
        <NewArrivals />
        <Clients />
        <Blogs />
        <Footer />
      </DarkModeProvider>
    </>
  );
}

export default App;
