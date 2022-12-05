import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React from "react";
import Baby_Eng from "../components/Baby/Baby_Eng";
import Baby_Geo from "../components/Baby/Baby_Geo";

export default function AboutUs() {
  const { locale } = useRouter();

  return <>{String(locale) === "en" ? <Baby_Eng /> : <Baby_Geo />}</>;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
