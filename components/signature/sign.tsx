import React, { useRef, useState, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import styles from "./sign_style.module.css";

const SignaturePad = ({ closeModal }) => {
  const sigCanvas = useRef({});
  const initialCanvas = useRef({});

  const [step, setStep] = useState(1);
  const [signatureData, setSignatureData] = useState(null);
  const [initialsData, setInitialsData] = useState(null);
  const [sigBorderColor, setSigBorderColor] = useState("");
  const [initialBorderColor, setInitialBorderColor] = useState("");

  useEffect(() => {
    if (step === 1 && signatureData) {
      sigCanvas.current.fromDataURL(signatureData);
      setSigBorderColor(styles.borderGreen);
    }
  }, [step, signatureData]);

  useEffect(() => {
    if (step === 2 && initialsData) {
      initialCanvas.current.fromDataURL(initialsData);
      setInitialBorderColor(styles.borderGreen);
    }
  }, [step, initialsData]);

  const clearSignature = () => {
    sigCanvas.current.clear();
    setSigBorderColor(styles.borderRed);
    setTimeout(() => setSigBorderColor(""), 1000);
  };

  const saveSignature = () => {
    const dataURL = sigCanvas.current
      .getTrimmedCanvas()
      .toDataURL("image/svg+xml");
    setSignatureData(dataURL);
    setSigBorderColor(styles.borderGreen);
    setStep(2);
  };

  const clearInitials = () => {
    initialCanvas.current.clear();
    setInitialBorderColor(styles.borderRed);
    setTimeout(() => setInitialBorderColor(""), 1000);
  };

  const saveInitials = () => {
    const dataURL = initialCanvas.current
      .getTrimmedCanvas()
      .toDataURL("image/svg+xml");
    setInitialsData(dataURL);
    setInitialBorderColor(styles.borderGreen);
    setStep(3);
    // Save to database here
    console.log("Signature and Initials saved:", {
      signatureData,
      initialsData,
    });
  };

  const goBackToSignature = () => {
    setStep(1);
  };

  return (
    <div className={styles.container}>
      {step === 1 && (
        <div className={styles.signatureContainer}>
          <div>Draw your Signature</div>
          <SignatureCanvas
            ref={sigCanvas}
            canvasProps={{
              className: `${styles.signatureCanvas} ${sigBorderColor}`,
            }}
          />
          <div className={styles.buttonContainer}>
            <button className={styles["btn-clear"]} onClick={clearSignature}>
              Clear
            </button>
            <button className={styles["btn-save"]} onClick={saveSignature}>
              Continue
            </button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className={styles.signatureContainer}>
          <div>Draw your Initials</div>
          <SignatureCanvas
            ref={initialCanvas}
            canvasProps={{
              className: `${styles.signatureCanvas} ${initialBorderColor}`,
            }}
          />
          <div className={styles.buttonContainer}>
            <button className={styles["btn-clear"]} onClick={clearInitials}>
              Clear
            </button>
            <button className={styles["btn-save"]} onClick={goBackToSignature}>
              Go Back to Signature
            </button>
            <button className={styles["btn-save"]} onClick={saveInitials}>
              Confirm
            </button>
            <div className={styles["acknowledge"]}>
              By selecting "Confirm," I acknowledge and agree that the signature
              and initials generated will constitute my electronic signature and
              initials for all purposes when used by me or my authorized
              representative on documents, including but not limited to legally
              binding contracts.
            </div>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className={styles.confirmationContainer}>
          <div>Your signature and initials have been saved.</div>
          <button className={styles["btn-save"]} onClick={closeModal}>
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default SignaturePad;
