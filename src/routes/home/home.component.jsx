import Directory from "../../components/directory/directory.component";
import Newsletter from "../../components/additional-components/newsletter/newsletter.component";
import CarouselBanner from "../../components/additional-components/carousel/carousel.component";
import { ReactComponent as Brands } from "../../assets/brands.svg";
function Home() {
  const categories = [
    {
      id: 1,
      title: "Caps & Hats",
      imageUrl: "https://ih1.redbubble.net/image.2830356602.0424/ssrco,baseball_cap,product,FFFFFF:97ab1c12de,front_three_quarter,wide_portrait,750x1000-bg,f8f8f8.jpg",
    },
    {
      id: 2,
      title: "Hoodies",
      imageUrl: "https://m.media-amazon.com/images/I/61WOhi0ycXL._AC_UY1100_.jpg",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRY6GTtoZWCbHq7-qcXsQewGZK3wGjq15hgJH0bjCwcH0ATue0SbmiqmuAgWQgVgM5Klk&usqp=CAU",
    },
    {
      id: 4,
      title: "Women",
      imageUrl: "https://assets.vogue.in/photos/609a038d330168cc9211433f/2:3/w_2560%2Cc_limit/Damilola-Odufuwa-Nigeria-Tech-vogue-credit-Manny-Jefferson-2.jpg",
    },
    {
      id: 5,
      title: "Men",
      imageUrl: "https://manyavar.scene7.com/is/image/manyavar/MegaMenu_Men_D_28-03-2024-13-54?$WT%5FNavBar%5FD$",
    },
  ];

  return (
    <div>
      <CarouselBanner />
      <Brands />
      <Directory categories={categories} />
      <Newsletter />
    </div>
  );
}

export default Home;
