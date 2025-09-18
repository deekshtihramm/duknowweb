import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1>📄 Privacy Policy for Duknow</h1>
      <p>
        <strong>Effective Date:</strong> September 18, 2025
      </p>

      <p>
        Duknow (“we,” “our,” or “us”) values your trust and is committed to
        protecting your privacy. This Privacy Policy explains what information
        we collect, how we use it, and the choices you have regarding your
        personal data when using the Duknow mobile application (“App”).
      </p>

      <p>
        By using Duknow, you agree to the terms outlined in this Privacy Policy.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Personal Information (only if you provide it):</strong> Name,
          email address, or contact details (when you voluntarily submit them
          through feedback, support, or communication).
        </li>
        <li>
          <strong>Non-Personal Information (collected automatically):</strong>{" "}
          Device details (model, operating system, identifiers), usage data
          (features you use, time spent, interactions), log data (IP address,
          performance statistics, crash reports).
        </li>
        <li>
          <strong>Advertising & Analytics Data:</strong> Through third-party
          services (like Google AdMob and Firebase), we may collect anonymous
          data to deliver ads, analyze performance, and improve app
          functionality.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Provide, maintain, and improve the App’s features.</li>
        <li>Personalize content and enhance user experience.</li>
        <li>Show relevant advertisements (personalized or non-personalized).</li>
        <li>Monitor app performance, fix technical issues, and ensure security.</li>
        <li>Respond to user questions, feedback, or support requests.</li>
      </ul>

      <h2>3. Third-Party Services</h2>
      <p>Our App integrates with trusted third-party services:</p>
      <ul>
        <li>Google AdMob → for showing ads.</li>
        <li>Google Firebase / Google Analytics → for analytics & crash reporting.</li>
      </ul>
      <p>Please review their privacy policies:</p>
      <ul>
        <li>
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google AdMob
          </a>
        </li>
        <li>
          <a
            href="https://firebase.google.com/support/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Firebase
          </a>
        </li>
      </ul>

      <h2>4. Data Sharing & Security</h2>
      <ul>
        <li>We do not sell, rent, or trade your personal information.</li>
        <li>
          Data may only be shared with third-party providers (AdMob, Firebase)
          as needed for app functionality.
        </li>
        <li>
          We apply reasonable security measures, but no system is 100% secure.
        </li>
      </ul>

      <h2>5. Children’s Privacy</h2>
      <p>
        Duknow is <strong>not designed for children under 13</strong> (or the
        minimum age required by your country’s laws). We do not knowingly
        collect data from children. If you believe a child has shared personal
        information, please contact us immediately, and we will delete it.
      </p>

      <h2>6. Your Rights</h2>
      <ul>
        <li>Access, update, or request deletion of your personal information.</li>
        <li>Opt-out of personalized ads.</li>
        <li>Contact us directly for any privacy concerns.</li>
      </ul>

      <h2>7. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Updates will be
        posted here with a new <strong>Effective Date</strong>. Continuing to
        use Duknow after updates means you accept the revised terms.
      </p>

      <h2>8. Contact Us</h2>
      <p>If you have questions about this Privacy Policy, contact us at:</p>
      <ul>
        <li>📧 Email: duknow2025@gmail.com</li>
        <li>🌐 Website: <a
            href="https://duknow.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
         Duknow
          </a></li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
