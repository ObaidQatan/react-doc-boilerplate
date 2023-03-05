import React from "react";
import Layout from "@theme/Layout";
import HomePageBody from "../components/HomePageComponents/Body";
import HomepageBanner from "../components/HomePageComponents/Banner";
import { Page } from "../components/Page";

export default function Home(): JSX.Element {
  return (
    <Page>
      <Layout description="Description will go into a meta tag in <head />">
        <HomepageBanner />
        <HomePageBody />
      </Layout>
    </Page>
  );
}
