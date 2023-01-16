import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

export default function ReCapcha() {
  const [verified, setVerified] = useState(false);
  function onChange(value) {
    setVerified(true);
  }

  return (
    <>
      <ReCAPTCHA
        sitekey="6Lc9X2ghAAAAAK8TIymml2IQxFXGxXugMHgnAwzT"
        onChange={onChange}
      />
    </>
  );
}
