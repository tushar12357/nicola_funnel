import { useEffect, useRef } from 'react';

const DemoVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handlePlay = () => {
    if (videoRef.current && videoWrapperRef.current) {
      videoRef.current.play();
      videoWrapperRef.current.classList.add('playing');
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  useEffect(() => {
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.animationPlayState = 'running';
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );
      observerRef.current.observe(videoContainer);
    }

    const video = videoRef.current;
    const videoWrapper = videoWrapperRef.current;

    const handlePlayEvent = () => videoWrapper?.classList.add('playing');
    const handlePauseEvent = () => videoWrapper?.classList.remove('playing');
    const handleEndedEvent = () => videoWrapper?.classList.remove('playing');

    video?.addEventListener('play', handlePlayEvent);
    video?.addEventListener('pause', handlePauseEvent);
    video?.addEventListener('ended', handleEndedEvent);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      video?.removeEventListener('play', handlePlayEvent);
      video?.removeEventListener('pause', handlePauseEvent);
      video?.removeEventListener('ended', handleEndedEvent);
    };
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-br from-black via-[#001a33] to-[#003366] py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(0,255,136,0.05)_1px,transparent_1px)] bg-[length:40px_40px] animate-[demoDrift_30s_linear_infinite]"
        ></div>
      </div>
      {/* Floating Particles */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 bg-gradient-to-br from-[#00ff88] to-[#00ccff] rounded-full opacity-60 animate-[demoParticleDrift_15s_ease-in-out_infinite]`}
          style={{
            left: `${[15, 85, 25, 75][i]}%`,
            top: `${[20, 30, 80, 70][i]}%`,
            animationDelay: `${i * 3}s`,
          }}
        ></div>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-5 text-center">
        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 animate-[slideInUp_0.8s_ease-out] tracking-tight">
          <span className="bg-gradient-to-br from-[#00ff88] via-[#00ccff] via-[#0066ff] via-[#ffd93d] to-[#ff6b6b] bg-clip-text text-transparent bg-[length:200%_auto] animate-[demoShimmer_3s_linear_infinite]">
            LIVE Demo:
          </span>{' '}
          Listen how BestCallerAI handles calls
        </h2>

        {/* Video Container */}
        <div
          className="video-container relative max-w-4xl lg:max-w-5xl mx-auto mt-12 sm:mt-16 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(0,255,136,0.2)] bg-gradient-to-br from-[#00ff88]/10 to-[#0066ff]/10 p-1 sm:p-2 animate-[videoSlideIn_0.8s_ease-out_0.3s_both]"
        >
          <div
            className="relative w-full pt-[56.25%] bg-black rounded-2xl overflow-hidden"
            id="videoWrapper"
            ref={videoWrapperRef}
          >
            {/* Live Indicator */}
            <div className="absolute top-4 left-4 bg-red-600/90 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 z-10">
              <div className="w-2 h-2 bg-white rounded-full animate-[livePulse_1s_ease-in-out_infinite]"></div>
              LIVE DEMO
            </div>

            {/* Video Element */}
            <video
              ref={videoRef}
              id="demoVideo"
              className="absolute top-0 left-0 w-full h-full object-cover"
              poster="https://storage.googleapis.com/msgsndr/PwZCE4paYkzqicpqJecc/media/6890e0af746eb8361a5f3f0d.png"
              preload="metadata"
              controls
              onClick={handleVideoClick}
            >
              <source
                src="https://storage.googleapis.com/msgsndr/PwZCE4paYkzqicpqJecc/media/6890e06f746eb800c95f3e81.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Play Button Overlay */}
            <div
              id="playOverlay"
              className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer transition-opacity duration-300"
              onClick={handlePlay}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,255,136,0.4)] hover:shadow-[0_15px_40px_rgba(0,255,136,0.7)] hover:scale-110 transition-all duration-300 animate-[playButtonPulse_2s_ease-in-out_infinite]">
                <div className="w-0 h-0 border-l-[20px] sm:border-l-[25px] lg:border-l-[30px] border-l-black border-t-[12px] sm:border-t-[15px] lg:border-t-[18px] border-t-transparent border-b-[12px] sm:border-b-[15px] lg:border-b-[18px] border-b-transparent ml-1 sm:ml-1.5 lg:ml-2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Book Demo Section */}
        <div className="mt-12 sm:mt-16 text-center animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 tracking-tight">
            Book a demo of the BestCallerAI system
          </h3>
          <a
            href="https://calendly.com/bestcallerai-support/30min?back=1&month=2025-07"
            target='_blank'
            className="inline-flex items-center gap-2 bg-gradient-to-br from-[#00ff88] to-[#00cc66] text-black px-10 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-[50px] shadow-2xl hover:shadow-[0_20px_50px_rgba(0,255,136,0.6),0_0_30px_rgba(0,255,136,0.8)] hover:-translate-y-1 hover:scale-105 hover:bg-gradient-to-br hover:from-[#00ff88] hover:to-[#66ffaa] transition-all duration-300 relative overflow-hidden uppercase tracking-wide border-2 border-transparent group"
          >
            Free Demo
            <span className="text-xl sm:text-2xl animate-[arrowBounce_1.5s_ease-in-out_infinite]">→</span>
            <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shineLoop_2s_ease-in-out_infinite]"></span>
            <span className="absolute inset-[-2px] rounded-[50px] bg-gradient-to-br from-[#00ff88] via-[#00ccff] to-[#0066ff] opacity-0 group-hover:opacity-100 transition-opacity z-[-1] animate-[borderGlow_1s_ease-in-out_infinite_alternate]"></span>
          </a>
        </div>
      </div>

    </section>
  );
};

export default DemoVideo;