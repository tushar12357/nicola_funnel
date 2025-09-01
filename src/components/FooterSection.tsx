import React from 'react';

const socialLinks = [
  { href: 'https://linkedin.com/company/bestcallerai', icon: 'in', label: 'bestcallerai', bg: 'bg-[#0077b5]' },
  { href: 'https://instagram.com/bestacallerai', icon: '📷', label: '@bestacallerai', bg: 'bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]' },
  { href: 'https://www.facebook.com/profile.php?id=61578202982900', icon: 'f', label: 'Facebook', bg: 'bg-[#1877f2]' },
  { href: 'https://x.com/bestcallerai', icon: '𝕏', label: '@bestcallerai', bg: 'bg-black' },
  { href: 'https://www.youtube.com/@Bestcallerai', icon: '▶', label: 'YouTube', bg: 'bg-[#ff0000]' },
];

const contactItems = [
  { icon: '📧', label: 'Email', value: <a href="mailto:support@bestcallerai.com" className="text-[#00ff88] hover:text-[#66ffaa] hover:underline">support@bestcallerai.com</a> },
  { icon: '📞', label: 'Phone', value: <a href="tel:+971585221677" className="text-[#00ff88] hover:text-[#66ffaa] hover:underline">+971 58 522 1677</a> },
  { icon: '📍', label: 'Address', value: 'Silicon Oasis, DBP, A2 Building,<br />Dubai, UAE' },
];

const legalLinks = [
  { href: '#privacy', label: 'Privacy Policy' },
  { href: '#terms', label: 'Terms of Service' },
  { href: '#cookies', label: 'Cookie Policy' },
];

const FooterSection: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-black via-[#0a1a0a] to-black border-t border-[rgba(0,255,136,0.2)] overflow-hidden w-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,136,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(0,204,102,0.1)_0%,transparent_50%)]"></div>

      {/* Main Footer */}
      <div className="py-20 px-5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 md:gap-20 mb-16">
            {/* Company Info */}
            <div className="animate-footerFadeIn">
              <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-br from-[#00ff88] via-[#00ccff] to-[#44ff88] bg-clip-text text-transparent bg-[length:200%_auto] animate-footerLogoShimmer mb-4">
                BestCallerAI
              </h3>
              <p className="text-lg text-white/80 font-semibold mb-10">for best business results</p>
              <div className="mb-10">
                <h4 className="text-base text-[#00ff88] font-bold uppercase tracking-wide mb-5">Connect With Us</h4>
                <div className="flex flex-wrap gap-5">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-center gap-2 text-white/70 text-sm py-2 px-3 border border-[rgba(0,255,136,0.2)] rounded-lg bg-[rgba(0,255,136,0.05)] hover:text-[#00ff88] hover:border-[rgba(0,255,136,0.4)] hover:bg-[rgba(0,255,136,0.1)] hover:-translate-y-0.5 transition-all duration-300"
                      target="_blank"
                      rel="noopener"
                    >
                      <span className={`w-7 h-7 rounded-md flex items-center justify-center text-xs md:text-sm font-bold ${link.bg} group-hover:scale-110 group-hover:shadow-[0_4px_15px_rgba(0,255,136,0.3)] transition-all duration-300`}>
                        {link.icon}
                      </span>
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-footerFadeIn" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-xl md:text-2xl font-extrabold bg-gradient-to-br from-[#00ff88] to-[#00ccff] bg-clip-text text-transparent mb-8">
                Contact
              </h4>
              {contactItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-[rgba(0,255,136,0.02)] rounded-xl border border-[rgba(0,255,136,0.1)] hover:bg-[rgba(0,255,136,0.05)] hover:border-[rgba(0,255,136,0.2)] hover:translate-x-1.5 transition-all duration-300 mb-5"
                >
                  <span className="text-xl text-[#00ff88] mt-0.5">{item.icon}</span>
                  <div className="flex-1">
                    <div className="text-xs text-white/50 uppercase tracking-wide mb-1">{item.label}</div>
                    <div className="text-base text-white/90 font-medium leading-tight">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-8 px-5 border-t border-[rgba(0,255,136,0.1)] bg-black/50">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-5">
          <p className="text-sm text-white/60 font-medium">All rights reserved BestCallerAI.</p>
          <ul className="flex flex-wrap gap-6 md:gap-8 justify-center">
            {legalLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-sm text-white/60 hover:text-[#00ff88] relative transition-all duration-300 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-[#00ff88] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;