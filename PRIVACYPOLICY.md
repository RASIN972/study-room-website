# Privacy Policy for Study Room

**Last Updated:** 03/11/26  
**Effective Date:** 03/11/26

---

## 1. Introduction

Welcome to Study Room ("we," "us," "our," or the "Company"). Study Room is a mobile application that allows users to timelapse themselves studying and share sessions with small accountability groups called "Rooms." This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App") available on iOS and Android platforms.

Please read this Privacy Policy carefully. By accessing or using the App, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access or use the App.

We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.

---

## 2. Information We Collect

### 2.1 Personal Information You Provide

When you create an account and use Study Room, we may collect the following personal information that you voluntarily provide to us:

- **Account Information:** Email address, display name, and profile avatar/photo.
- **Authentication Data:** If you sign in using third-party authentication providers (Google or Apple Sign-In), we receive your name, email address, and profile photo URL as provided by those services. We do not receive or store your passwords from third-party providers.
- **Profile Information:** Display name, profile picture, and any other information you choose to add to your profile.
- **Study Session Data:** Subject labels, session duration, start and end times, and any other information you provide when recording a study session.
- **Room Information:** Room names, descriptions, and membership details for accountability groups you create or join.
- **Reactions and Interactions:** Emoji reactions you leave on other users' sessions, and session view records.

### 2.2 Information Collected Automatically

When you use the App, certain information is collected automatically:

- **Camera Data:** During an active study session, the App uses your device's front-facing (selfie) camera to periodically capture image frames (one frame approximately every 10 seconds). These frames are used exclusively to create a timelapse video of your study session. Camera access is only active during a study session that you explicitly start, and the camera is not accessed at any other time.
- **Device Information:** Device type, operating system version, and unique device identifiers for push notification delivery.
- **Push Notification Tokens:** If you grant permission, we collect your device's push notification token to send you notifications about room activity and session updates.
- **Usage Data:** Timestamps associated with your study sessions, streak information, total study minutes, and app interaction patterns.

### 2.3 Information NOT Collected

- We do not collect precise geolocation data.
- We do not record audio during study sessions.
- We do not access your device's microphone.
- We do not access your contacts, calendar, or other personal data on your device beyond what is described in this policy.
- We do not collect financial or payment information (future subscription features will be handled by third-party payment processors such as Apple's App Store and Google Play, and we will not have access to your payment details).
- We do not use tracking technologies for advertising purposes.

---

## 3. How We Use Your Information

We use the information we collect for the following purposes:

- **To Provide and Maintain the App:** Creating and managing your account, facilitating study sessions, generating timelapse videos, and enabling room-based accountability features.
- **To Enable Social Features:** Allowing you to share timelapse videos with your Rooms, enabling reactions from Room members, and displaying session activity within your accountability groups.
- **To Track Study Progress:** Calculating and displaying your personal study statistics, including total study minutes, current streak, and longest streak.
- **To Send Notifications:** Sending push notifications about room activity, session updates, and other relevant app communications (with your permission).
- **To Improve the App:** Understanding how users interact with the App to improve functionality, user experience, and performance.
- **To Ensure Security:** Protecting against unauthorized access, fraud, and other security threats.
- **To Comply with Legal Obligations:** Responding to legal requests and preventing harm as required by applicable law.

---

## 4. How Your Timelapse Data Works

Understanding how your study timelapse data is handled is important:

- **Frame Capture:** During an active session, image frames are captured from your front camera at regular intervals (approximately every 10 seconds).
- **On-Device Processing:** Frames are stored temporarily on your device and stitched together into a timelapse video entirely on your device. The processing happens locally using on-device video encoding.
- **Upload:** Once you review and approve your timelapse, and choose which Room(s) to share it with, the final video is uploaded to our secure servers.
- **Access Control:** Timelapse videos are not publicly accessible. They are only viewable by members of the Room(s) you choose to share them with. Access is controlled through secure, time-limited signed URLs.
- **Thumbnail Generation:** A thumbnail image is generated from the first frame of your timelapse for preview purposes within your Rooms.
- **Deletion:** Individual frames captured during a session are deleted from your device after the timelapse video is created. You can delete your sessions and associated timelapse data at any time.

---

## 5. How We Share Your Information

We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following limited circumstances:

### 5.1 With Other Users (Within Your Rooms)

- Your display name, avatar, study session information (subject, duration, timelapse), and streak data are visible to members of Rooms you belong to.
- Reactions and session views are visible within the context of shared sessions.
- Your data is only shared with people in your Rooms — Study Room is not a public social media platform. Rooms are small accountability groups (3–25 people) of people who know each other.

### 5.2 With Service Providers

We use the following third-party services to operate the App:

| Service | Purpose | Data Shared |
|---------|---------|--------------|
| Supabase | Backend infrastructure (database, authentication, file storage, real-time features) | Account data, session data, timelapse videos, avatars |
| Expo / EAS | App build and update infrastructure, push notifications | Push notification tokens, device identifiers |
| Apple Sign-In | Authentication (optional) | Authentication tokens (as initiated by you) |
| Google Sign-In | Authentication (optional) | Authentication tokens (as initiated by you) |
| RevenueCat (future) | Subscription management (not yet implemented) | Purchase/subscription status, anonymous user identifiers |

These service providers are contractually obligated to protect your data and may only use it to provide services to us.

### 5.3 For Legal Reasons

We may disclose your information if required to do so by law or in the good faith belief that such action is necessary to:

- Comply with a legal obligation, court order, or legal process.
- Protect and defend our rights or property.
- Prevent or investigate possible wrongdoing in connection with the App.
- Protect the personal safety of users of the App or the public.

### 5.4 Business Transfers

If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice within the App of any change in ownership or uses of your personal information.

---

## 6. Data Storage and Security

### 6.1 Where Your Data Is Stored

Your data is stored on servers managed by Supabase. Supabase uses industry-standard cloud infrastructure providers. Timelapse video files and avatars are stored in Supabase Storage with appropriate access controls.

### 6.2 Security Measures

We implement the following security measures to protect your data:

- **Encryption in Transit:** All data transmitted between the App and our servers is encrypted using TLS/SSL.
- **Secure Authentication:** Authentication tokens are stored securely on your device using platform-native secure storage (Keychain on iOS, encrypted storage on Android) via Expo SecureStore.
- **Row-Level Security (RLS):** Our database enforces row-level security policies, ensuring that users can only access data they are authorized to view (e.g., sessions shared to their Rooms).
- **Signed URLs:** Timelapse videos are not publicly accessible and require time-limited signed URLs for access.
- **Access Controls:** Room content is restricted to verified Room members only.

### 6.3 Security Limitations

While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or method of electronic storage is 100% secure. We cannot guarantee absolute security of your data.

---

## 7. Data Retention

We retain your personal information for as long as your account is active or as needed to provide you with the App's services. Specifically:

- **Account Data:** Retained until you delete your account.
- **Study Sessions and Timelapses:** Retained until you delete them individually or delete your account.
- **Room Data:** Room content is retained as long as the Room exists. If a Room is deleted by its owner, associated session-room links are removed.
- **Reactions and Views:** Retained as long as the associated session exists.

When you delete your account, we will delete or anonymize your personal information within 30 days, except where we are required to retain it for legal or legitimate business purposes.

---

## 8. Your Rights and Choices

### 8.1 Account and Data Management

You have the following rights regarding your data:

- **Access:** You can view your personal information within the App at any time through your profile and session history.
- **Correction:** You can update your display name and avatar through your profile settings.
- **Deletion:** You can delete individual study sessions. You can also request complete account deletion, which will remove all your personal data, sessions, timelapse videos, and Room memberships.
- **Data Portability:** You may request a copy of your personal data by contacting us at the email address listed below.

### 8.2 Camera Permissions

- You can grant or revoke camera permissions at any time through your device's system settings.
- The camera is only used during active study sessions. Revoking camera permission will prevent you from recording new study sessions but will not affect your ability to view Rooms or interact with others' sessions.

### 8.3 Push Notifications

You can enable or disable push notifications at any time through your device's system settings or within the App.

### 8.4 Account Deletion

You can request deletion of your account and all associated data by contacting us at the email address below or through the App's settings. Upon receiving a verified deletion request, we will delete your account and personal data within 30 days.

---

## 9. Rights for Users in Specific Jurisdictions

### 9.1 European Economic Area (EEA) / United Kingdom — GDPR

If you are located in the EEA or UK, you have additional rights under the General Data Protection Regulation (GDPR):

- **Legal Basis for Processing:** We process your data based on (a) your consent (e.g., camera access), (b) performance of a contract (providing the App's services), and (c) legitimate interests (improving the App, security).
- **Right to Access:** You have the right to request copies of your personal data.
- **Right to Rectification:** You have the right to request that we correct inaccurate information.
- **Right to Erasure:** You have the right to request that we delete your personal data.
- **Right to Restrict Processing:** You have the right to request that we restrict the processing of your personal data.
- **Right to Object:** You have the right to object to our processing of your personal data.
- **Right to Data Portability:** You have the right to request that we transfer the data we have collected to another organization or directly to you.

To exercise any of these rights, please contact us at the email address below. We will respond within 30 days.

### 9.2 California — CCPA/CPRA

If you are a California resident, the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) provide you with additional rights:

- **Right to Know:** You have the right to know what personal information we collect, use, disclose, and sell.
- **Right to Delete:** You have the right to request deletion of your personal information.
- **Right to Opt-Out of Sale:** We do not sell your personal information.
- **Right to Non-Discrimination:** We will not discriminate against you for exercising your privacy rights.

To exercise these rights, contact us at the email address below.

---

## 10. Children's Privacy

Study Room is not intended for children under the age of 13 (or the applicable age of digital consent in your jurisdiction). We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13 without parental consent, we will take steps to delete that information promptly.

If you are a parent or guardian and you believe your child has provided us with personal information, please contact us at the email address below so that we can take appropriate action.

---

## 11. Third-Party Links and Services

The App may contain links to third-party websites or services that are not operated by us. This Privacy Policy does not apply to third-party services. We recommend reviewing the privacy policies of any third-party services you access.

---

## 12. International Data Transfers

Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country. By using the App, you consent to the transfer of your information to these countries. We take appropriate safeguards to ensure that your personal information remains protected in accordance with this Privacy Policy.

---

## 13. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any material changes by:

- Updating the "Last Updated" date at the top of this Privacy Policy.
- Sending a push notification or in-app notice for significant changes.

Your continued use of the App after such modifications constitutes your acknowledgment of the modified Privacy Policy and your agreement to abide by it.

---

## 14. Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:

**Study Room**  
Email: studyroomdevs@gmail.com

---

This Privacy Policy is intended to comply with the Apple App Store Review Guidelines (Section 5.1 — Privacy), Google Play Developer Policy, the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA/CPRA), and other applicable privacy laws and regulations.
