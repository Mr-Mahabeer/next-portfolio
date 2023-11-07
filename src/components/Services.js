import dynamic from "next/dynamic";

// const Testimonials = dynamic(() => import("./Testimonials"), {
//   ssr: false,
// });

const Services = () => {
  return (
    <section
      id="services"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>What I do?</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" />
              <div className="feature-content media-body">
                <h5>Web Development
                </h5>
                <p>
                  I am an experienced web developer with a strong passion for creating exceptional online experiences using cutting-edge technologies like React.js and Next.js. I specialize in crafting responsive and user-friendly websites and web applications. My expertise in React.js allows me to build dynamic and interactive user interfaces, while Next.js empowers me to create fast, server-rendered React applications.I thrive on tackling challenging projects and collaborating with cross-functional teams to bring creative web ideas to life. My goal is to continuously enhance and expand my skills in React.js and Next.js to provide the best possible web development services.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" />
              <div className="feature-content media-body">
                <h5>Mobile Development</h5>
                <p>
                  I possess significant experience as a mobile app developer, fueled by a strong passion for crafting exceptional mobile user experiences through React Native. My specialization lies in the creation of cross-platform mobile applications that seamlessly emulate the native feel on both iOS and Android platforms. Proficient in React Native, I excel in building dynamic and user-friendly mobile apps. My commitment to staying abreast of the latest trends in mobile app development drives me to consistently deliver high-quality solutions, characterized by clean and efficient code. My overarching objective is to continually elevate and broaden my proficiency in React Native.


                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-target" />
              <div className="feature-content media-body">
                <h5>SEO Marketing</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div> */}

        </div>
        {/* <div className="separated" /> */}
        {/* <Testimonials /> */}
      </div>
    </section>
  );
};
export default Services;
