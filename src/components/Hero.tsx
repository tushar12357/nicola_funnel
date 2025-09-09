const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-black via-[#001a33] to-[#003366] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(0,102,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] animate-[drift_20s_linear_infinite]"></div>
      </div>
      {/* Floating Orbs */}
      <div className="absolute w-[300px] h-[300px] bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded-full blur-[40px] opacity-60 animate-[float_10s_ease-in-out_infinite] top-[-150px] right-[-150px]"></div>
      <div className="absolute w-[200px] h-[200px] bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d] rounded-full blur-[40px] opacity-60 animate-[float_10s_ease-in-out_infinite] bottom-[-100px] left-[-100px] animation-delay-2s"></div>
      <div className="absolute w-[250px] h-[250px] bg-gradient-to-br from-[#6bcf7f] to-[#00ff88] rounded-full blur-[40px] opacity-60 animate-[float_10s_ease-in-out_infinite] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animation-delay-4s"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-5 py-16 lg:py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#0066ff]/10 backdrop-blur-lg border border-[#0066ff]/30 rounded-full px-5 py-2.5 mb-9 text-white text-sm sm:text-base font-semibold animate-[slideInDown_0.8s_ease-out] relative">
          <span className="absolute w-2 h-2 bg-[#00ff88] rounded-full left-4 animate-[pulse_2s_infinite]"></span>
          <span className="pl-4">
            100+ happy companies are already scaling clients
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight animate-[slideInUp_0.8s_ease-out_0.2s_both] tracking-tight">
          <span className="bg-gradient-to-br from-[#0066ff] via-[#00ccff] via-[#00ff88] via-[#ffd93d] to-[#ff6b6b] bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
            Human-sounding AI Voice Agents
          </span>
          <br />
          that book appointments for you 24/7/365 days while you sleep!
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl lg:text-2xl text-white/85 leading-relaxed mb-12 max-w-3xl mx-auto font-normal animate-[slideInUp_0.8s_ease-out_0.4s_both]">
          Never miss a call again, get your calendar filled with qualified
          leads, let AI follow up with SMS, WhatsApp, Email in over 200
          languages. Lowest phone costs, best quality – try it for free
        </p>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-6 mb-12 animate-[slideInUp_0.8s_ease-out_0.6s_both]">
          <a
            href="https://calendly.com/bestcallerai-support/30min?back=1&month=2025-09"
            target="_blank"
            className="inline-flex items-center gap-2 bg-gradient-to-br from-[#00ff88] to-[#00cc66] text-black px-12 py-5 text-lg sm:text-xl font-bold rounded-[60px] shadow-2xl hover:shadow-[0_20px_50px_rgba(0,255,136,0.6),0_0_30px_rgba(0,255,136,0.8)] hover:-translate-y-1 hover:scale-105 hover:bg-gradient-to-br hover:from-[#00ff88] hover:to-[#66ffaa] transition-all duration-300 relative overflow-hidden uppercase tracking-wide border-2 border-transparent group"
          >
            Free Trial
            <span className="text-2xl animate-[arrowBounce_1.5s_ease-in-out_infinite]">
              →
            </span>
            <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shineLoop_2s_ease-in-out_infinite]"></span>
            <span className="absolute inset-[-2px] rounded-[60px] bg-gradient-to-br from-[#00ff88] via-[#00ccff] to-[#0066ff] opacity-0 group-hover:opacity-100 transition-opacity z-[-1] animate-[borderGlow_1s_ease-in-out_infinite_alternate]"></span>
          </a>
        </div>

        {/* Value Proposition */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 max-w-4xl mx-auto animate-[slideInUp_0.8s_ease-out_1s_both]">
          {[
            "Unlimited Voice Agents",
            "Starts from USD 250/mo",
            "62 Natural AI Voices",
          ].map((text) => (
            <div
              key={text}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-2xl text-white/95 text-sm sm:text-base font-medium hover:bg-white/8 hover:border-[#0066ff]/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-7 h-7 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-base">✓</span>
              </div>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-10 animate-[fadeIn_0.8s_ease-out_1.4s_both]">
          {[
            {
              number: "100+",
              text: "happy companies are already scaling clients",
            },
            { number: "$52M+", text: "Total Revenue Created" },
            { number: "24/7", text: "AI Agents Active" },
          ].map((item) => (
            <div
              key={item.number}
              className="flex items-center gap-2 text-white/70 text-sm sm:text-base font-medium"
            >
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-br from-[#0066ff] to-[#00ccff] bg-clip-text text-transparent">
                {item.number}
              </span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
