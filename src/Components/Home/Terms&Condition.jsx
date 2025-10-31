import React from "react";
import { FaPrint } from "react-icons/fa";

export default function TermsAndConditions() {
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
          Pixla Kalam Foundation – Terms and Conditions
        </h1>
        <div className="w-64 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>
        <p className="text-sm text-gray-600">
    
          <strong>Operated by:</strong> Pixla Kalam Foundation (under
          Tripalive.Me Technology Pvt Ltd) <br />
          <strong>Registered Office:</strong> Bengaluru, Karnataka, India
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-8 md:space-y-10">
        {[
          {
            title: "1. Introduction",
            content: (
              <>
                Welcome to <strong>Pixla Kalam Foundation</strong>, a CSR and
                non-profit initiative under Pixla Group, operated by
                Tripalive.Me Technology Pvt Ltd. By accessing our website,
                making donations, volunteering, or participating in our
                campaigns, you agree to be bound by these Terms and Conditions.
                Please read them carefully before engaging with any of our
                services or initiatives.
              </>
            ),
          },
          {
            title: "2. Our Mission",
            content: (
              <>
                Pixla Kalam Foundation is established with a vision to
                contribute towards a sustainable and empowered India through
                environmental and social initiatives. Our objectives include:
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>🌳 Tree plantation drives and seed ball campaigns</li>
                  <li>👩‍💻 Free training programs for women empowerment</li>
                  <li>🌾 Sustainable agriculture and environmental restoration</li>
                  <li>🎓 Digital literacy and educational support</li>
                  <li>💚 CSR and community development partnerships</li>
                </ul>
              </>
            ),
          },
          {
            title: "3. Pixla Promises Initiative",
            content: (
              <>
                Pixla Kalam Foundation upholds the{" "}
                <strong>Pixla Promises</strong>, where every user interaction
                within the Pixla ecosystem contributes to environmental growth:
                <ul className="list-decimal list-inside mt-3 space-y-1">
                  <li>
                    <strong>Pixla Products Promise</strong> – Every order placed
                    on Pixla plants a tree 🌱
                  </li>
                  <li>
                    <strong>Pixla Gold Green Promise</strong> – Every gram of
                    gold purchased plants a tree 🌳
                  </li>
                  <li>
                    <strong>Pixla App Install Promise</strong> – Every app
                    install launches a seed ball 🌰
                  </li>
                  <li>
                    <strong>Pixla Subscription Promise</strong> – Every app
                    subscription plants a tree 🌿
                  </li>
                  <li>
                    <strong>Pixla Academy Green Promise</strong> – Every learner
                    plants a tree 🌲
                  </li>
                </ul>
                <p className="mt-3">
                  These actions are part of our collective mission to plant{" "}
                  <strong>1 crore trees</strong>, empower{" "}
                  <strong>1 crore learners</strong>, and create a greener India.
                </p>
              </>
            ),
          },
          {
            title: "4. Donations and Fund Usage",
            content: (
              <ul className="list-disc list-inside space-y-1">
                <li>
                  All donations received are used exclusively for CSR,
                  environmental, educational, and empowerment programs.
                </li>
                <li>Donations made to Pixla Kalam Foundation are non-refundable.</li>
                <li>
                  Donors will receive acknowledgment receipts for all valid
                  contributions.
                </li>
                <li>
                  Funds are managed transparently under financial and CSR
                  guidelines, with regular audits to ensure compliance.
                </li>
              </ul>
            ),
          },
          {
            title: "5. Women Empowerment and Training",
            content: (
              <>
                Pixla Kalam Foundation conducts free skill development, digital
                literacy, and entrepreneurship programs for women across India.
                All participants are required to follow training guidelines,
                attendance policies, and conduct standards defined by the
                Foundation.
              </>
            ),
          },
          {
            title: "6. Volunteering and Participation",
            content: (
              <>
                Volunteers agree to act responsibly and ethically when
                representing Pixla Kalam Foundation. We reserve the right to
                deny or terminate volunteer participation in case of misconduct
                or misuse of foundation resources. Certificates or
                acknowledgments will be issued only upon successful completion
                of volunteering activities.
              </>
            ),
          },
          {
            title: "7. Intellectual Property Rights",
            content: (
              <>
                All content on the website—including text, logos, graphics,
                campaigns, and media—is the property of Pixla Kalam Foundation
                and Tripalive.Me Technology Pvt Ltd. No part of this content may
                be reproduced or reused without written permission.
              </>
            ),
          },
          {
            title: "8. Limitation of Liability",
            content: (
              <>
                Pixla Kalam Foundation will not be held responsible for any
                indirect, incidental, or consequential losses resulting from
                website usage, participation, or donations. We make no
                warranties regarding uninterrupted access or the accuracy of
                information provided on our website.
              </>
            ),
          },
          {
            title: "9. Third-Party Links",
            content: (
              <>
                Our website may include links to third-party sites for
                convenience or awareness. We do not hold responsibility for the
                content or practices of these external websites.
              </>
            ),
          },
          {
            title: "10. CSR Partnerships",
            content: (
              <>
                Pixla Kalam Foundation works with corporate and institutional
                partners to implement CSR initiatives under Section 8
                provisions. All collaborations are governed by mutual agreements
                and compliance with Indian CSR laws.
              </>
            ),
          },
          {
            title: "11. Changes to Terms",
            content: (
              <>
                Pixla Kalam Foundation reserves the right to amend, update, or
                modify these Terms and Conditions at any time. Updates will be
                published on our official website and will take effect
                immediately upon posting.
              </>
            ),
          },
          {
            title: "12. Governing Law",
            content: (
              <>
                These Terms and Conditions are governed by the laws of India.
                Any disputes arising under these Terms shall be subject to the
                exclusive jurisdiction of the courts in Bengaluru, Karnataka.
              </>
            ),
          },
          {
            title: "13. Contact Information",
            content: (
              <>
                For any questions or clarifications regarding these Terms,
                please contact:
                <br /> 📧 support@pixlakalamfoundation.com
                <br /> 🌐 www.pixlakalamfoundation.com
                <br /> 🏢 Pixla Kalam Foundation, Bengaluru, India
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
          © 2025 Pixla Kalam Foundation. All Rights Reserved.
          <br />
          Operated by Tripalive.Me Technology Pvt Ltd, Bengaluru, India.
        </div>
      </div>
    </section>
  );
}
