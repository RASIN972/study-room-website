import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalLayout } from '@/components/legal-layout';

export const metadata: Metadata = {
  title: 'Terms of Service — Study Room',
  description:
    'Study Room Terms of Service. Read the terms governing your use of the app.',
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service">
      <p className="text-brand-text-muted">
        <strong>Last Updated:</strong> March 11, 2026 ·{' '}
        <strong>Effective Date:</strong> March 11, 2026
      </p>

      <h2>1. Agreement to Terms</h2>
      <p>
        Welcome to Study Room. These Terms of Service (&quot;Terms,&quot; &quot;Agreement&quot;)
        constitute a legally binding agreement between you (&quot;you,&quot; &quot;your,&quot; or
        &quot;User&quot;) and Study Room (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or the
        &quot;Company&quot;) governing your access to and use of the Study Room mobile application
        (the &quot;App&quot;) and any related services, features, and content (collectively, the
        &quot;Service&quot;).
      </p>
      <p>
        By creating an account, downloading, installing, accessing, or using the App, you
        acknowledge that you have read, understood, and agree to be bound by these Terms, as well
        as our <Link href="/privacy">Privacy Policy</Link>, which is incorporated herein by
        reference. If you do not agree to these Terms, you must not access or use the Service.
      </p>
      <p>
        We reserve the right to modify these Terms at any time. If we make material changes, we
        will notify you by updating the &quot;Last Updated&quot; date at the top of these Terms
        and, where appropriate, providing additional notice. Your continued use of the Service
        after any such changes constitutes your acceptance of the updated Terms.
      </p>

      <h2>2. Description of Service</h2>
      <p>Study Room is a mobile application that enables users to:</p>
      <ul>
        <li>
          <strong>Record timelapse study sessions</strong> using the device&apos;s front-facing
          camera.
        </li>
        <li>
          <strong>Share timelapse videos</strong> with small, private accountability groups called
          &quot;Rooms.&quot;
        </li>
        <li>
          <strong>Track study statistics</strong> including session duration, streaks, and total
          study time.
        </li>
        <li>
          <strong>React to sessions</strong> posted by other Room members using emoji reactions.
        </li>
        <li>
          <strong>Create and join Rooms</strong> — small groups of 3 to 25 people who know each
          other for mutual study accountability.
        </li>
      </ul>
      <p>
        Study Room is designed for small-group accountability between people who know each other.
        It is <strong>not</strong> a public social media platform. Content shared within Rooms is
        only visible to verified members of those Rooms.
      </p>

      <h2>3. Eligibility</h2>

      <h3>3.1 Age Requirement</h3>
      <p>
        You must be at least <strong>13 years of age</strong> (or the minimum age of digital
        consent in your jurisdiction, whichever is higher) to create an account and use the
        Service. If you are between the ages of 13 and 18, you may only use the Service with the
        consent and supervision of a parent or legal guardian who agrees to be bound by these
        Terms.
      </p>

      <h3>3.2 Account Eligibility</h3>
      <p>
        You must be a natural person to use the Service. Automated accounts, bots, and accounts
        created by scripts or other automated means are prohibited.
      </p>

      <h3>3.3 Jurisdiction</h3>
      <p>
        The Service is intended for use worldwide, but we make no representations that the Service
        is appropriate or available for use in all locations. You are responsible for compliance
        with all applicable local laws and regulations.
      </p>

      <h2>4. Account Registration and Security</h2>

      <h3>4.1 Account Creation</h3>
      <p>
        To use the Service, you must create an account using one of: Email and password, Google
        Sign-In, or Apple Sign-In. You must provide accurate, current, and complete information
        during registration.
      </p>

      <h3>4.2 Account Security</h3>
      <p>
        You are responsible for maintaining the confidentiality of your account credentials. You
        agree not to share credentials, notify us of unauthorized access, not create more than one
        account per person, and not use another person&apos;s account without permission.
      </p>

      <h3>4.3 Account Deletion</h3>
      <p>
        You may request deletion of your account at any time through the App&apos;s settings or by
        contacting us at <a href="mailto:studyroomdevs@gmail.com">studyroomdevs@gmail.com</a>.
        Upon account deletion: your profile, sessions, timelapse videos, and Room memberships will
        be permanently deleted. Account deletion is processed within 30 days of a verified request.
      </p>

      <h2>5. User Content</h2>

      <h3>5.1 Definition of User Content</h3>
      <p>
        &quot;User Content&quot; means any content you create, upload, share, or make available
        through the Service, including timelapse videos, profile information, Room names, subject
        labels, and emoji reactions.
      </p>

      <h3>5.2 Your Ownership</h3>
      <p>You retain ownership of your User Content. By submitting User Content, you do not transfer ownership to us.</p>

      <h3>5.3 License Grant</h3>
      <p>
        By submitting User Content, you grant us a limited, non-exclusive, royalty-free, worldwide,
        sublicensable license to use, store, reproduce, modify, and display your User Content solely
        for the purpose of operating, providing, and improving the Service. This license terminates
        when you delete your User Content or your account, except where required for legal purposes.
      </p>

      <h3>5.4 Content Restrictions</h3>
      <p>You agree that your User Content will NOT:</p>
      <ul>
        <li>Contain nudity, sexually explicit content, or pornography.</li>
        <li>Contain graphic violence, hate speech, harassment, bullying, or discrimination.</li>
        <li>Contain threats of violence or incitement of violence.</li>
        <li>Exploit, abuse, or endanger minors.</li>
        <li>Promote self-harm, suicide, eating disorders, or other dangerous behaviors.</li>
        <li>Violate any applicable law, regulation, or third-party rights.</li>
        <li>Contain spam, malware, or impersonate any person or entity.</li>
      </ul>

      <h3>5.5 Content Monitoring and Removal</h3>
      <p>
        We reserve the right to review, remove, or disable access to any User Content at our sole
        discretion. If you encounter User Content that violates these Terms, please report it to{' '}
        <a href="mailto:studyroomdevs@gmail.com">studyroomdevs@gmail.com</a>.
      </p>

      <h2>6. Camera Usage and Timelapse Recording</h2>

      <h3>6.1 Camera Access</h3>
      <p>
        The App requires access to your device&apos;s front-facing camera to capture timelapse frames
        during study sessions. The camera is only active during a study session you explicitly start.
        Image frames are captured approximately every 10 seconds. Frames are stored locally on your
        device. The App does not record audio. You may revoke camera permissions at any time via your
        device settings.
      </p>

      <h3>6.2 On-Device Processing</h3>
      <p>
        Timelapse videos are stitched together entirely on your device. No raw frames are uploaded.
        Only the final timelapse video (after your review and approval) is uploaded if you choose to
        share it with a Room.
      </p>

      <h2>7. Rooms</h2>
      <p>
        Any registered user may create a Room. Rooms may have a maximum of 25 members. You may leave
        a Room at any time. Room content is only visible to verified Room members.
      </p>

      <h2>8. Reactions and Interactions</h2>
      <p>
        You may react to study sessions using emoji reactions: 🔥 💪 🧠 👏 ⭐. Reactions are intended
        to encourage and motivate. You agree not to use reactions as a means of harassment or bullying.
      </p>

      <h2>9. Prohibited Conduct</h2>
      <p>
        You agree NOT to: use the Service for illegal purposes; attempt unauthorized access; reverse
        engineer the App; transmit viruses; use automated means to access the Service; stalk, harass,
        or bully; create false identities; sell or resell access to the Service; or circumvent
        security measures.
      </p>

      <h2>10. Intellectual Property</h2>
      <p>
        The Service, including its design, features, code, graphics, logos, and brand identity, is
        owned by Study Room and protected by copyright and trademark laws. Subject to your compliance
        with these Terms, we grant you a limited, non-exclusive, non-transferable license to use the
        App on your personal device(s) for personal, non-commercial use.
      </p>

      <h2>11. Third-Party Services</h2>
      <p>
        The Service relies on Supabase, Expo/EAS, Apple Sign-In, Google Sign-In, and (future)
        RevenueCat. Your use of these services is subject to their respective terms and privacy
        policies. The App is distributed through the Apple App Store and Google Play Store. Your
        download and use is also subject to those platforms&apos; terms.
      </p>

      <h2>12. Subscriptions and Payments</h2>
      <p>
        The Service is currently available <strong>free of charge</strong>. We may introduce premium
        subscription features in the future through in-app purchases. Pricing and terms will be
        clearly communicated before any purchase. We do not directly collect or store payment
        information.
      </p>

      <h2>13. Termination</h2>
      <p>
        You may stop using the Service and delete your account at any time. We reserve the right to
        suspend or terminate your account for violation of these Terms, harmful conduct, inactivity,
        or other reasons. Upon termination, your right to access the Service will immediately cease.
      </p>

      <h2>14. Disclaimers</h2>
      <p>
        THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF
        ANY KIND. WE DISCLAIM ALL WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR
        PURPOSE, AND NON-INFRINGEMENT. We do not guarantee that using the Service will improve your
        study habits or academic performance. We do not endorse, guarantee, or assume responsibility
        for any User Content.
      </p>

      <h2>15. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL STUDY ROOM BE LIABLE FOR ANY
        INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES. OUR TOTAL AGGREGATE
        LIABILITY SHALL NOT EXCEED THE GREATER OF: (A) THE AMOUNT YOU HAVE PAID TO US IN THE TWELVE
        MONTHS PRIOR TO THE CLAIM, OR (B) FIFTY UNITED STATES DOLLARS (USD $50.00).

      </p>

      <h2>16. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless Study Room from and against any claims,
        liabilities, damages, losses, and expenses arising out of your use of the Service, your User
        Content, your violation of these Terms, or your violation of any applicable law or third-party
        rights.
      </p>

      <h2>17. Dispute Resolution</h2>
      <p>
        Before filing any formal legal claim, you agree to first contact us at{' '}
        <a href="mailto:studyroomdevs@gmail.com">studyroomdevs@gmail.com</a> and attempt to resolve
        the dispute informally. These Terms shall be governed by the laws of the United States. Any
        legal proceedings shall be brought exclusively in the courts of the United States. YOU WAIVE
        YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT.
      </p>

      <h2>18. Apple-Specific Terms (iOS Users)</h2>
      <p>
        If you downloaded the App from the Apple App Store: These Terms are between you and Study
        Room only, not with Apple. Study Room is solely responsible for the App. Apple has no
        obligation to furnish maintenance or support. Apple is a third-party beneficiary of these
        Terms. For App questions, contact Study Room at{' '}
        <a href="mailto:studyroomdevs@gmail.com">studyroomdevs@gmail.com</a>.
      </p>

      <h2>19. Google Play-Specific Terms (Android Users)</h2>
      <p>
        Your use of the App is also subject to the Google Play Terms of Service. Study Room, not
        Google, is solely responsible for the App, its content, and any claims arising from your use.
      </p>

      <h2>20. Push Notifications</h2>
      <p>
        With your permission, we may send push notifications about Room activity and session updates.
        You may opt out at any time through your device or App settings.
      </p>

      <h2>21. Privacy</h2>
      <p>
        Your use of the Service is also governed by our <Link href="/privacy">Privacy Policy</Link>.
        Key highlights: The App uses your front camera only during active study sessions; timelapse
        videos are stitched on your device; your videos are only visible to Room members you choose;
        we do not sell your data; we do not record audio; you can delete your account and data at any
        time.
      </p>

      <h2>22. Modifications to the Service</h2>
      <p>
        We reserve the right to modify, suspend, or discontinue the Service at any time, with or
        without notice. We shall not be liable for any modification, suspension, or discontinuation.
      </p>

      <h2>23. Severability</h2>
      <p>
        If any provision of these Terms is held invalid or unenforceable, that provision shall be
        modified to accomplish its objectives to the greatest extent possible, and the remaining
        provisions shall continue in full force and effect.
      </p>

      <h2>24. Waiver</h2>
      <p>
        Our failure to enforce any right or provision shall not constitute a waiver. Any waiver must
        be in writing and signed by Study Room.
      </p>

      <h2>25. Entire Agreement</h2>
      <p>
        These Terms, together with the Privacy Policy and any other legal notices, constitute the
        entire agreement between you and Study Room regarding the Service.
      </p>

      <h2>26. Assignment</h2>
      <p>
        You may not assign or transfer these Terms without our prior written consent. We may assign
        or transfer these Terms without restriction.
      </p>

      <h2>27. Force Majeure</h2>
      <p>
        We shall not be liable for any failure or delay resulting from causes beyond our reasonable
        control, including natural disasters, war, pandemics, government actions, or internet failures.
      </p>

      <h2>28. Contact Us</h2>
      <p>
        If you have any questions, concerns, or complaints about these Terms or the Service, please
        contact us at:
      </p>
      <p>
        <strong>Study Room</strong>
        <br />
        Email: <a href="mailto:studyroomdevs@gmail.com">studyroomdevs@gmail.com</a>
      </p>

      <h2>29. Additional Disclosures</h2>
      <p>
        The Service does not provide educational, academic, medical, or professional advice. Nothing
        in these Terms creates an employment, agency, partnership, or joint venture relationship.
        Sections 5.3, 10, 14, 15, 16, 17, and 18 shall survive termination.
      </p>

      <p className="text-brand-text-muted text-sm mt-8">
        These Terms of Service are intended to comply with the Apple App Store Review Guidelines,
        Google Play Developer Policy, and applicable laws and regulations.
      </p>
    </LegalLayout>
  );
}
