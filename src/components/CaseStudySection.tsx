import React, { useRef, useState } from 'react';

const caseStudies = [
  { src: 'https://storage.googleapis.com/msgsndr/PwZCE4paYkzqicpqJecc/media/689388585016cb2c6d3db210.png', alt: 'Case Study 1' },
  { src: 'https://storage.googleapis.com/msgsndr/PwZCE4paYkzqicpqJecc/media/6893885c5016cb65153db213.png', alt: 'Case Study 2' },
  { src: 'https://storage.googleapis.com/msgsndr/PwZCE4paYkzqicpqJecc/media/68938860ed9c8f4e8889cf5a.png', alt: 'Case Study 3' },
  { src: 'https://storage.googleapis.com/msgsndr/PwZCE4paYkzqicpqJecc/media/689388640291e8c92dee5d6c.png', alt: 'Case Study 4' },
  { src: 'https://storage.googleapis.com/msgsndr/PwZCE4paYkzqicpqJecc/media/6893a09465ff15a62af15606.png', alt: 'Case Study 5' },
  { src: 'https://storage.googleapis.com/msgsndr/PwZCE4paYkzqicpqJecc/media/6893a097d69f9909fad58745.png', alt: 'Case Study 6' },
];

const CaseStudySection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative py-20 px-0 bg-gradient-to-br from-black via-[#001a33] to-[#003366] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(0,255,136,0.05)_1px,transparent_1px)] bg-[size:40px_40px] animate-caseStudyDrift"></div>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-br from-[#00ff88] to-[#00ccff] rounded-full opacity-60"
            style={{
              left: `${[10, 90, 20, 80, 50][i]}%`,
              top: `${[15, 25, 85, 75, 10][i]}%`,
              animation: `caseStudyParticleDrift 15s ease-in-out infinite`,
              animationDelay: `${i * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5">
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-16 text-center animate-slideInUp leading-tight">
          <span className="bg-gradient-to-r from-[#00ff88] via-[#00ccff] to-[#0066ff] bg-clip-text text-transparent bg-[length:200%_auto] animate-caseStudyShimmer">
            Case Study Examples
          </span>{' '}
          of Our Clients: See How They Saved Up to 65% in Time and Costs and Drove Sales by 3x on Autopilot 24/7/365 Days
        </h2>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 animate-fadeInUp">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] transition-all duration-300 cursor-pointer h-[350px] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,255,136,0.2)] hover:border-[rgba(0,255,136,0.3)]"
            >
              <img
                src={study.src}
                alt={study.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="text-center animate-fadeInUp">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-10">Watch Real Client Success Stories</h3>
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden animate-videoSlideIn">
            <div className="relative p-2 bg-gradient-to-br from-[#00ff88] via-[#00ccff] to-[#00ff88] bg-[length:400%_400%] animate-frameGradient rounded-3xl">
              <div className={`relative w-full pt-[56.25%] bg-black rounded-2xl overflow-hidden ${isPlaying ? 'playing' : ''}`}>
                <video
                  ref={videoRef}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  poster="https://storage.googleapis.com/msgsndr/PwZCE4paYkzqicpqJecc/media/689389d0ed9c8f267189d0fc.png"
                  preload="metadata"
                  controls
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  onClick={togglePlay}
                >
                  <source src="https://storage.googleapis.com/msgsndr/PwZCE4paYkzqicpqJecc/media/68978fa4e2eb0c07bb4de475.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div
                  className="absolute inset-0 bg-[rgba(0,0,0,0.3)] flex items-center justify-center cursor-pointer transition-opacity duration-300 z-10"
                  onClick={togglePlay}
                  style={{ opacity: isPlaying ? 0 : 1, pointerEvents: isPlaying ? 'none' : 'auto' }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,255,136,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_15px_40px_rgba(0,255,136,0.7)] animate-caseStudyPlayButtonPulse">
                    <div className="w-0 h-0 border-l-[25px] border-l-black border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent ml-1.5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;