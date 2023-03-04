import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomePageBody from "../components/HomePageComponents/Body";
import HomepageBanner from "../components/HomePageComponents/Banner";
import "@site/src/css/common.scss";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageBanner />
      <main>
        <HomePageBody />
      </main>
    </Layout>
  );
}
