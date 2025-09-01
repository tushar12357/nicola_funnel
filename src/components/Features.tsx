import { useState, useEffect, useRef } from 'react';

const Features = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

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

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section id="custom-code-HR10VoP8sS" className="relative w-full bg-gradient-to-br from-black via-[#001a33] to-[#003366] py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[length:60px_60px] animate-[featuresDrift_25s_linear_infinite]"
        ></div>
      </div>
      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-0.5 bg-gradient-to-br from-[#00ff88] to-[#00ccff] rounded-full opacity-50 animate-[featuresParticleDrift_18s_ease-in-out_infinite]"
          style={{
            left: `${[10, 90, 20, 80, 50][i]}%`,
            top: `${[15, 25, 75, 85, 10][i]}%`,
            animationDelay: `${i * 4}s`,
          }}
        ></div>
      ))}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-5">
        {/* Section Headline */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-16 animate-[slideInUp_0.8s_ease-out]">
          <span
            className="bg-gradient-to-br from-[#00ff88] via-[#00ccff] via-[#0066ff] via-[#ffd93d] to-[#ff6b6b] bg-clip-text text-transparent bg-[length:200%_auto] animate-[featuresShimmer_3s_linear_infinite]"
          >
            Core Features
          </span>{' '}
          of the system
        </h2>
        {/* Features Content */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 animate-[fadeInUp_0.8s_ease-out_0.3s_both]"
        >
          {/* Features Table */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[20px] p-8 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
              {/* Column 1 */}
              <div className="flex flex-col gap-5">
                {[
                  '24/7 AI Voice Agents',
                  'Automated Appointment Booking',
                  'Multi-Language Support (200+ Languages)',
                  'SMS & WhatsApp Integration',
                  'Real-time Lead Qualification',
                  'Custom Voice Training',
                ].map((text) => (
                  <div
                    key={text}
                    className="group relative flex items-start gap-4 p-4 bg-white/5 border border-[#00ff88]/20 rounded-xl hover:bg-white/8 hover:border-[#00ff88]/40 hover:translate-x-1 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[#00ff88]/10 to-transparent group-hover:left-[100%] transition-[left] duration-500"></div>
                    <div className="w-6 h-6 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_4px_12px_rgba(0,255,136,0.3)]">
                      <span className="text-black font-bold text-sm">✓</span>
                    </div>
                    <div className="text-white/90 text-sm sm:text-base font-medium leading-tight">
                      {text}
                    </div>
                  </div>
                ))}
              </div>
              {/* Column 2 */}
              <div className="flex flex-col gap-5">
                {[
                  'CRM Integration',
                  'Analytics Dashboard',
                  'Call Recording & Transcription',
                  'White-Label Solution',
                  'Scalable Infrastructure',
                  '24/7 Technical Support',
                ].map((text) => (
                  <div
                    key={text}
                    className="group relative flex items-start gap-4 p-4 bg-white/5 border border-[#00ff88]/20 rounded-xl hover:bg-white/8 hover:border-[#00ff88]/40 hover:translate-x-1 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[#00ff88]/10 to-transparent group-hover:left-[100%] transition-[left] duration-500"></div>
                    <div className="w-6 h-6 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_4px_12px_rgba(0,255,136,0.3)]">
                      <span className="text-black font-bold text-sm">✓</span>
                    </div>
                    <div className="text-white/90 text-sm sm:text-base font-medium leading-tight">
                      {text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Video Section */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-[400px] rounded-[20px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(0,255,136,0.2)] bg-gradient-to-br from-[#00ff88]/10 to-[#0066ff]/10 p-2">
              <div
                className={`relative w-full pt-[177.78%] bg-black rounded-4xl overflow-hidden ${
                  isVideoPlaying ? 'playing' : ''
                }`}
                id="featuresVideoWrapper"
              >
                <video
                  ref={videoRef}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-300"
                  poster="https://storage.googleapis.com/msgsndr/PwZCE4paYkzqicpqJecc/media/689a580e6bdeada8be07a2e2.png"
                  preload="metadata"
                  controls
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  onEnded={() => setIsVideoPlaying(false)}
                  onClick={toggleVideo}
                >
                  <source
                    src="https://storage.googleapis.com/msgsndr/PwZCE4paYkzqicpqJecc/media/689a5733d7fbaf054724ebf1.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div
                  className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer transition-all duration-300 z-[5]"
                  onClick={toggleVideo}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,255,136,0.4)] hover:scale-110 hover:shadow-[0_15px_40px_rgba(0,255,136,0.7)] transition-all duration-300 animate-[playButtonPulse_2s_ease-in-out_infinite]">
                    <div className="w-0 h-0 border-l-[20px] border-l-black border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-[-2px] bg-gradient-to-br from-[#00ff88] via-[#00ccff] to-[#0066ff] rounded-[22px] opacity-50 animate-[glowRotate_4s_linear_infinite] z-[-1]"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes featuresDrift {
          to {
            transform: translate(60px, 60px);
          }
        }
        @keyframes featuresParticleDrift {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.5;
          }
          25% {
            transform: translateY(-25px) translateX(20px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-50px) translateX(-15px);
            opacity: 0.5;
          }
          75% {
            transform: translateY(-25px) translateX(25px);
            opacity: 0.8;
          }
        }
        @keyframes featuresShimmer {
          to {
            background-position: 200% center;
          }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes playButtonPulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 10px 30px rgba(0, 255, 136, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 15px 40px rgba(0, 255, 136, 0.6);
          }
        }
        @keyframes glowRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @media (max-width: 1024px) {
          .video-container {
            max-width: 350px;
          }
        }
        @media (max-width: 768px) {
          .features-section {
            padding: 60px 0;
          }
          .features-container {
            padding: 0 16px;
          }
          .features-headline {
            margin-bottom: 40px;
          }
          .features-table {
            padding: 30px 20px;
          }
          .features-columns {
            gap: 15px;
          }
          .feature-item {
            padding: 14px 16px;
            gap: 12px;
          }
          .feature-check {
            width: 20px;
            height: 20px;
          }
          .feature-check::after {
            font-size: 12px;
          }
          .feature-text {
            font-size: 15px;
          }
          .video-container {
            max-width: 300px;
          }
          .play-button {
            width: 70px;
            height: 70px;
          }
          .play-icon {
            border-left: 18px solid #000;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
          }
        }
        @media (max-width: 480px) {
          .features-table {
            padding: 25px 16px;
          }
          .feature-item {
            padding: 12px 14px;
          }
          .feature-text {
            font-size: 14px;
          }
          .video-container {
            max-width: 280px;
          }
        }
        @media (min-width: 1200px) {
          .features-section {
            padding: 100px 0;
          }
          .features-content {
            gap: 80px;
          }
          .features-table {
            padding: 50px;
          }
          .features-columns {
            gap: 35px;
          }
          .feature-item {
            padding: 18px 24px;
          }
          .feature-text {
            font-size: 17px;
          }
          .video-container {
            max-width: 450px;
          }
          .play-button {
            width: 90px;
            height: 90px;
          }
          .play-icon {
            border-left: 22px solid #000;
            border-top: 14px solid transparent;
            border-bottom: 14px solid transparent;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;