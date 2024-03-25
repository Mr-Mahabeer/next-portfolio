import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <Image
                    src="/static/img/about-me-section.jpg"
                    title=""
                    alt=""
                    height={667}
                    width={500}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`I'm`} a Front-end Developer with about 2 years of
                  experience.{" "}
                </h3>
                <p>
                  {`I'm`} a dedicated front-end developer with about 2 years of
                  experience in web and mobile app development. Currently,{" "}
                  {`I'm`} part of the talented team at Ellocent Labs in Mohali.
                  My expertise lies in creating exceptional user experiences
                  using cutting-edge technologies. I excel in React.js, Next.js,
                  and React Native, enabling me to craft cross-platform mobile
                  applications with a native look and feel.
                  {`I'm`} excited to bring my expertise to the table. Together,
                  we can build remarkable digital experiences that captivate and
                  engage users.
                  {/* {`I'm`} a Front-end Developer with over 1.5 years of
                  experience. {`I'm`} from San Francisco. I code and create web
                  elements for amazing people around the world. I like work with
                  new people. New people new Experiences. */}
                </p>
                <div className="row">
                  {/* <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">5</span>
                      <div className="media-body">
                        Projects <br />
                        Completed.
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">3k</span>
                      <div className="media-body">
                        Satisfied <br />
                        Clients.
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#contactus">
                    <span>Contact Me</span>
                  </a>
                  {/* <a className="px-btn px-btn-theme" href="#">
                    <span>Portfolio</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2022-Present</span>
                <h6>Master of Computer Application</h6>
                <p>Mangalayatan University - UP</p>
              </li>
              <li>
                <span>2019-2022</span>
                <h6>Bachelor of Computer Application</h6>
                <p>GNA University - Punjab</p>
              </li>
              <li>
                <span>2018-2019</span>
                <h6>12th Standard {`(CBSE)`}</h6>
                <p>JNV Ferozepur - Punjab</p>
              </li>
              <li>
                <span>2016-2017</span>
                <h6>High School Diploma {`(CBSE)`}</h6>
                <p>JNV Ferozepur - Punjab</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                {`I'm`} a Front-end Developer with about 2 years of experience.
                I code and create web elements for amazing people around the
                world. I like to work with new people. New people new
                Experiences.
              </p>
              <div className="skill-lt">
                <h6>React.js</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "95%" }}>
                    <span data-toggle="tooltip" title="95%" />
                  </div>
                </div>
              </div>

              <div className="skill-lt">
                <h6>React Native</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "98%" }}>
                    <span data-toggle="tooltip" title="98%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Next.js</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "70%" }}>
                    <span data-toggle="tooltip" title="70%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>JavaScript</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "75%" }}>
                    <span data-toggle="tooltip" title="75%" />
                  </div>
                </div>
              </div>
              {/* /skill */}

              <div className="skill-lt">
                <h6>Tailwind CSS</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "80%" }}>
                    <span data-toggle="tooltip" title="80%" />
                  </div>
                </div>
              </div>
              {/* /skill */}

              <div className="skill-lt">
                <h6>SQL</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "80%" }}>
                    <span data-toggle="tooltip" title="80%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Git</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "70%" }}>
                    <span data-toggle="tooltip" title="70%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <Image
                    height={248}
                    width={280}
                    src="/static/img/ellocent.svg"
                    title="Company"
                    alt="Company"
                  />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Front-end Developer</h6>
                  <label>Ellocent Labs | On Site | May 2022 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    {`I'm`} a dedicated front-end developer with about 2 years
                    of experience in web and mobile app development. Currently,{" "}
                    {`I'm`} part of the talented team at Ellocent Labs in
                    Mohali.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a2.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Front-end Developer</h6>
                  <label>WeLab | Remote | Jan 2019 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a3.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Front-end Developer</h6>
                  <label>WeLab | Remote | Jan 2019 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default About;
