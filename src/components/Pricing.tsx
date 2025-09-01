import { useEffect, useRef } from 'react';

const Pricing = () => {
  const gridRef = useRef<HTMLDivElement>(null);

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

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  const plans = [
    {
      name: 'Starter Plan',
      className: 'starter',
      originalPrice: 'USD 497/month',
      currentPrice: 'USD 250',
      savings: 'Save: USD 247/month',
      allDonePrice: 'USD 997/month',
      allDoneDesc: 'includes Starter Plan features + setup of system and campaigns, software, integration, testing, management, optimization, new features',
      features: [
        '3 AI Voice Agents (1 language option)',
        'Basic CRM Dashboard',
        'Basic AI Agent Templates',
        'Basic Tech & Client Support',
        'Basic Integration',
        'Phone Minutes: USD 0.13/minute',
      ],
      ctaLink: 'https://buy.stripe.com/4gM4gB5zCbcReWn9nR3Ru0c',
    },
    {
      name: 'Pro Plan',
      className: 'pro popular',
      popular: true,
      originalPrice: 'USD 997/month',
      currentPrice: 'USD 497',
      savings: 'Save: USD 500/month',
      allDonePrice: 'USD 1999/month',
      allDoneDesc: 'includes Pro Plan features + setup of system and campaigns, software, integration, testing, management, optimization, new features',
      features: [
        '10 AI Voice Agents',
        'Advanced CRM Dashboard',
        'Advanced AI Agent Templates',
        'Priority Tech & Client Support',
        'Advanced Integration',
        '62 AI Natural Voices',
        '200+ Languages',
        'Phone Minutes: USD 0.12/minute',
        'WhatsApp/SMS/Email Integration',
      ],
      ctaLink: 'https://buy.stripe.com/5kQ9AV3ru2GlcOf2Zt3Ru0b',
    },
    {
      name: 'Enterprise Plan',
      className: 'enterprise',
      originalPrice: 'USD 2,500/month',
      currentPrice: 'USD 1999',
      savings: 'Save: USD 501/month',
      allDonePrice: 'USD 5000/month',
      allDoneDesc: 'includes Enterprise solution + setup of system and campaigns, software, omni-channel integration, testing, management, optimization, new features',
      features: [
        'Unlimited AI Voice Agents',
        'Custom Voice Cloning',
        'Enterprise CRM Dashboard',
        'Enterprise AI Agent Templates',
        'Enterprise Features',
        'Priority Tech & Client Support',
        'Enterprise Integration',
        '62 AI Natural Voices',
        '200+ Languages',
        'Phone Minutes: USD 0.11/minute',
        'WhatsApp/SMS/Email Integration',
      ],
      ctaLink: 'https://buy.stripe.com/5kQfZjd24ft73dFbvZ3Ru0a',
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-black via-[#001a33] to-black py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-0 animate-[twinkle_3s_ease-in-out_infinite]"
            style={{
              top: `${[10, 20, 30, 40, 50, 60, 70, 80, 90][i]}%`,
              left: `${[20, 40, 60, 80, 30, 50, 70, 40, 60][i]}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          ></div>
        ))}
        <div
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-[#0066ff] to-[#00ff88] rounded-full blur-[100px] opacity-40 animate-[orbDrift_20s_ease-in-out_infinite] -top-64 -left-64"
        ></div>
        <div
          className="absolute w-[400px] h-[400px] bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d] rounded-full blur-[100px] opacity-40 animate-[orbDrift_20s_ease-in-out_infinite] -bottom-48 -right-48"
          style={{ animationDelay: '10s' }}
        ></div>
        <div
          className="absolute w-[350px] h-[350px] bg-gradient-to-br from-[#9c27b0] to-[#e91e63] rounded-full blur-[100px] opacity-40 animate-[orbDrift_20s_ease-in-out_infinite] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ animationDelay: '15s' }}
        ></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-5">
        {/* Header */}
        <header className="text-center mb-20 animate-[priceFadeIn_0.8s_ease-out]">
          <div className="inline-flex items-center gap-2.5 bg-gradient-to-br from-[#00ff88]/10 to-[#0066ff]/10 backdrop-blur-lg border border-[#00ff88]/20 rounded-full py-3 px-7 mb-7 relative overflow-hidden">
            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[#00ff88]/30 to-transparent animate-[greenShine_3s_infinite]"></div>
            <span className="text-xl animate-[pricePulse_2s_ease-in-out_infinite]">✨</span>
            <span className="text-[#00ff88] text-sm font-bold uppercase tracking-wider">
              Unlock Your Potential
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
            Choose your{' '}
            <span
              className="bg-gradient-to-br from-[#0066ff] via-[#00ff88] via-[#ffd93d] via-[#ff6b6b] to-[#0066ff] bg-clip-text text-transparent bg-[length:200%_auto] animate-[priceShimmer_3s_linear_infinite]"
            >
              BestCallerAI
            </span>{' '}
            Plan
          </h1>
          <p className="text-lg sm:text-xl text-white/70 font-normal max-w-3xl mx-auto leading-relaxed">
            Select the perfect plan to supercharge your business with AI-powered voice agents.
          </p>
        </header>
        {/* Pricing Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
        >
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white/5 backdrop-blur-lg border-2 border-transparent rounded-3xl p-10 sm:p-12 animate-[cardSlideIn_0.8s_ease-out_${0.3 + index * 0.1}s_backwards] hover:-translate-y-1 hover:scale-102 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col ${plan.className} ${
                plan.popular ? 'scale-105 z-[2]' : ''
              }`}
            >
              <div
                className={`absolute inset-[-2px] rounded-3xl opacity-50 animate-[borderRotate_10s_linear_infinite] bg-[length:300%_300%] ${
                  plan.className.includes('starter')
                    ? 'bg-gradient-to-br from-[#4a90e2] to-[#50c8ff]'
                    : plan.className.includes('pro')
                    ? 'bg-gradient-to-br from-[#0066ff] via-[#00ff88] via-[#ffd93d] via-[#ff6b6b] to-[#0066ff]'
                    : 'bg-gradient-to-br from-[#9c27b0] to-[#e91e63]'
                } z-[-1]`}
              ></div>
              {plan.popular && (
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#00ff88] to-[#00b35e] text-black py-2 px-6 rounded-full text-xs font-bold uppercase tracking-wide animate-[popularPulse_2s_ease-in-out_infinite]">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">{plan.name}</h2>
              </div>
              <div className="text-center mb-10">
                <p className="text-lg text-white/40 line-through">{plan.originalPrice}</p>
                <p
                  className={`text-5xl font-black mb-2 ${
                    plan.className.includes('starter')
                      ? 'bg-gradient-to-br from-[#4a90e2] to-[#50c8ff] bg-clip-text text-transparent'
                      : plan.className.includes('pro')
                      ? 'bg-gradient-to-br from-[#0066ff] to-[#00ff88] bg-clip-text text-transparent'
                      : 'bg-gradient-to-br from-[#9c27b0] to-[#e91e63] bg-clip-text text-transparent'
                  }`}
                >
                  {plan.currentPrice}
                  <span className="text-2xl">/month</span>
                </p>
                <span
                  className={`inline-block py-1.5 px-4 rounded-5xl text-xs font-bold ${
                    plan.className.includes('starter')
                      ? 'bg-gradient-to-br from-[#4a90e2] to-[#50c8ff] text-white'
                      : plan.className.includes('pro')
                      ? 'bg-gradient-to-br from-[#00ff88] to-[#00b35e] text-black'
                      : 'bg-gradient-to-br from-[#9c27b0] to-[#e91e63] text-white'
                  } animate-[savingsPulse_2s_ease-in-out_infinite]`}
                >
                  {plan.savings}
                </span>
              </div>
              <div className="bg-white/5 rounded-4xl p-5 mb-10 border border-white/10">
                <div className="text-base font-bold text-[#ffd93d] text-center mb-2">
                  ALL-DONE-FOR-YOU Plan
                </div>
                <div
                  className={`text-2xl font-bold text-center mb-2 ${
                    plan.className.includes('starter')
                      ? 'text-[#50c8ff]'
                      : plan.className.includes('pro')
                      ? 'text-[#00ff88]'
                      : 'text-[#e91e63]'
                  }`}
                >
                  {plan.allDonePrice}
                </div>
                <div className="text-xs text-white/70 text-center leading-tight">
                  {plan.allDoneDesc}
                </div>
              </div>
              <div className="mb-10 flex-1">
                <h3 className="text-lg font-bold text-white text-center mb-5">
                  Included Features{plan.className !== 'starter' ? ' (Everything in Starter Plan, plus):' : ':'}
                </h3>
                <ul className="grid gap-3">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="group flex items-center gap-3 p-3 bg-white/5 rounded-3xl hover:bg-white/8 hover:translate-x-1 transition-all duration-300"
                    >
                      <span
                        className={`w-8 h-8 rounded-2xl flex items-center justify-center text-base ${
                          plan.className.includes('starter')
                            ? 'bg-gradient-to-br from-[#4a90e2] to-[#50c8ff]'
                            : plan.className.includes('pro')
                            ? 'bg-gradient-to-br from-[#0066ff] to-[#00ff88]'
                            : 'bg-gradient-to-br from-[#9c27b0] to-[#e91e63]'
                        }`}
                      >
                        {['📞', '📊', '🤖', '🛠️', '🔗', '☎️', '🗣️', '🌐', '💬', '🎤', '⭐'][idx]}
                      </span>
                      <span className="flex-1 text-white/90 text-sm leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center mt-auto">
                <a
                  href={plan.ctaLink}
                  className="group inline-flex items-center justify-center gap-2 w-full py-4 px-10 text-base font-bold text-white bg-gradient-to-br from-[#00ff88] to-[#00b35e] rounded-[50px] shadow-[0_10px_30px_rgba(0,255,136,0.4)] hover:-translate-y-0.5 hover:scale-102 hover:shadow-[0_15px_40px_rgba(0,255,136,0.6)] transition-all duration-300 relative overflow-hidden uppercase tracking-wide"
                >
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-[left] duration-500"></div>
                  Subscribe Now
                </a>
                <p className="flex items-center justify-center gap-1.5 mt-3 text-xs text-white/60">
                  <span className="text-[#00ff88]">🔒</span> Secure Payment
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes orbDrift {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(50px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-30px, 30px) scale(0.9);
          }
        }
        @keyframes priceFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes greenShine {
          to {
            left: 100%;
          }
        }
        @keyframes pricePulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
        @keyframes priceShimmer {
          to {
            background-position: 200% center;
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
        @keyframes popularPulse {
          0%,
          100% {
            transform: translateX(-50%) scale(1);
          }
          50% {
            transform: translateX(-50%) scale(1.05);
          }
        }
        @keyframes savingsPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        @media (max-width: 1200px) {
          .pricing-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }
        }
        @media (max-width: 768px) {
          .pricing-section {
            padding: 60px 15px;
          }
          .pricing-header {
            margin-bottom: 50px;
          }
          .pricing-title {
            font-size: 48px;
          }
          .pricing-subtitle {
            font-size: 18px;
          }
          .price-card {
            padding: 40px 30px;
          }
          .current-price {
            font-size: 50px;
          }
          .included-title {
            font-size: 16px;
          }
          .included-item {
            padding: 10px;
          }
          .included-text {
            font-size: 13px;
          }
          .price-cta-button {
            padding: 15px 30px;
            font-size: 15px;
          }
        }
        @media (max-width: 480px) {
          .pricing-section {
            padding: 40px 10px;
          }
          .pricing-header {
            margin-bottom: 40px;
          }
          .pricing-title {
            font-size: 36px;
          }
          .pricing-subtitle {
            font-size: 16px;
          }
          .price-card {
            padding: 30px 20px;
          }
          .current-price {
            font-size: 40px;
          }
          .original-price {
            font-size: 16px;
          }
          .savings-badge {
            font-size: 11px;
          }
          .included-title {
            font-size: 15px;
          }
          .included-item {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
          }
          .included-icon {
            margin-bottom: 5px;
          }
          .price-cta-button {
            font-size: 14px;
            padding: 12px 20px;
          }
          .secure-text {
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  );
};

export default Pricing;