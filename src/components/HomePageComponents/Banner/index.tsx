import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "../styles.module.scss";
import useColorScheme from "../../../hooks/useColorScheme";

function HomepageBanner(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { colorScheme } = useColorScheme();
  return (
    <header
      className={`${styles.banner} ${
        colorScheme === "dark" && styles["banner-dark"]
      }`}
    >
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link to="/docs/intro">Get Started</Link>
        </div>
      </div>
    </header>
  );
}

export default HomepageBanner;
