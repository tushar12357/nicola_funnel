import React from 'react';

const successStats = [
  { number: '4.9★', label: 'User Rating' },
  { number: '2,847+', label: 'Happy Users' },
  { number: '24/7', label: 'Support' },
];

const RiskFreeSection: React.FC = () => {
  return (
    <section className="relative py-32 px-5 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a] overflow-hidden w-screen text-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,255,136,0.1)_0%,rgba(0,204,102,0.1)_25%,rgba(0,153,76,0.1)_50%,transparent_75%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-shieldPulse"></div>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.75 h-0.75 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-full animate-trustFloat"
            style={{
              top: `${[15, 85, 25, 75][i]}%`,
              left: `${[20, 30, 80, 15][i]}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 animate-headerFadeIn">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-wider opacity-90">
            Risk Free / Money Back
          </h2>
        </div>

        {/* Shield Icon */}
        <div className="mb-10 animate-shieldFadeIn">
          <div className="w-44 h-44 md:w-48 md:h-48 mx-auto bg-gradient-to-br from-[#1a1a2e] to-[#2a2a3e] border-4 border-transparent rounded-full flex items-center justify-center text-6xl md:text-7xl relative shadow-[0_25px_60px_rgba(0,255,136,0.3),0_0_40px_rgba(0,255,136,0.2)] animate-shieldRotate">
            🛡️
            <div className="absolute inset-[-8px] bg-gradient-to-br from-[#00ff88] via-[#00cc66] to-[#66ffaa] rounded-full animate-borderRotate [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude]"></div>
          </div>
        </div>

        {/* Main Headline */}
        <h3 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight animate-headlineSlideIn">
          Test <span className="bg-gradient-to-br from-[#00ff88] via-[#00ccff] to-[#44ff88] bg-clip-text text-transparent bg-[length:200%_auto] animate-greenShimmer">BestCallerAI</span> 3 days risk free
        </h3>

        {/* Pricing Info */}
        <p className="text-xl md:text-2xl text-white/90 font-semibold mb-12 animate-pricingFadeIn">
          Just pay for used phone minutes <span className="text-[#00ff88] font-black text-[1.1em]">USD 0.12 per minute</span>
        </p>

        {/* CTA Button */}
        <a
          href="https://calendly.com/bestcallerai-support/30min?back=1&month=2025-07"
          className="inline-flex items-center gap-3 bg-gradient-to-br from-[#00ff88] to-[#00cc66] text-black text-xl md:text-2xl font-black py-7 px-16 rounded-full transition-all duration-300 shadow-[0_20px_50px_rgba(0,255,136,0.4),0_0_30px_rgba(0,255,136,0.3)] uppercase tracking-wide relative overflow-hidden border-2 border-transparent hover:-translate-y-1.5 hover:scale-105 hover:shadow-[0_30px_70px_rgba(0,255,136,0.6),0_0_50px_rgba(0,255,136,0.8)] hover:bg-gradient-to-br hover:from-[#00ff88] hover:to-[#66ffaa] hover:border-white/30 animate-buttonFadeIn"
        >
          <span className="relative z-10">Free Trial</span>
          <span className="relative z-10 text-2xl md:text-3xl animate-iconBounce">🚀</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-greenShineLoop"></div>
          <div className="absolute inset-[-3px] bg-gradient-to-br from-[#00ff88] via-[#00ccff] to-[#66ffaa] rounded-full opacity-0 hover:opacity-100 animate-buttonGlow z-[-1]"></div>
        </a>

        {/* Risk Free Notice */}
        <div className="mt-10 p-7 md:p-8 bg-[rgba(0,255,136,0.05)] border border-[rgba(0,255,136,0.2)] rounded-2xl animate-noticeFadeIn">
          <p className="text-base md:text-lg text-white/80 leading-relaxed">
            <span className="text-[#00ff88] font-bold">100% Risk-Free Guarantee</span> • Cancel anytime during your 3-day trial • 
            <span className="text-[#00ff88] font-bold">Full money-back guarantee</span> • No setup fees • No hidden charges
          </p>
        </div>

        {/* Success Stats */}
        <div className="mt-12 flex justify-center items-center gap-10 flex-wrap animate-statsFadeIn">
          {successStats.map((stat, index) => (
            <div key={index} className="text-center">
              <span className="block text-2xl md:text-3xl font-black text-[#00ff88]">{stat.number}</span>
              <span className="text-sm text-white/60 uppercase tracking-wide mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RiskFreeSection;