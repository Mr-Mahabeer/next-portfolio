import Link from "next/link";

const NatifyPolicy = () => (
  <div className={"privacyPolicyContainer"}>
    <h1 className={"header"}>Privacy Policy for Natify Mobile Application</h1>
    <p className={"updatedDate"}>Last updated: December 02, 2024</p>
    <p className={"paragraph"}>
      <p>
        This Privacy Policy outlines how the Natify mobile application,
        developed by Mahabeer, collects, uses, and protects any information
        provided by users. The Natify app is committed to ensuring the privacy
        and security of your personal information. By using the Natify app, you
        agree to the terms of this Privacy Policy.
      </p>

      <h2>Information We Collect:</h2>
      <p>
        The Natify app does not collect any personal information from its users. We do not
        store/share any information to our servers.
      </p>

      <h2>Natify</h2>
      <p>
        Natify takes your Bubble and other single-page applications (SPAs) to the next level by converting them into fully functional native mobile apps. Enhance your app’s potential with modern native features while continuing to leverage the rapid and flexible no-code or SPA development process.
        With Natify, you can unlock capabilities like push notifications, device camera access, and other essential native functionalities. Use the app to test these features, configure your projects, and preview how your app performs as a native application.

      </p>

      <h2>Google Ads:</h2>
      <p>
        The Natify does not display Google Ads. Please refer to Google
        {`'s`} Privacy Policy for information on how Google collects and uses
        data:{" "}
        <a href="https://policies.google.com/privacy?hl=en-US">
          https://policies.google.com/privacy?hl=en-US
        </a>
      </p>

      <h2>Changes to the Privacy Policy:</h2>
      <p>
        The Natify app may update this Privacy Policy from time to time. Users
        will be notified of any changes, and it is recommended to review this
        policy periodically.
      </p>

      <h2>Contact Us:</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please
        contact us at mahabeer.fcs.gna@gmail.com or click{" "}
        <Link href="https://www.mahabeer.online/#contactus" target="_blank">
          <a target="_blank">Here</a>
        </Link>
        .
      </p>
    </p>

    <p className={"footer"}>
      By using the Natify app, you acknowledge and agree to the terms outlined
      in this Privacy Policy.
    </p>
  </div>
);

export default NatifyPolicy;
