import { useEffect, useRef } from 'react';

const HowItWorks = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    [contentRef, timelineRef, demoRef, resultsRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [contentRef, timelineRef, demoRef, resultsRef].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-b from-black via-[#001a33] to-[#002244] py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-full h-full bg-[linear-gradient(rgba(0,102,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,255,0.03)_1px,transparent_1px)] bg-[length:100px_100px] animate-[gridMove_30s_linear_infinite]"
        ></div>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00ccff] rounded-full opacity-60 animate-[particleFloat_15s_ease-in-out_infinite]"
            style={{
              left: `${[20, 40, 60, 80, 90][i]}%`,
              top: `${[80, 40, 70, 20, 60][i]}%`,
              animationDelay: `${i + 1}s`,
              animationDuration: `${[20, 18, 22, 16, 19][i]}s`,
            }}
          ></div>
        ))}
        <div
          className="absolute w-[400px] h-[400px] bg-gradient-to-br from-[#0066ff] to-[#00ff88] rounded-full blur-[80px] opacity-30 animate-[orbFloat_10s_ease-in-out_infinite] -top-50 -left-50"
        ></div>
        <div
          className="absolute w-[300px] h-[300px] bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d] rounded-full blur-[80px] opacity-30 animate-[orbFloat_10s_ease-in-out_infinite] -bottom-40 -right-40"
          style={{ animationDelay: '3s' }}
        ></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-5">
        {/* Header */}
        <div className="text-center mb-20 animate-[hiwFadeInDown_0.8s_ease-out]">
          <div className="inline-flex items-center gap-2.5 bg-[#0066ff]/10 backdrop-blur-lg border border-[#0066ff]/20 rounded-full py-3 px-7 mb-7 relative overflow-hidden">
            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[#0066ff]/20 to-transparent animate-[badgeShine_3s_infinite]"></div>
            <div className="w-6 h-6 bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded-full flex items-center justify-center text-sm font-bold text-white animate-[iconPulse_2s_ease-in-out_infinite]">
              ⚡
            </div>
            <span className="text-[#00ccff] text-sm font-semibold uppercase tracking-wider">
              Easy 5-Step Setup
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
            <span
              className="bg-gradient-to-br from-[#0066ff] via-[#00ccff] via-[#00ff88] via-[#ffd93d] to-[#ff6b6b] bg-clip-text text-transparent bg-[length:200%_auto] animate-[textShimmer_3s_linear_infinite]"
            >
              Easy 5-Step process
            </span>{' '}
            to start
          </h2>
          <p className="text-lg sm:text-xl text-white/70 font-normal max-w-2xl mx-auto leading-relaxed">
            Let AI take calls, schedule appointments, follow-ups, calls, qualify new leads, and
            reactivate sleeping leads 24/7/365 days on autopilot.
          </p>
        </div>
        {/* Process Timeline */}
        <div
          ref={timelineRef}
          className="relative flex flex-col lg:flex-row justify-between items-start gap-5 lg:gap-0 px-0 lg:px-10 mb-20"
        >
          <div className="absolute top-[50px] left-[12%] right-[12%] h-0.5 bg-white/10 z-[1] lg:block hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#0066ff] via-[#00ccff] to-[#00ff88] w-0 animate-[progressFill_4s_ease-out_0.5s_forwards] shadow-[0_0_30px_rgba(0,204,255,0.6)]"
            ></div>
          </div>
          <div className="absolute top-[50px] left-1/2 w-0.5 h-[calc(100%-100px)] bg-white/10 z-[1] block lg:hidden transform -translate-x-1/2">
            <div
              className="absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-[#0066ff] via-[#00ccff] to-[#00ff88] animate-[progressFillVertical_4s_ease-out_0.5s_forwards] shadow-[0_0_30px_rgba(0,204,255,0.6)]"
            ></div>
          </div>
          {[
            { icon: '💳', title: 'Select price plan', desc: 'Choose the perfect pricing tier for your business needs' },
            { icon: '🚀', title: 'Activate your CRM platform', desc: 'Instant access to your complete CRM management system' },
            { icon: '🤖', title: 'Configure AI Agents', desc: 'Setup and customize your AI voice agents in minutes' },
            { icon: '📈', title: 'Deploy proven system', desc: 'Launch your AI system with tested workflows and scripts' },
            { icon: '💰', title: 'Automate & scale business', desc: 'Let AI handle operations while you focus on growth' },
          ].map((step, index) => (
            <div
              key={index}
              className="flex-1 relative z-[2] text-center animate-[stepFadeIn_0.6s_ease-out_backwards] cursor-pointer hover:-translate-y-2.5 transition-transform duration-300"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="group w-[100px] h-[100px] mx-auto mb-6 bg-gradient-to-br from-black to-[#001a33] border-4 border-[#0066ff]/20 rounded-full flex items-center justify-center text-3xl font-black text-[#00ccff] relative transition-all duration-400 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:scale-110 hover:border-transparent hover:shadow-[0_20px_40px_rgba(0,102,255,0.3)]">
                {index + 1}
                <div className="absolute inset-[-5px] rounded-full bg-gradient-to-br from-[#0066ff] via-[#00ccff] to-[#00ff88] opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor' }}></div>
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded-full flex items-center justify-center text-xl shadow-[0_5px_15px_rgba(0,102,255,0.4)]">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 min-h-[60px] flex items-center justify-center px-2.5 leading-tight">
                {step.title}
              </h3>
              <p className="text-base text-white/60 leading-relaxed max-w-[200px] mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
        {/* Results Section */}
        <div
          ref={resultsRef}
          className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 sm:p-16 mt-20 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] animate-[resultsFadeIn_0.8s_ease-out_2.5s_backwards]"
        >
          <div className="absolute inset-[-2px] bg-gradient-to-br from-[#0066ff] via-[#00ccff] via-[#00ff88] via-[#ffd93d] to-[#ff6b6b] rounded-3xl opacity-30 animate-[borderRotate_8s_linear_infinite] bg-[length:300%_300%] z-[-1]"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Results Text */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 leading-tight">
                <span
                  className="bg-gradient-to-br from-[#0066ff] to-white bg-clip-text text-transparent bg-[length:200%_auto] animate-[revenueTextLoop_3s_linear_infinite]"
                >
                  Drive sales 3x, reduce time and costs by 60-300+%
                </span>{' '}
                with{' '}
                <span
                  className="bg-gradient-to-br from-[#0066ff] via-[#00ccff] via-[#00ff88] via-[#ffd93d] to-[#ff6b6b] bg-clip-text text-transparent bg-[length:200%_auto] animate-[textShimmer_3s_linear_infinite]"
                >
                  AI automation that works 24/7
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-12">
                Let AI take calls, schedule appointments, follow-ups, calls and qualify new leads,
                reactivate old, sleeping leads 24/7/365 days on autopilot
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: '📞', value: '24/7', desc: 'AI Calling' },
                  { icon: '📈', value: '3x', desc: 'Sales Growth' },
                  { icon: '⏰', value: '300%+', desc: 'Cost Reduction' },
                  { icon: '💰', value: '60%+', desc: 'Time Saved' },
                ].map((stat) => (
                  <div
                    key={stat.desc}
                    className="group relative bg-white/5 backdrop-blur-lg border border-[#0066ff]/20 rounded-5xl p-6 text-center hover:-translate-y-1 hover:border-[#00ccff]/40 hover:shadow-[0_15px_30px_rgba(0,102,255,0.2)] transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[#00ccff]/10 to-transparent group-hover:left-[100%] transition-[left] duration-500"></div>
                    <div className="w-[50px] h-[50px] mx-auto mb-4 bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded-full flex items-center justify-center text-2xl animate-[statIconPulse_2s_ease-in-out_infinite]">
                      {stat.icon}
                    </div>
                    <div className="text-2xl sm:text-3xl font-black bg-gradient-to-br from-white to-[#00ccff] bg-clip-text text-transparent mb-2 leading-none animate-[statGradientLoop_3s_linear_infinite]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/70 font-medium uppercase tracking-wider">
                      {stat.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Results Image */}
            <div className="relative">
              <div className="absolute -top-[20%] -left-[20%] w-[140%] h-[140%] bg-[radial-gradient(circle,rgba(0,102,255,0.2)_0%,transparent_70%)] animate-[imageGlowRotate_12s_linear_infinite] z-[-1]"></div>
              <div className="relative bg-gradient-to-br from-[#0066ff] to-[#00ff88] rounded-6xl p-1 shadow-[0_25px_50px_rgba(0,102,255,0.3)]">
                <div className="bg-black rounded-5xl overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/msgsndr/PwZCE4paYkzqicpqJecc/media/6893670265ff15a9d9f0dead.png"
                    alt="AI Results Dashboard"
                    className="w-full h-auto rounded-5xl hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(100px, 100px);
          }
        }
        @keyframes particleFloat {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10%,
          90% {
            opacity: 0.6;
          }
          50% {
            transform: translateY(-100px) translateX(50px);
          }
        }
        @keyframes orbFloat {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes badgeShine {
          to {
            left: 100%;
          }
        }
        @keyframes iconPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        @keyframes textShimmer {
          to {
            background-position: 200% center;
          }
        }
        @keyframes progressFill {
          to {
            width: 100%;
          }
        }
        @keyframes progressFillVertical {
          to {
            height: 100%;
          }
        }
        @keyframes stepFadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes borderRotate {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes resultsFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(40px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes revenueTextLoop {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        @keyframes statGradientLoop {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        @keyframes statIconPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        @keyframes imageGlowRotate {
          to {
            transform: rotate(360deg);
          }
        }
        @media (max-width: 1024px) {
          .demo-content {
            gap: 50px;
          }
          .visual-demo {
            padding: 60px 40px;
          }
          .results-content {
            gap: 50px;
          }
          .results-stats {
            gap: 24px;
          }
        }
        @media (max-width: 768px) {
          .hiw-section {
            padding: 60px 16px;
          }
          .hiw-header {
            margin-bottom: 50px;
          }
          .hiw-title {
            margin-bottom: 16px;
          }
          .step-number {
            width: 80px;
            height: 80px;
            font-size: 28px;
          }
          .step-icon {
            width: 32px;
            height: 32px;
            font-size: 16px;
            top: -10px;
            right: -10px;
          }
          .step-title {
            font-size: 18px;
            min-height: auto;
            margin-bottom: 8px;
          }
          .step-description {
            font-size: 14px;
            max-width: 100%;
          }
          .visual-demo {
            padding: 30px 20px;
            border-radius: 20px;
          }
          .demo-content {
            gap: 30px;
          }
          .stat-item {
            min-width: 80px;
          }
          .hiw-cta-button {
            padding: 20px 40px;
            font-size: 16px;
            max-width: 320px;
          }
          .demo-mockup {
            border-radius: 16px;
            min-height: 320px;
          }
          .mockup-content {
            padding: 16px;
          }
          .results-image-wrapper {
            min-height: 200px;
            margin: 12px 0;
          }
          .revenue-growth {
            font-size: 14px;
          }
          .results-section {
            padding: 40px 24px;
            margin-top: 60px;
          }
          .results-stats {
            gap: 20px;
          }
          .stat-box {
            padding: 20px;
          }
          .stat-icon {
            width: 40px;
            height: 40px;
            font-size: 20px;
          }
          .hiw-grid,
          .particle,
          .hiw-orb {
            animation: none;
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;