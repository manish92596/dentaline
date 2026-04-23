import { useEffect } from 'react';
import { ArrowLeft, Scale } from 'lucide-react';
import Navbar from '../components/Navbar';

const termsSections = [
  {
    number: '1',
    title: 'Acceptance of Terms',
    paragraphs: [
      'By accessing or using TechLadder AI services, including website, APIs, voice automation systems, and related platforms, you agree to these Terms of Service.',
    ],
  },
  {
    number: '2',
    title: 'Services',
    paragraphs: [
      'TechLadder AI provides AI-powered voice agents, telephony infrastructure, analytics dashboards, APIs, and automation services.',
    ],
  },
  {
    number: '3',
    title: 'Customer Responsibilities',
    paragraphs: [
      'Customers must ensure lawful data collection, obtain required call recording consent, and comply with applicable Indian laws including the Digital Personal Data Protection Act, 2023 and IT Act, 2000.',
    ],
  },
  {
    number: '4',
    title: 'Data Processing',
    paragraphs: [
      'When using our Services, customers act as Data Fiduciaries and TechLadder AI acts as Data Processor.',
    ],
  },
  {
    number: '5',
    title: 'Prohibited Use',
    paragraphs: [
      'The Services may not be used for unlawful robocalling, harassment, impersonation, fraud, political misinformation, or illegal surveillance.',
    ],
  },
  {
    number: '6',
    title: 'Fees & Payment',
    paragraphs: [
      'Fees are defined in applicable order forms or contracts. Non-payment may result in suspension.',
    ],
  },
  {
    number: '7',
    title: 'Intellectual Property',
    paragraphs: [
      'TechLadder AI retains ownership of platform software, AI systems, and infrastructure. Customers retain ownership of their data.',
    ],
  },
  {
    number: '8',
    title: 'Limitation of Liability',
    paragraphs: [
      'To the maximum extent permitted by law, TechLadder AI shall not be liable for indirect damages or losses exceeding the fees paid in the preceding 12 months.',
    ],
  },
  {
    number: '9',
    title: 'Indemnification',
    paragraphs: [
      'Customers agree to indemnify TechLadder AI against claims arising from misuse of services or regulatory non-compliance.',
    ],
  },
  {
    number: '10',
    title: 'Termination',
    paragraphs: [
      'Either party may terminate as per contractual terms. Upon termination, access will be revoked and data handled per agreement.',
    ],
  },
  {
    number: '11',
    title: 'Governing Law',
    paragraphs: [
      'These Terms are governed by the laws of India. Jurisdiction shall lie with courts in India.',
    ],
  },
];

const TermsOfServicePage = () => {
  useEffect(() => {
    document.title = 'Terms of Service | TechLadder AI';
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
                <Scale className="h-9 w-9 text-dental-blue" />
              </div>
              <p className="text-sm font-semibold tracking-[0.35em] text-dental-blue uppercase">
                TechLadder.AI
              </p>
              <h1 className="mt-4 font-serif text-5xl sm:text-6xl md:text-7xl text-navy">
                Terms of Service
              </h1>
              <p className="mt-6 text-xl text-navy/70">
                Effective Date: 11 February 2026
              </p>
            </div>

            <article className="rounded-[2rem] border border-gray-200 bg-white px-6 py-10 shadow-[0_24px_80px_rgba(10,17,40,0.08)] sm:px-8 md:px-12 md:py-14 lg:px-16">
              <div className="space-y-10">
                {termsSections.map((section) => (
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

export default TermsOfServicePage;
