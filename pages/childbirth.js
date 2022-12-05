import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React from "react";
import ChildBirth_Eng from "../components/ChildBirth/ChildBirth_Eng";
import ChildBirth_Geo from "../components/ChildBirth/ChildBirth_Geo";

export default function AboutUs() {
  const { locale } = useRouter();

  return <>{String(locale) === "en" ? <ChildBirth_Eng /> : <ChildBirth_Geo />}</>;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
