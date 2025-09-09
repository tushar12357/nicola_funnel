import React from "react";

const solutionsData = [
  {
    useCase: {
      title: "📞 Customer Service",
      description: "24/7 support and assistance",
    },
    industry: { title: "Any Industry", description: "Universal application" },
  },
  {
    useCase: {
      title: "🏥 Receptionist",
      description: "Professional front desk services",
    },
    industry: {
      title: "Medical Clinics, Hotels, Corporations",
      description: "Professional service environments",
    },
  },
  {
    useCase: {
      title: "💼 Sales Agents",
      description: "Intelligent sales automation",
    },
    industry: {
      title: "Real Estate, Insurance, Financial Services, Agencies, Solar",
      description: "High-value sales industries",
    },
  },
  {
    useCase: {
      title: "📱 Call Center",
      description: "Scalable call operations",
    },
    industry: {
      title: "Cold Outreach, Inbound and Outbound Calls",
      description: "All call center operations",
    },
  },
  {
    useCase: { title: "🛎️ Concierge", description: "Premium guest services" },
    industry: {
      title: "Hotels, Personalized Services",
      description: "Luxury hospitality and personalized client care",
    },
  },
  {
    useCase: {
      title: "📊 Data Collection",
      description: "Intelligent data gathering",
    },
    industry: {
      title: "Research, Lead Generation",
      description: "Data-driven industries",
    },
  },
  {
    useCase: {
      title: "🎯 Lead Qualification & Reactivation",
      description: "Smart lead management",
    },
    industry: {
      title: "Sales, Client Acquisition",
      description: "Growth-focused businesses",
    },
  },
  {
    useCase: {
      title: "📋 Booking Scheduling, Confirmation & Reminders",
      description: "Complete booking management",
    },
    industry: { title: "Any Industry", description: "Universal application" },
  },
  {
    useCase: {
      title: "🌐 Omni-Channel Sales & Marketing",
      description: "Multi-platform engagement",
    },
    industry: { title: "Any Industry", description: "Universal application" },
  },
  {
    useCase: {
      title: "🌍 Multilingual Geographic Expansion",
      description: "Global market reach",
    },
    industry: {
      title: "International Clients",
      description: "Global businesses",
    },
  },
];

const galleryImages = [
  {
    src: "https://storage.googleapis.com/msgsndr/PwZCE4paYkzqicpqJecc/media/68937c1665ff1546fff11a4d.png",
    alt: "AI Solution 1",
  },
  {
    src: "https://storage.googleapis.com/msgsndr/PwZCE4paYkzqicpqJecc/media/68937c1a0291e86f83ee441a.png",
    alt: "AI Solution 2",
  },
  {
    src: "https://storage.googleapis.com/msgsndr/PwZCE4paYkzqicpqJecc/media/68937c1df8ddde1b2e0f5aad.png",
    alt: "AI Solution 3",
  },
];

const SolutionsSection: React.FC = () => {
  return (
    <section
      id="custom-code-ynoR-HM-zV"
      className="relative py-24 px-5 bg-gradient-to-b from-black via-[#001a33] to-[#002244] overflow-hidden min-h-screen w-screen"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] animate-gridMove"></div>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-[#00ccff] rounded-full opacity-60"
            style={{
              left: `${[10, 20, 40, 60, 80, 90][i]}%`,
              top: `${[15, 80, 40, 70, 20, 60][i]}%`,
              animation: `particleFloat ${
                [15, 20, 18, 22, 16, 19][i]
              }s infinite ease-in-out`,
              animationDelay: `${[0, 2, 4, 1, 3, 5][i]}s`,
            }}
          />
        ))}
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-[#0066ff] to-[#00ff88] rounded-full filter blur-[80px] opacity-30 -top-[200px] -left-[200px] animate-orbFloat"></div>
        <div className="absolute w-[300px] h-[300px] bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d] rounded-full filter blur-[80px] opacity-30 -bottom-[150px] -right-[150px] animate-orbFloat animation-delay-3s"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInDown">
          <div className="inline-flex items-center gap-2.5 bg-[rgba(0,102,255,0.1)] backdrop-blur-md border border-[rgba(0,102,255,0.2)] rounded-full px-7 py-3 mb-7 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(0,102,255,0.2)] to-transparent animate-badgeShine"></div>
            <div className="w-6 h-6 bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded-full flex items-center justify-center text-white font-bold text-sm animate-iconPulse">
              ✓
            </div>
            <span className="text-[#00ccff] text-sm font-semibold uppercase tracking-widest">
              Perfect Solutions
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
            Our Solutions Are{" "}
            <span className="bg-gradient-to-r from-[#0066ff] via-[#00ccff] to-[#00ff88] bg-clip-text text-transparent bg-[length:200%_auto] animate-textShimmer">
              Perfect For
            </span>
          </h2>
          <p className="text-lg md:text-2xl text-[rgba(255,255,255,0.7)] font-normal max-w-2xl mx-auto leading-relaxed">
            Discover how our AI-powered solutions can transform your business
            across various use cases and industries
          </p>
        </div>

        {/* Premium Table */}
        <div className="bg-[rgba(255,255,255,0.02)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-3xl p-10 mb-16 relative overflow-hidden animate-tableSlideUp shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
          <div className="absolute inset-[-2px] bg-gradient-to-br from-[#0066ff] via-[#00ccff] to-[#00ff88] rounded-3xl opacity-30 z-[-1] bg-[length:300%_300%] animate-borderRotate"></div>
          <table className="w-full border-collapse bg-transparent">
            <thead>
              <tr>
                <th className="bg-gradient-to-br from-[#001a33] to-[#002244] text-white text-xl font-bold py-6 px-8 text-left rounded-tl-2xl">
                  <span className="inline-block mr-3 text-2xl animate-headerIconBounce">
                    🎯
                  </span>
                  Use Cases
                </th>
                <th className="bg-gradient-to-br from-[#001a33] to-[#002244] text-white text-xl font-bold py-6 px-8 text-left rounded-tr-2xl">
                  <span className="inline-block mr-3 text-2xl animate-headerIconBounce">
                    🏢
                  </span>
                  Industries
                </th>
              </tr>
            </thead>
            <tbody>
              {solutionsData.map((item, index) => (
                <tr
                  key={index}
                  className={`transition-all duration-300 ${
                    index % 2 === 0
                      ? "bg-[rgba(255,255,255,0.02)]"
                      : "bg-[rgba(0,102,255,0.02)]"
                  } hover:bg-[rgba(0,102,255,0.08)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,102,255,0.15)] ${
                    index === solutionsData.length - 1
                      ? "last:[&>td:first-child]:rounded-bl-2xl last:[&>td:last-child]:rounded-br-2xl"
                      : ""
                  }`}
                >
                  <td className="py-5 px-8 align-top border-r border-[rgba(255,255,255,0.05)] last:border-r-0">
                    <div className="flex items-start gap-4">
                      <span className="text-lg flex-shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(0,255,136,0.6)] animate-checkPulse">
                        ✅
                      </span>
                      <div className="flex flex-col gap-1.5">
                        <span className="text-white text-base font-semibold flex items-center gap-2">
                          {item.useCase.title}
                        </span>
                        <span className="text-[rgba(255,255,255,0.6)] text-sm font-normal">
                          {item.useCase.description}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-8 align-top border-r border-[rgba(255,255,255,0.05)] last:border-r-0">
                    <div className="flex items-start gap-4">
                      <span className="text-lg flex-shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(0,255,136,0.6)] animate-checkPulse">
                        ✅
                      </span>
                      <div className="flex flex-col gap-1.5">
                        <span className="text-white text-base font-semibold flex items-center gap-2">
                          {item.industry.title}
                        </span>
                        <span className="text-[rgba(255,255,255,0.6)] text-sm font-normal">
                          {item.industry.description}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Image Gallery */}
        <div className="relative my-20 py-16">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.15)_0%,rgba(0,204,255,0.1)_30%,transparent_70%)] filter blur-[60px] z-[1] animate-glowPulse"></div>
          <div className="flex justify-center items-center gap-12 flex-wrap relative z-[2]">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] cursor-pointer hover:scale-110 hover:-translate-y-2.5 hover:z-10"
              >
                <div className="relative w-[450px] h-[320px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#001a33] to-[#002244] shadow-[0_10px_30px_rgba(0,0,0,0.3),0_0_0_2px_rgba(0,255,136,0.3),inset_0_0_0_1px_rgba(0,255,136,0.1)] group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.4),0_0_0_3px_rgba(0,255,136,0.6),0_0_30px_rgba(0,255,136,0.4),inset_0_0_0_1px_rgba(0,255,136,0.2)]">
                  <div className="w-full h-full p-2">
                    {" "}
                    {/* Added wrapper div to handle padding */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 group-hover:contrast-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(0,255,136,0.4)] to-transparent rounded-xl z-[2] opacity-0 group-hover:opacity-100 animate-shimmerMove"></div>
                  <div className="absolute inset-[-2px] bg-gradient-to-br from-[#00ff88] via-[#00ccff] to-[#00ff88] rounded-[22px] z-[-1] opacity-0 group-hover:opacity-80 bg-[length:200%_200%] animate-borderGradientRotate"></div>
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-3/5 h-5 bg-[radial-gradient(ellipse,rgba(0,255,136,0.3)_0%,transparent_70%)] rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-2.5 blur-sm"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-ctaFadeIn">
          <a
            href="https://calendly.com/bestcallerai-support"
            className="inline-flex items-center gap-3 bg-gradient-to-br from-[#00ff88] to-[#00ccff] text-[#1a237e] text-lg font-bold py-5 px-10 rounded-full cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] relative overflow-hidden shadow-[0_10px_30px_rgba(0,255,136,0.3)] uppercase tracking-wide  hover:scale-105 hover:shadow-[0_25px_50px_rgba(0,255,136,0.5)] hover:bg-gradient-to-br hover:from-[#00ff88] hover:via-[#00ccff] hover:to-[#0066ff] "
          >
            <a
              href="https://calendly.com/bestcallerai-support/30min?back=1&month=2025-09"
              target="_blank"
              className="relative z-10 transition-all duration-300"
            >
              Get Instant Access Now
            </a>
            <span className="relative z-10 text-xl font-bold transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110">
              →
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.3)] to-transparent transition-[left] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] left-[-100%] group-hover:left-full"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
