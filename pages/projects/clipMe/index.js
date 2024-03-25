import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <main>
      <div className={"privacyPolicyContainer"}>
        <h1 className={"header"}>
          Privacy Policy for ClipMe Mobile Application
        </h1>
        <p className={"updatedDate"}>Last updated: March 25, 2024</p>
        <p className={"paragraph"}>
          <p>
            ClipMe {`("we," "us," or "our")`} respects your privacy and is
            committed to protecting it through our compliance with this Privacy
            Policy. This Privacy Policy describes the types of information we
            may collect from you or that you may provide when you use the ClipMe
            mobile application {`(the "App")`} and our practices for collecting,
            using, maintaining, protecting, and disclosing that information.
          </p>

          <h2>Information We Collect:</h2>
          <p className={"paragraph"}>
            When you use the ClipMe App, we may collect certain information from
            you, including:
            <ul>
              <li>
                Information You Provide: When you sign up or log in to the App
                using Google OAuth, we may collect your name, email address, and
                profile photo from your Google account.
              </li>
            </ul>
          </p>

          <h2>How We Use Your Information:</h2>
          <p className={"paragraph"}>
            We may use the information we collect from you, including your name,
            email address, and profile photo, to:
            <ul>
              <li>Provide you with access to the App and its features.</li>
            </ul>
          </p>

  

          <h2>Google Ads:</h2>
          <p>
            The ClipMe may display Google Ads. Please refer to
            Google
            {`'s`} Privacy Policy for information on how Google collects and
            uses data:{" "}
            <a href="https://policies.google.com/privacy?hl=en-US">
              https://policies.google.com/privacy?hl=en-US
            </a>
          </p>

          <h2>Changes to the Privacy Policy:</h2>
          <p>
            We may update this Privacy Policy from time to
            time. Users will be notified of any changes, and it is recommended
            to review this policy periodically.
          </p>

          <h2>Contact Us:</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at mahabeer.fcs.gna@gmail.com or click{" "}
            <Link href="https://www.mahabeer.me/#contactus" target="_blank">
              <a target="_blank">Here</a>
            </Link>
            .
          </p>
        </p>

        <p className={"footer"}>
          By using the ClipMe, you acknowledge and agree to the
          terms outlined in this Privacy Policy.
        </p>
      </div>
    </main>
  );
};

export default Page;
