import { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';

const policySections = [
  {
    number: '1',
    title: 'Introduction',
    paragraphs: [
      'TechLadder AI ("TechLadder.ai", "we", "our", "us") respects your privacy and is committed to protecting personal information. This Privacy Policy explains how we collect, use, process, and safeguard information when you access our website and use our AI-powered voice automation services.',
    ],
  },
  {
    number: '2',
    title: 'Information We Collect',
    paragraphs: [
      'We may collect business contact information (such as email address and phone number), voice recordings, transcripts, call metadata, usage data, analytics data, and technical information such as IP address and browser details.',
    ],
  },
  {
    number: '3',
    title: 'Voice & Call Data',
    paragraphs: [
      'When customers deploy AI agents, we may process voice recordings, transcripts, timestamps, sentiment data, and interaction logs. We act as a Data Processor on behalf of enterprise customers who are the Data Fiduciaries.',
    ],
  },
  {
    number: '4',
    title: 'Purpose of Processing',
    paragraphs: [
      'We process data to operate voice AI systems, provide analytics, maintain system reliability, enhance performance, comply with legal requirements, and support enterprise customers.',
    ],
  },
  {
    number: '5',
    title: 'Legal Basis (DPDP Act 2023)',
    paragraphs: [
      'In accordance with the Digital Personal Data Protection Act, 2023, customers deploying our platform act as Data Fiduciaries. TechLadder AI processes data only under lawful instructions and contractual agreements.',
    ],
  },
  {
    number: '6',
    title: 'Data Security',
    paragraphs: [
      'We implement enterprise-grade safeguards including encryption in transit and at rest, access controls, monitoring systems, and infrastructure security controls aligned with industry standards.',
    ],
  },
  {
    number: '7',
    title: 'Data Sharing',
    paragraphs: [
      'We may engage trusted infrastructure providers, telephony partners, and analytics services under strict confidentiality obligations. We do not sell personal data.',
    ],
  },
  {
    number: '8',
    title: 'Data Retention',
    paragraphs: [
      'Data retention is configurable by customers. Upon termination of services, data will be deleted or returned as contractually agreed.',
    ],
  },
  {
    number: '9',
    title: 'Your Rights',
    paragraphs: [
      'Depending on jurisdiction, individuals may have rights to access, correct, or delete personal data. Requests may be directed to info@techladder.ai.',
    ],
  },
  {
    number: '10',
    title: 'Changes to Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. Updates will be reflected with a revised effective date.',
    ],
  },
  {
    number: '11',
    title: 'Contact',
    paragraphs: [
      'For questions, contact: info@techladder.ai',
    ],
  },
];

const PrivacyPolicyPage = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | TechLadder AI';
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-navy">
      <Navbar />

      <main className="pt-24 md:pt-28">
        <section className="relative overflow-hidden px-4 pb-20">
          <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-white via-ivory to-transparent" />
          <div className="absolute top-8 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-dental-blue/10 blur-3xl" />

          <div className="relative mx-auto max-w-5xl">
            <div className="text-center pt-10 pb-14">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[1.75rem] border border-gray-200 bg-white shadow-sm">
                <Shield className="h-9 w-9 text-dental-blue" />
              </div>
              <p className="text-sm font-semibold tracking-[0.35em] text-dental-blue uppercase">
                TechLadder.AI
              </p>
              <h1 className="mt-4 font-serif text-5xl sm:text-6xl md:text-7xl text-navy">
                Privacy Policy
              </h1>
              <p className="mt-6 text-xl text-navy/70">
                Effective Date: 11 February 2026
              </p>
            </div>

            <article className="rounded-[2rem] border border-gray-200 bg-white px-6 py-10 shadow-[0_24px_80px_rgba(10,17,40,0.08)] sm:px-8 md:px-12 md:py-14 lg:px-16">
              <div className="space-y-10">
                {policySections.map((section) => (
                  <section key={section.number} className="border-b border-gray-100 pb-8 last:border-b-0 last:pb-0">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="text-sm font-semibold tracking-[0.35em] text-dental-blue">
                        {section.number}.
                      </span>
                      <h2 className="font-serif text-2xl md:text-3xl text-navy">
                        {section.title}
                      </h2>
                    </div>

                    <div className="mt-5 space-y-4 text-[17px] leading-8 text-navy/75">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>

            <div className="mt-10 pb-6 text-center">
              <a
                href="/#hero"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy/90"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
