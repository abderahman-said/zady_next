import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import("./NavBar"), {
  loading: () => <p>Loading ...</p>,
});
const Footer = dynamic(() => import("./Footer"), {
  loading: () => <p>Loading ...</p>,
});
const Header = dynamic(() => import("./Header"), {
  loading: () => <p>Loading ...</p>,
});
const Meta = dynamic(() => import("./Meta"), {
  loading: () => <p>Loading ...</p>,
});
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "aos/dist/aos.css";
import 'swiper/css';
 
const Layout = ({ children }) => {
  return (
    <>
     <NavBar/>
      <Meta />
      <div >
        <main >
          <Header />
          {children}
          <Footer/>
        </main>
      </div>
    </>
  )
}

export default Layout;

















 