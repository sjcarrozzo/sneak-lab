import BrandsCarousel from "./BrandsCarousel";
import ItemListContainer from "./ItemListContainer";
import Hero from "./Hero";
import HotDeals from "./HotDeals"

function Home() {
  return (
    <>
      <Hero />
      <BrandsCarousel />
      <HotDeals/>
      <ItemListContainer />
    </>
  );
}

export default Home;
