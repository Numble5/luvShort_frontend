import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ReactHelmet = () => {
  const description = "";
  const title = "럽쇼츠";
  const favicon = "/assets/favicon/favicon.png";
  const keywords = "소개팅,앱,럽쇼츠,쇼츠";
  return (
    <HelmetProvider>
      <Helmet>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:image" content={favicon} />
        <meta property="og:site_name" content="" />
        <meta property="og:description" content={description} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={favicon} />
        <meta name="twitter:card" content="summary" />
      </Helmet>
    </HelmetProvider>
  );
};

export default ReactHelmet;
