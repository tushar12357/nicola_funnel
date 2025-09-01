import React, { useState } from 'react';

const faqData = [
  {
    question: 'Do I need technical skills or AI experience?',
    answer: (
      <>
        No technical skills required! Our platform handles all the complex AI technology. You focus on signing clients using our proven templates and scripts. Everything is point-and-click simple.<br /><br />
        However we understand that set-up, integration, testing, management and optimisation is too time consuming for you. No worries, <strong className="text-[#00ff88] font-bold">let us handle EVERYTHING FOR YOU</strong>, simply choose our <strong className="text-[#00ff88] font-bold">ALL-DONE-FOR-YOU price plan option</strong>. If you want to change your price plan to 'self-management', you can do that later at any time.
      </>
    ),
  },
  {
    question: 'What if I need help or get stuck?',
    answer: (
      <>
        No worries, you can reach out to our tech and client support via email: <a href="mailto:support@bestcallerai.com" className="text-[#00ff88] font-semibold hover:text-[#66ffaa] hover:underline">support@bestcallerai.com</a> and we answer within a couple of minutes or latest within 24 hours.
      </>
    ),
  },
  {
    question: 'What ongoing costs will I have?',
    answer: (
      <>
        There is the monthly or annual subscription based on your selected price plan and AI calling costs average <strong className="text-[#00ff88] font-bold">USD 0.12/minute</strong>. No hidden fees or surprise charges.
      </>
    ),
  },
  {
    question: 'How can I cancel?',
    answer: (
      <>
        You can cancel your subscription any time by sending us an email to <a href="mailto:support@bestcallerai.com" className="text-[#00ff88] font-semibold hover:text-[#66ffaa] hover:underline">support@bestcallerai.com</a>
      </>
    ),
  },
  {
    question: 'Is there a free trial?',
    answer: (
      <>
        Yes, you can test the system <strong className="text-[#00ff88] font-bold">3 days risk-free</strong>. You will get charged for the used phone minutes only.
      </>
    ),
  },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-5 bg-gradient-to-b from-black via-[#001a33] to-black overflow-hidden w-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_25%_25%,rgba(0,255,136,0.1)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(0,204,102,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-gridDrift"></div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-faqFadeIn">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">Common Questions Answered</h2>
          <p className="text-lg md:text-xl text-white/80">
            Everything you need to know about <span className="text-[#00ff88] font-bold">technical skills or AI experience</span>
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 mb-12">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`bg-[rgba(0,255,136,0.03)] backdrop-blur-xl border border-[rgba(0,255,136,0.15)] rounded-2xl overflow-hidden transition-all duration-300 animate-faqItemIn ${activeIndex === index ? 'border-[rgba(0,255,136,0.4)] bg-[rgba(0,255,136,0.05)] shadow-[0_10px_30px_rgba(0,255,136,0.2)]' : ''} hover:border-[rgba(0,255,136,0.3)] hover:bg-[rgba(0,255,136,0.04)]`}
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <div
                className="flex items-center justify-between gap-5 p-6 cursor-pointer hover:bg-[rgba(0,255,136,0.02)]"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-base md:text-lg font-semibold text-white flex-1">{faq.question}</span>
                <div
                  className={`w-8 h-8 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-full flex items-center justify-center text-black text-xl font-light transition-all duration-300 shadow-[0_4px_15px_rgba(0,255,136,0.3)] ${activeIndex === index ? 'rotate-45 bg-gradient-to-br from-[#66ffaa] to-[#00ff88]' : ''}`}
                >
                  +
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-[600px]' : 'max-h-0'}`}
              >
                <p className="px-6 pb-6 text-sm md:text-base text-white/80 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center p-10 bg-[rgba(0,255,136,0.05)] border border-[rgba(0,255,136,0.2)] rounded-3xl animate-ctaFadeIn">
          <p className="text-lg md:text-xl text-white font-semibold mb-8">Ready to start your risk-free trial?</p>
          <a
            href="https://calendly.com/bestcallerai-support/30min?back=1&month=2025-07"
            className="inline-flex items-center gap-2.5 bg-gradient-to-br from-[#00ff88] to-[#00cc66] text-black text-lg md:text-xl font-extrabold py-5 px-12 rounded-full transition-all duration-300 shadow-[0_15px_40px_rgba(0,255,136,0.4),0_0_25px_rgba(0,255,136,0.3)] uppercase tracking-wide relative overflow-hidden border-2 border-transparent hover:-translate-y-1.5 hover:scale-105 hover:shadow-[0_25px_60px_rgba(0,255,136,0.6),0_0_40px_rgba(0,255,136,0.8)] hover:bg-gradient-to-br hover:from-[#00ff88] hover:to-[#66ffaa] hover:border-white/30"
          >
            <span className="relative z-10">Free Trial</span>
            <span className="relative z-10 text-xl md:text-2xl animate-iconBounce">🚀</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-greenShine"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;