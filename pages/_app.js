import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="max-w-[1050px] mx-auto">
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
