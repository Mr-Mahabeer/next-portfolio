import Link from "next/link";

const DocumentScannerPrivacyPolicy = () => (
  <div className={"privacyPolicyContainer"}>
    <h1 className={"header"}>
      Privacy Policy for Document Scanner Mobile Application
    </h1>
    <p className={"updatedDate"}>Last updated: November 27, 2023</p>
    <p className={"paragraph"}>
      <p>
        This Privacy Policy outlines how the Document Scanner mobile
        application, developed by Mahabeer, collects, uses, and protects any
        information provided by users. The Document Scanner app is committed to
        ensuring the privacy and security of your personal information. By using
        the Document Scanner app, you agree to the terms of this Privacy Policy.
      </p>

      <h2>Information We Collect:</h2>
      <p>
        The Document Scanner app does not collect any personal information from
        its users. No login or signup is required to access the app features. We
        do not store any scanned documents or PDFs on our servers.
      </p>

      <h2>Document Scanning and PDF Creation:</h2>
      <p>
        The Document Scanner app provides a document scanning feature, allowing
        users to create PDFs. The scanned documents and created PDFs are stored
        locally on the user{`'s`} device and are not transmitted to our servers.
      </p>

      <h2>Sharing Feature:</h2>
      <p>
        The sharing feature in the Document Scanner app allows users to share
        scanned documents with others. The sharing process is done through the
        user{`'s`} chosen communication channels (email, messaging apps, etc.),
        and no data is shared with us during this process.
      </p>

      <h2>Google Ads:</h2>
      <p>
        The Document Scanner app may display Google Ads. Please refer to Google
        {`'s`} Privacy Policy for information on how Google collects and uses
        data:{" "}
        <a href="https://policies.google.com/privacy?hl=en-US">
          https://policies.google.com/privacy?hl=en-US
        </a>
      </p>

      <h2>Changes to the Privacy Policy:</h2>
      <p>
        The Document Scanner app may update this Privacy Policy from time to
        time. Users will be notified of any changes, and it is recommended to
        review this policy periodically.
      </p>

      <h2>Contact Us:</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please
        contact us at mahabeer.fcs.gna@gmail.com or click{" "}
        <Link href="/#contactus">Here</Link>.
      </p>
    </p>

    <p className={"footer"}>
      By using the Document Scanner app, you acknowledge and agree to the terms
      outlined in this Privacy Policy.
    </p>
  </div>
);

export default DocumentScannerPrivacyPolicy;
