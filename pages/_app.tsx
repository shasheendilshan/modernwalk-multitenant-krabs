import "@styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { getTenantDetails } from "./../services/tenants.service";
import Layout from "@components/Layouts/Layout_modernwalk";
import Error from "next/error";

function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.error) {
    return <Error statusCode={404} />;
  } else {
    return (
      <Layout
        name={pageProps.tenantName}
        tenantId={pageProps.tenantCode}
        theme={pageProps.theme}
      >
        <Component {...pageProps} />
      </Layout>
    );
  }
}
MyApp.getInitialProps = async ({ Component, ctx }: any) => {
  const host = ctx?.req["hostname"]?.split(".")[0];
  let pageProps = {};
  let error = false;
  let tenantName = null;
  let tenantCode = null;
  let theme = null;
  try {
    const tenantDetails = await getTenantDetails(host);
    console.log("Host", host);
    console.log("tenant details", tenantDetails.data);
    if (tenantDetails.data.length > 0) {
      tenantName = tenantDetails?.data[0].name;
      tenantCode = tenantDetails?.data[0].id;
      theme = tenantDetails?.data[0].theme;

      console.log("theme", theme);
    } else {
      error = true;
    }
  } catch (error) {
    error = true;
  }

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return {
    pageProps: {
      ...pageProps,
      tenantName,
      tenantCode,
      theme,
      error,
    },
  };
};

export default MyApp;
