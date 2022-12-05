import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React from "react";
import Child_Eng from "../components/Child/Child_Eng";
import Child_Geo from "../components/Child/Child_Geo";


export default function AboutUs() {
  const { locale } = useRouter();

  return <>{String(locale) === "en" ? <Child_Eng /> : <Child_Geo />}</>;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
