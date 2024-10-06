import Link from "next/link";

const VaultyPolicy = () => (
  <div className={"privacyPolicyContainer"}>
    <h1 className={"header"}>Privacy Policy for Vaulty Mobile Application</h1>
    <p className={"updatedDate"}>Last updated: October 01, 2024</p>
    <p className={"paragraph"}>
      <p>
        This Privacy Policy outlines how the Vaulty mobile application,
        developed by Mahabeer, collects, uses, and protects any information
        provided by users. The Vaulty app is committed to ensuring the privacy
        and security of your personal information. By using the Vaulty app, you
        agree to the terms of this Privacy Policy.
      </p>

      <h2>Information We Collect:</h2>
      <p>
        The Vaulty app does not collect any personal information from its users.
        No login or signup is required to access the app features. We do not
        store/share any information to our servers.
      </p>

      <h2>Vaulty</h2>
      <p>
        Vaulty app provides creating, storing and managing the passwords of the
        users for different platforms. The stored passwords are stored locally
        on the user{`'s`} device and are not transmitted to our servers.
      </p>

      <h2>Google Ads:</h2>
      <p>
        The Vaulty app may display Google Ads. Please refer to Google
        {`'s`} Privacy Policy for information on how Google collects and uses
        data:{" "}
        <a href="https://policies.google.com/privacy?hl=en-US">
          https://policies.google.com/privacy?hl=en-US
        </a>
      </p>

      <h2>Changes to the Privacy Policy:</h2>
      <p>
        The Vaulty app may update this Privacy Policy from time to time. Users
        will be notified of any changes, and it is recommended to review this
        policy periodically.
      </p>

      <h2>Contact Us:</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please
        contact us at mahabeer.fcs.gna@gmail.com or click{" "}
        <Link href="https://www.mahabeer.me/#contactus" target="_blank">
          <a target="_blank">Here</a>
        </Link>
        .
      </p>
    </p>

    <p className={"footer"}>
      By using the Vaulty app, you acknowledge and agree to the terms outlined
      in this Privacy Policy.
    </p>
  </div>
);

export default VaultyPolicy;
