import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React from "react";
import About_Eng from "../components/About/About_Eng";
import About_Geo from "../components/About/About_Geo";

export default function AboutUs() {
  const { locale } = useRouter();

  return <>{String(locale) === "en" ? <About_Eng /> : <About_Geo />}</>;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
