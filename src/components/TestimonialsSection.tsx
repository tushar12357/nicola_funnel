import React from 'react';

const testimonials = [
  {
    text: "It's changed my business. We use it for cold outreach. The AI passes even through receptionists and collects the right contact information, qualifies leads and sells our products.",
    author: { initials: 'JD', name: 'John Davis', title: 'CEO, TechFlow Solutions' },
    image: 'https://storage.googleapis.com/msgsndr/PwZCE4paYkzqicpqJecc/media/68a9e2db5fd92709d239e387.png',
    featured: true,
  },
  {
    text: "Impressive Human-like voice system. We use it for cold outreach. The AI passes even through receptionists and collects the right contact information, qualifies leads and sells our products.",
    author: { initials: 'SM', name: 'Sarah Martinez', title: 'Sales Director, Growth Labs' },
    image: 'https://storage.googleapis.com/msgsndr/PwZCE4paYkzqicpqJecc/media/68a9e2db5fd92709d239e387.png',
    featured: false,
  },
  {
    text: "Set-Up of AI agents was easy. Highly recommended for taking calls and follow-ups. We replaced 1 receptionist.",
    author: { initials: 'MR', name: 'Michael Rodriguez', title: 'Operations Manager, Swift Corp' },
    image: 'https://storage.googleapis.com/msgsndr/PwZCE4paYkzqicpqJecc/media/68a9e2db5fd92709d239e387.png',
    featured: false,
  },
  {
    text: "It enables us to expand in new countries with the multi-language options and low phone minute costs.",
    author: { initials: 'LW', name: 'Lisa Wang', title: 'International Director, Global Reach' },
    image: 'https://storage.googleapis.com/msgsndr/PwZCE4paYkzqicpqJecc/media/68a9e2db5fd92709d239e387.png',
    featured: false,
  },
  {
    text: "AI does all the heavy lifting, our sales team focus on the ready-to-buy leads in their calendars. Sales rate increased by 43%.",
    author: { initials: 'DT', name: 'David Thompson', title: 'VP Sales, Revenue Boost Inc' },
    image: 'https://storage.googleapis.com/msgsndr/PwZCE4paYkzqicpqJecc/media/68a9e2db5fd92709d239e387.png',
    featured: true,
  },
  {
    text: "The ROI is incredible. Our conversion rates improved dramatically and we're closing more deals than ever before. This AI system is a game-changer.",
    author: { initials: 'ER', name: 'Emily Roberts', title: 'Founder, ScaleUp Ventures' },
    image: 'https://storage.googleapis.com/msgsndr/PwZCE4paYkzqicpqJecc/media/68a9e2db5fd92709d239e387.png',
    featured: false,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <div className="relative min-h-screen w-screen bg-gradient-to-br from-black via-[#001a33] to-[#003366] overflow-hidden py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(0,102,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px] animate-drift"></div>
      </div>
      <div className="absolute w-[350px] h-[350px] bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded-full filter blur-[50px] opacity-40 top-[10%] right-[-10%] animate-float"></div>
      <div className="absolute w-[280px] h-[280px] bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d] rounded-full filter blur-[50px] opacity-40 bottom-[15%] left-[-8%] animate-float animation-delay-3s"></div>
      <div className="absolute w-[220px] h-[220px] bg-gradient-to-br from-[#6bcf7f] to-[#00ff88] rounded-full filter blur-[50px] opacity-40 top-[60%] right-[15%] animate-float animation-delay-6s"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 text-center">
        {/* Header */}
        <div className="mb-16 animate-slideInUp">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#0066ff] via-[#00ccff] to-[#00ff88] bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer inline-block">
            Testimonials
          </h2>
          <h3 className="text-2xl md:text-4xl text-[rgba(255,255,255,0.9)] font-semibold mb-10">What our clients are saying</h3>
          <div className="flex flex-col items-center gap-4 bg-[rgba(255,255,255,0.08)] backdrop-blur-2xl border border-[rgba(255,255,255,0.15)] rounded-3xl p-8 max-w-md mx-auto mb-16 animate-slideInUp animation-delay-200">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="text-4xl text-[#ffd700] drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] animate-starGlow"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  ★
                </span>
              ))}
            </div>
            <div className="text-5xl font-extrabold bg-gradient-to-br from-[#ffd700] to-[#ffed4e] bg-clip-text text-transparent">4.9</div>
            <div className="text-[rgba(255,255,255,0.8)] text-base font-medium">Based on 100+ client reviews</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border ${testimonial.featured ? 'bg-[rgba(0,255,136,0.08)] border-[rgba(0,255,136,0.3)]' : 'border-[rgba(255,255,255,0.1)]'} rounded-3xl p-8 text-left transition-all duration-300 overflow-hidden animate-slideInUp hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(0,102,255,0.4)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_30px_rgba(0,102,255,0.1)] flex flex-col`}
              style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'both' }}
            >
              <div className="absolute top-0 left-[-100%] w-full h-0.5 bg-gradient-to-r from-transparent via-[rgba(0,255,136,0.8)] to-transparent transition-all duration-500 ease-in-out group-hover:left-full"></div>
              <div className="relative text-center mb-5">
                <img
                  src={testimonial.image}
                  alt="Testimonial Results"
                  className="w-full max-w-[180px] h-auto mx-auto rounded-xl transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-[-10px] bg-gradient-to-r from-[#0066ff] via-[#00ccff] to-[#00ff88] rounded-3xl opacity-60 filter blur-[15px] z-[-1] animate-imageGlow group-hover:opacity-100 group-hover:blur-[20px]"></div>
              </div>
              <div className="text-[rgba(255,255,255,0.95)] text-base leading-relaxed mb-5 font-normal relative">
                <span className="text-2xl text-[rgba(0,255,136,0.8)] font-bold">"</span>
                {testimonial.text}
                <span className="text-2xl text-[rgba(0,255,136,0.8)] font-bold">"</span>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] via-[#00ccff] to-[#00ff88] rounded-full flex items-center justify-center text-white font-bold text-lg uppercase flex-shrink-0">
                  {testimonial.author.initials}
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-base">{testimonial.author.name}</div>
                  <div className="text-[rgba(255,255,255,0.7)] text-sm font-medium">{testimonial.author.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;