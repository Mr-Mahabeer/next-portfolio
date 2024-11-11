import React, { useState } from "react";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const BASE_URL = "http://localhost:5501"

function validateEmail(email) {
  return emailRegex.test(email);
}

const Page = () => {
  const [email, setEmail] = useState("");
  const [isValid, setValid] = useState(true);

  const onEmailChange = (e) => {
    const val = e.target.value;
    const isValid = validateEmail(val);
    setValid(isValid);
    setEmail(val);
  };

  const onAccountDeleteClick = async (e) => {
    const response = await fetch(`${BASE_URL}/requestDelete`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    });

    await response.json();

    alert("Account delete link is sent to your email address.");
  };

  return (
    <main>
      <div id="account-deletion-container">
        <h2>Request Account Deletion:ClipMe</h2>
        <p>
          Please enter your email address below to request account deletion.
        </p>
        <form action="submit.php" method="post">
          <label for="email">Email:</label>
          <input
            onChange={onEmailChange}
            type="email"
            id="email"
            name="email"
            required
          />
          {!isValid && (
            <span className="email-error">
              Please enter a valid email address.
            </span>
          )}
          <button
            disabled={!isValid}
            type="button"
            onClick={onAccountDeleteClick}
          >
            Submit
          </button>
        </form>
      </div>
      <dialog>asdasd</dialog>
    </main>
  );
};

export default Page;
