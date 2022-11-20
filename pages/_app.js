import Header from "../components/Header";
import Footer from "../components/Footer";
import { appWithTranslation } from "next-i18next";

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

export default appWithTranslation(MyApp);
