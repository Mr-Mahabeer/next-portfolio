// import dynamic from "next/dynamic";
import Image from "next/image";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
// const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
//   ssr: false,
// });
const Index = ({ latestPosts }) => {
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Hello, I am</h6>
                  <h1 className="font-alt">Mahabeer</h1>
                  <p className="lead">
                    I Am Passionate <TypingAnimation />
                  </p>
                  <p className="desc">
                    I do development services for customers of all sizes,
                    specializing in React Native, Reactjs, NextJS to develop stylish, modern websites and mobile
                    applications.
                  </p>
                  <div className="btn-bar">
                    <a
                      className="px-btn px-btn-theme"
                      href="static/resume/MahabeerResume.pdf"
                      target="_blank"
                    >
                      Donwload CV
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <Image
                    width={500}
                    height={600}
                    src="./static/img/about-me-about.jpeg"
                    title="Mahabeer"
                    alt="Mahabeer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home */}
      {/* about us */}
      <About />
      {/* End about us */}
      {/* Services */}
      <Services />
      {/* End Services */}
      {/* Portfolio */}
      {/* <Portfolio /> */}
      {/* End Portfolio */}
      {/* Blog */}
      {/* <Blog blogs={[]} /> */}
      {/* End Blog */}
      {/* Contact us */}
      <Contact />
    </Layout>
  );
};
export default Index;

export async function getStaticProps() {
  return {
    props: {},
  };
}
