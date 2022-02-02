import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock'
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl'

import Highlight from '@site/src/components/Highlight'
import PluginsLogoCarousel from '@site/src/components/PluginsLogoCarousel'

import { pluginsLogos, EmbedIntegration1, EmbedIntegration2 } from '../constants'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/install_widget">
            Getting Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  return (
    <>
      <section className="pluginLogosSection">
        <div className="container">
          <div className="row">
            <PluginsLogoCarousel logos={pluginsLogos}></PluginsLogoCarousel>
          </div>
        </div>
      </section>
      <Highlight
        img={
          <CodeBlock className="language-html">{EmbedIntegration1}</CodeBlock>
        }
        isDark
        title="Get started with Flowbox within minutes"
        text={
          <>
          <p>
          Flowbox makes it easy to embed a Flow you've created in Flowbox by
          adding a small JavaScript snippet to your site.
          </p>
          <p>
          Start out by including the <code>flowbox.js</code> script on your page. Copy this snippet and paste it in the <code>&lt;head&gt;</code> element.
          </p>
          </>
        }
      />
      <div className="row"/>
      <Highlight
        img={
          <CodeBlock className="language-html">{EmbedIntegration2}</CodeBlock>
        }
        reversed
        title="Display a flow anywhere on your site"
        text={
          <>
            <p>
            Flowbox supports rendering a Flow anywhere on the site by adding this snippet where you want the Flow to show up.
            </p>
          </>
        }
      />
    </>
  )
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Flowbox developer portal">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
