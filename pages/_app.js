import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layout/PreLoader";
import "../styles/glitch.css";
import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Mahabeer - Front end Developer</title>
        <meta
          name="description"
          content="Experienced front end developer offering a range of services to create stunning and user-friendly websites and mobile apps. Specializing in responsive design, HTML5, CSS3, JavaScript, React, React Native and more.Contact me today for a free consultation."
        />

        <meta
          name="keywords"
          content="front end developer, React, React Native, Tailwind CSS, web development, mobile app development, skills, expertise, commitment"
        />

        {/* <!-- Favicon --> */}

        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        {/* <!-- plugin CSS --> */}
        <link
          href="static/plugin/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="static/plugin/font-awesome/css/all.min.css"
          rel="stylesheet"
        />
        <link href="static/plugin/et-line/style.css" rel="stylesheet" />
        <link
          href="static/plugin/themify-icons/themify-icons.css"
          rel="stylesheet"
        />
        <link
          href="static/plugin/owl-carousel/css/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link
          href="static/plugin/magnific/magnific-popup.css"
          rel="stylesheet"
        />
        <link
          href="static/plugin/scroll/jquery.mCustomScrollbar.min.css"
          rel="stylesheet"
        />
        {/* <!-- theme css --> */}
        <link href="static/css/style.css" rel="stylesheet" />

        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DQYBB962X0" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-DQYBB962X0');
        `}
        </Script>
      </div>

      {load && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
