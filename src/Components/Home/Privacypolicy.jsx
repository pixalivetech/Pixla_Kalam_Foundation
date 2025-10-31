import React from "react";
import { FaPrint } from "react-icons/fa";

export default function PrivacyPolicy() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="bg-[#f9fafb] text-gray-800 px-6 md:px-20 py-16 font-sans leading-relaxed relative">
      {/* Print Button */}
      <div className="flex justify-end mb-8">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition text-sm md:text-base shadow-md print:hidden"
        >
          <FaPrint className="text-sm" />
          Print this Page
        </button>
      </div>

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Pixla Kalam Foundation – Privacy Policy
        </h1>
        <div className="w-64 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>
        <p className="text-sm text-gray-600">
    
          <strong>Operated by:</strong> Pixla Kalam Foundation (under Tripalive.Me Technology Pvt Ltd) <br />
          <strong>Registered Office:</strong> Bengaluru, Karnataka, India
        </p>
      </div>

      {/* Content */}
      <div className="space-y-8 md:space-y-10">
        {[
          {
            title: "1. Introduction",
            content: (
              <>
                At <strong>Pixla Kalam Foundation</strong>, your privacy is
                important to us. This Privacy Policy explains how we collect,
                use, and safeguard your personal information when you visit our
                website, make donations, volunteer, or participate in our
                initiatives. By using our website or providing your
                information, you consent to the practices described in this
                policy.
              </>
            ),
          },
          {
            title: "2. About Us",
            content: (
              <>
                Pixla Kalam Foundation is a CSR and non-profit initiative under
                the Pixla Group, operated by Tripalive.Me Technology Pvt Ltd.
                We are committed to promoting tree plantation, seed ball
                campaigns, women empowerment, free training programs, and
                sustainable community development projects across India.
              </>
            ),
          },
          {
            title: "3. Information We Collect",
            content: (
              <>
                We collect only the information necessary to operate efficiently
                and provide meaningful impact:
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>Personal Information: Name, email address, phone number, postal address.</li>
                  <li>Donation Information: Transaction details and payment confirmation.</li>
                  <li>Volunteer Data: Skills, areas of interest, and participation details.</li>
                  <li>Training Data: Enrollment info for Pixla Academy or empowerment programs.</li>
                  <li>Website Usage Data: Browser type, IP, device info, and analytics.</li>
                </ul>
              </>
            ),
          },
          {
            title: "4. How We Use Your Information",
            content: (
              <ul className="list-disc list-inside space-y-1">
                <li>Processing and acknowledging donations.</li>
                <li>Sharing updates about ongoing projects and CSR activities.</li>
                <li>Issuing certificates or participation acknowledgments.</li>
                <li>Managing volunteer and training program participation.</li>
                <li>Ensuring compliance with CSR and legal obligations.</li>
                <li>Improving website experience and campaign effectiveness.</li>
              </ul>
            ),
          },
          {
            title: "5. Data Security",
            content: (
              <>
                We implement strict security measures to protect your personal
                and financial data from unauthorized access, alteration, or
                misuse. All online transactions are processed through secure and
                PCI-DSS-compliant payment gateways.
              </>
            ),
          },
          {
            title: "6. Data Sharing and Disclosure",
            content: (
              <>
                We do not sell, trade, or rent your personal data. Your data may
                only be shared:
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>With authorized CSR partners or NGOs for project execution.</li>
                  <li>With financial institutions for secure transaction processing.</li>
                  <li>When required by law or regulatory authorities.</li>
                </ul>
              </>
            ),
          },
          {
            title: "7. Cookies and Website Analytics",
            content: (
              <>
                Our website may use cookies and analytics tools to enhance your
                browsing experience. Cookies do not store personally
                identifiable information and can be disabled through browser
                settings.
              </>
            ),
          },
          {
            title: "8. Your Rights",
            content: (
              <>
                You have the right to:
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>Access, review, or update your personal data.</li>
                  <li>Request deletion of your data when no longer necessary.</li>
                  <li>Withdraw consent for communication or participation.</li>
                </ul>
                For such requests, contact us at{" "}
                <span className="text-green-700 font-medium">
                  support@pixlakalamfoundation.com
                </span>
                .
              </>
            ),
          },
          {
            title: "9. Third-Party Links",
            content: (
              <>
                Our website may include links to other websites for donations,
                CSR partners, or campaigns. We are not responsible for their
                privacy practices or content. Please review their respective
                privacy policies before sharing personal information.
              </>
            ),
          },
          {
            title: "10. Retention of Information",
            content: (
              <>
                We retain donor, volunteer, and participant data only as long as
                necessary to fulfill its purpose or as required by law.
              </>
            ),
          },
          {
            title: "11. Updates to This Policy",
            content: (
              <>
                Pixla Kalam Foundation reserves the right to modify or update
                this Privacy Policy. The latest version will always be available
                on our website, and the effective date will be updated
                accordingly.
              </>
            ),
          },
          {
            title: "12. Contact Us",
            content: (
              <>
                For questions, feedback, or data-related requests:
                <br /> 📧 support@pixlakalamfoundation.com
                <br /> 🌐 www.pixlakalamfoundation.com
                <br /> 🏢 Pixla Kalam Foundation, Bengaluru, Karnataka, India
              </>
            ),
          },
        ].map((section, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition p-6 md:p-8"
          >
            <h2 className="font-semibold text-xl text-green-700 mb-3">
              {section.title}
            </h2>
            <div className="text-gray-700">{section.content}</div>
          </div>
        ))}

        {/* Footer */}
        <div className="border-t-2 border-green-700 pt-6 text-center text-sm text-gray-600 mt-10">
          © 2025 Pixla Kalam Foundation. All Rights Reserved. <br />
          Operated by Tripalive.Me Technology Pvt Ltd, Bengaluru, India.
        </div>
      </div>
    </section>
  );
}
