import type { Metadata } from 'next';
import { LegalLayout } from '@/components/legal-layout';

export const metadata: Metadata = {
  title: 'Privacy Policy — Study Room',
  description:
    'Study Room Privacy Policy. Learn how we collect, use, and protect your data.',
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p className="text-brand-text-muted">
        <strong>Last Updated:</strong> 03/11/26 · <strong>Effective Date:</strong> 03/11/26
      </p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to Study Room (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or the
        &quot;Company&quot;). Study Room is a mobile application that allows users to timelapse
        themselves studying and share sessions with small accountability groups called
        &quot;Rooms.&quot; This Privacy Policy explains how we collect, use, disclose, and
        safeguard your information when you use our mobile application (the &quot;App&quot;)
        available on iOS and Android platforms.
      </p>
      <p>
        Please read this Privacy Policy carefully. By accessing or using the App, you
        acknowledge that you have read, understood, and agree to be bound by this Privacy
        Policy. If you do not agree with the terms of this Privacy Policy, please do not
        access or use the App.
      </p>
      <p>
        We reserve the right to make changes to this Privacy Policy at any time and for any
        reason. We will alert you about any changes by updating the &quot;Last Updated&quot;
        date of this Privacy Policy. You are encouraged to periodically review this Privacy
        Policy to stay informed of updates.
      </p>

      <h2>2. Information We Collect</h2>

      <h3>2.1 Personal Information You Provide</h3>
      <p>
        When you create an account and use Study Room, we may collect the following personal
        information that you voluntarily provide to us:
      </p>
      <ul>
        <li>
          <strong>Account Information:</strong> Email address, display name, and profile
          avatar/photo.
        </li>
        <li>
          <strong>Authentication Data:</strong> If you sign in using third-party authentication
          providers (Google or Apple Sign-In), we receive your name, email address, and profile
          photo URL as provided by those services. We do not receive or store your passwords
          from third-party providers.
        </li>
        <li>
          <strong>Profile Information:</strong> Display name, profile picture, and any other
          information you choose to add to your profile.
        </li>
        <li>
          <strong>Study Session Data:</strong> Subject labels, session duration, start and end
          times, and any other information you provide when recording a study session.
        </li>
        <li>
          <strong>Room Information:</strong> Room names, descriptions, and membership details
          for accountability groups you create or join.
        </li>
        <li>
          <strong>Reactions and Interactions:</strong> Emoji reactions you leave on other
          users&apos; sessions, and session view records.
        </li>
      </ul>

      <h3>2.2 Information Collected Automatically</h3>
      <p>When you use the App, certain information is collected automatically:</p>
      <ul>
        <li>
          <strong>Camera Data:</strong> During an active study session, the App uses your
          device&apos;s front-facing (selfie) camera to periodically capture image frames (one
          frame approximately every 10 seconds). These frames are used exclusively to create a
          timelapse video of your study session. Camera access is only active during a study
          session that you explicitly start, and the camera is not accessed at any other time.
        </li>
        <li>
          <strong>Device Information:</strong> Device type, operating system version, and unique
          device identifiers for push notification delivery.
        </li>
        <li>
          <strong>Push Notification Tokens:</strong> If you grant permission, we collect your
          device&apos;s push notification token to send you notifications about room activity and
          session updates.
        </li>
        <li>
          <strong>Usage Data:</strong> Timestamps associated with your study sessions, streak
          information, total study minutes, and app interaction patterns.
        </li>
      </ul>

      <h3>2.3 Information NOT Collected</h3>
      <ul>
        <li>We do not collect precise geolocation data.</li>
        <li>We do not record audio during study sessions.</li>
        <li>We do not access your device&apos;s microphone.</li>
        <li>
          We do not access your contacts, calendar, or other personal data on your device
          beyond what is described in this policy.
        </li>
        <li>
          We do not collect financial or payment information (future subscription features will
          be handled by third-party payment processors such as Apple&apos;s App Store and Google
          Play, and we will not have access to your payment details).
        </li>
        <li>We do not use tracking technologies for advertising purposes.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li>
          <strong>To Provide and Maintain the App:</strong> Creating and managing your account,
          facilitating study sessions, generating timelapse videos, and enabling room-based
          accountability features.
        </li>
        <li>
          <strong>To Enable Social Features:</strong> Allowing you to share timelapse videos with
          your Rooms, enabling reactions from Room members, and displaying session activity
          within your accountability groups.
        </li>
        <li>
          <strong>To Track Study Progress:</strong> Calculating and displaying your personal study
          statistics, including total study minutes, current streak, and longest streak.
        </li>
        <li>
          <strong>To Send Notifications:</strong> Sending push notifications about room activity,
          session updates, and other relevant app communications (with your permission).
        </li>
        <li>
          <strong>To Improve the App:</strong> Understanding how users interact with the App to
          improve functionality, user experience, and performance.
        </li>
        <li>
          <strong>To Ensure Security:</strong> Protecting against unauthorized access, fraud, and
          other security threats.
        </li>
        <li>
          <strong>To Comply with Legal Obligations:</strong> Responding to legal requests and
          preventing harm as required by applicable law.
        </li>
      </ul>

      <h2>4. How Your Timelapse Data Works</h2>
      <p>Understanding how your study timelapse data is handled is important:</p>
      <ul>
        <li>
          <strong>Frame Capture:</strong> During an active session, image frames are captured from
          your front camera at regular intervals (approximately every 10 seconds).
        </li>
        <li>
          <strong>On-Device Processing:</strong> Frames are stored temporarily on your device
          and stitched together into a timelapse video entirely on your device. The processing
          happens locally using on-device video encoding.
        </li>
        <li>
          <strong>Upload:</strong> Once you review and approve your timelapse, and choose which
          Room(s) to share it with, the final video is uploaded to our secure servers.
        </li>
        <li>
          <strong>Access Control:</strong> Timelapse videos are not publicly accessible. They are
          only viewable by members of the Room(s) you choose to share them with. Access is
          controlled through secure, time-limited signed URLs.
        </li>
        <li>
          <strong>Thumbnail Generation:</strong> A thumbnail image is generated from the first
          frame of your timelapse for preview purposes within your Rooms.
        </li>
        <li>
          <strong>Deletion:</strong> Individual frames captured during a session are deleted from
          your device after the timelapse video is created. You can delete your sessions and
          associated timelapse data at any time.
        </li>
      </ul>

      <h2>5. How We Share Your Information</h2>
      <p>
        We do not sell, rent, or trade your personal information to third parties. We may share
        your information only in the following limited circumstances:
      </p>

      <h3>5.1 With Other Users (Within Your Rooms)</h3>
      <ul>
        <li>
          Your display name, avatar, study session information (subject, duration, timelapse),
          and streak data are visible to members of Rooms you belong to.
        </li>
        <li>Reactions and session views are visible within the context of shared sessions.</li>
        <li>
          Your data is only shared with people in your Rooms — Study Room is not a public social
          media platform. Rooms are small accountability groups (3–25 people) of people who know
          each other.
        </li>
      </ul>

      <h3>5.2 With Service Providers</h3>
      <p>We use the following third-party services to operate the App:</p>
      <ul>
        <li>
          <strong>Supabase:</strong> Backend infrastructure (database, authentication, file
          storage, real-time features) — Account data, session data, timelapse videos, avatars
        </li>
        <li>
          <strong>Expo / EAS:</strong> App build and update infrastructure, push notifications —
          Push notification tokens, device identifiers
        </li>
        <li>
          <strong>Apple Sign-In:</strong> Authentication (optional) — Authentication tokens (as
          initiated by you)
        </li>
        <li>
          <strong>Google Sign-In:</strong> Authentication (optional) — Authentication tokens (as
          initiated by you)
        </li>
        <li>
          <strong>RevenueCat (future):</strong> Subscription management (not yet implemented) —
          Purchase/subscription status, anonymous user identifiers
        </li>
      </ul>
      <p>
        These service providers are contractually obligated to protect your data and may only use
        it to provide services to us.
      </p>

      <h3>5.3 For Legal Reasons</h3>
      <p>
        We may disclose your information if required to do so by law or in the good faith belief
        that such action is necessary to: comply with a legal obligation, court order, or legal
        process; protect and defend our rights or property; prevent or investigate possible
        wrongdoing in connection with the App; or protect the personal safety of users of the App
        or the public.
      </p>

      <h3>5.4 Business Transfers</h3>
      <p>
        If we are involved in a merger, acquisition, or sale of all or a portion of our assets,
        your information may be transferred as part of that transaction. We will notify you via
        email and/or a prominent notice within the App of any change in ownership or uses of your
        personal information.
      </p>

      <h2>6. Data Storage and Security</h2>

      <h3>6.1 Where Your Data Is Stored</h3>
      <p>
        Your data is stored on servers managed by Supabase. Supabase uses industry-standard cloud
        infrastructure providers. Timelapse video files and avatars are stored in Supabase
        Storage with appropriate access controls.
      </p>

      <h3>6.2 Security Measures</h3>
      <ul>
        <li>
          <strong>Encryption in Transit:</strong> All data transmitted between the App and our
          servers is encrypted using TLS/SSL.
        </li>
        <li>
          <strong>Secure Authentication:</strong> Authentication tokens are stored securely on
          your device using platform-native secure storage (Keychain on iOS, encrypted storage on
          Android) via Expo SecureStore.
        </li>
        <li>
          <strong>Row-Level Security (RLS):</strong> Our database enforces row-level security
          policies, ensuring that users can only access data they are authorized to view.
        </li>
        <li>
          <strong>Signed URLs:</strong> Timelapse videos are not publicly accessible and require
          time-limited signed URLs for access.
        </li>
        <li>
          <strong>Access Controls:</strong> Room content is restricted to verified Room members
          only.
        </li>
      </ul>

      <h3>6.3 Security Limitations</h3>
      <p>
        While we strive to use commercially acceptable means to protect your personal
        information, no method of transmission over the Internet or method of electronic storage
        is 100% secure. We cannot guarantee absolute security of your data.
      </p>

      <h2>7. Data Retention</h2>
      <p>
        We retain your personal information for as long as your account is active or as needed to
        provide you with the App&apos;s services. Specifically:
      </p>
      <ul>
        <li>
          <strong>Account Data:</strong> Retained until you delete your account.
        </li>
        <li>
          <strong>Study Sessions and Timelapses:</strong> Retained until you delete them
          individually or delete your account.
        </li>
        <li>
          <strong>Room Data:</strong> Room content is retained as long as the Room exists. If a
          Room is deleted by its owner, associated session-room links are removed.
        </li>
        <li>
          <strong>Reactions and Views:</strong> Retained as long as the associated session
          exists.
        </li>
      </ul>
      <p>
        When you delete your account, we will delete or anonymize your personal information
        within 30 days, except where we are required to retain it for legal or legitimate
        business purposes.
      </p>

      <h2>8. Your Rights and Choices</h2>

      <h3>8.1 Account and Data Management</h3>
      <ul>
        <li>
          <strong>Access:</strong> You can view your personal information within the App at any
          time through your profile and session history.
        </li>
        <li>
          <strong>Correction:</strong> You can update your display name and avatar through your
          profile settings.
        </li>
        <li>
          <strong>Deletion:</strong> You can delete individual study sessions. You can also
          request complete account deletion, which will remove all your personal data, sessions,
          timelapse videos, and Room memberships.
        </li>
        <li>
          <strong>Data Portability:</strong> You may request a copy of your personal data by
          contacting us at the email address listed below.
        </li>
      </ul>

      <h3>8.2 Camera Permissions</h3>
      <p>
        You can grant or revoke camera permissions at any time through your device&apos;s system
        settings. The camera is only used during active study sessions. Revoking camera permission
        will prevent you from recording new study sessions but will not affect your ability to
        view Rooms or interact with others&apos; sessions.
      </p>

      <h3>8.3 Push Notifications</h3>
      <p>
        You can enable or disable push notifications at any time through your device&apos;s system
        settings or within the App.
      </p>

      <h3>8.4 Account Deletion</h3>
      <p>
        You can request deletion of your account and all associated data by contacting us at the
        email address below or through the App&apos;s settings. Upon receiving a verified deletion
        request, we will delete your account and personal data within 30 days.
      </p>

      <h2>9. Rights for Users in Specific Jurisdictions</h2>

      <h3>9.1 European Economic Area (EEA) / United Kingdom — GDPR</h3>
      <p>
        If you are located in the EEA or UK, you have additional rights under the General Data
        Protection Regulation (GDPR): Legal Basis for Processing; Right to Access; Right to
        Rectification; Right to Erasure; Right to Restrict Processing; Right to Object; Right to
        Data Portability. To exercise any of these rights, please contact us at the email address
        below. We will respond within 30 days.
      </p>

      <h3>9.2 California — CCPA/CPRA</h3>
      <p>
        If you are a California resident, the California Consumer Privacy Act (CCPA) and California
        Privacy Rights Act (CPRA) provide you with additional rights: Right to Know; Right to
        Delete; Right to Opt-Out of Sale (we do not sell your personal information); Right to
        Non-Discrimination. To exercise these rights, contact us at the email address below.
      </p>

      <h2>10. Children&apos;s Privacy</h2>
      <p>
        Study Room is not intended for children under the age of 13 (or the applicable age of
        digital consent in your jurisdiction). We do not knowingly collect personal information
        from children under 13. If we become aware that we have collected personal information
        from a child under 13 without parental consent, we will take steps to delete that
        information promptly.
      </p>
      <p>
        If you are a parent or guardian and you believe your child has provided us with personal
        information, please contact us at the email address below so that we can take appropriate
        action.
      </p>

      <h2>11. Third-Party Links and Services</h2>
      <p>
        The App may contain links to third-party websites or services that are not operated by us.
        This Privacy Policy does not apply to third-party services. We recommend reviewing the
        privacy policies of any third-party services you access.
      </p>

      <h2>12. International Data Transfers</h2>
      <p>
        Your information may be transferred to and processed in countries other than your country
        of residence. These countries may have data protection laws that are different from the
        laws of your country. By using the App, you consent to the transfer of your information
        to these countries. We take appropriate safeguards to ensure that your personal
        information remains protected in accordance with this Privacy Policy.
      </p>

      <h2>13. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any material
        changes by updating the &quot;Last Updated&quot; date at the top of this Privacy Policy
        and sending a push notification or in-app notice for significant changes. Your continued
        use of the App after such modifications constitutes your acknowledgment of the modified
        Privacy Policy and your agreement to abide by it.
      </p>

      <h2>14. Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy Policy or our
        data practices, please contact us at:
      </p>
      <p>
        <strong>Study Room</strong>
        <br />
        Email: <a href="mailto:studyroomdevs@gmail.com">studyroomdevs@gmail.com</a>
      </p>
      <p className="text-brand-text-muted text-sm mt-8">
        This Privacy Policy is intended to comply with the Apple App Store Review Guidelines
        (Section 5.1 — Privacy), Google Play Developer Policy, the General Data Protection
        Regulation (GDPR), the California Consumer Privacy Act (CCPA/CPRA), and other applicable
        privacy laws and regulations.
      </p>
    </LegalLayout>
  );
}
