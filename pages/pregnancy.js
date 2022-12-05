import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React from "react";
import Orsuloba_Eng from "../components/Orsuloba/Orsuloba_Eng";
import Orsuloba_Geo from "../components/Orsuloba/Orsuloba_Geo";

export default function AboutUs() {
  const { locale } = useRouter();

  return <>{String(locale) === "en" ? <Orsuloba_Eng /> : <Orsuloba_Geo />}</>;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
