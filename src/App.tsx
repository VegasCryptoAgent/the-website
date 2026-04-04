import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

const ProjectCard = ({ project, onClick }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      setIsLoading(true);
      videoRef.current.play().catch(() => setIsLoading(false));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsLoading(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <button 
      className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gray-800 w-full h-[300px] md:h-[calc(100vw*0.75/3-1in)] cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {project.img && (
        <img 
          src={project.img} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0" 
          referrerPolicy="no-referrer"
        />
      )}
      <video 
        ref={videoRef}
        loop 
        playsInline 
        muted
        preload="auto" 
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${project.img ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
        onPlaying={() => setIsLoading(false)}
        onWaiting={() => setIsLoading(true)}
        onLoadStart={() => setIsLoading(true)}
      >
        <source src={project.video} type="video/mp4" />
      </video>
      
      {/* Loading Spinner */}
      {isLoading && isHovered && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-12 h-12 border-4 border-orange-600/30 border-t-orange-600 rounded-full animate-spin"
          />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-6">
          <h3 className="text-3xl md:text-5xl font-bold mb-2 md:mb-3">{project.title}</h3>
          <p className="text-lg md:text-2xl text-gray-300">{project.subtitle}</p>
        </div>
      </div>
    </button>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [view, setView] = useState<"home" | "work" | "capabilities" | "team" | "contact" | "project-detail" | "anonymous-detail" | "majid-detail" | "jim-detail">("home");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const marqueeItems = [
    "Commercials",
    "Motion graphics",
    "vfx",
    "social graphics",
    "Trailers",
    "short films",
    "animations"
  ];

  const capabilities = [
    {
      num: "01",
      title: "Brand Strategy",
      desc: "Crafting compelling narratives that define your brand's unique voice and position in the market",
      points: ["Brand Identity", "Positioning", "Voice & Tone", "Market Analysis"],
      video: "https://cdn.prod.website-files.com/66d32d02750c0d5bd0fbcd9f%2F67d331b51ededa6f40c7b05d_10sec-transcode.mp4"
    },
    {
      num: "02",
      title: "Content Production",
      desc: "Full-scale video production from concept to delivery, bringing your stories to life",
      points: ["Commercial Production", "Documentary Style", "Social Content", "Motion Graphics"],
      video: "https://cdn.prod.website-files.com/66d32d02750c0d5bd0fbcd9f%2F6807ca221e6f0204ce34e406_windsmall-transcode.mp4"
    },
    {
      num: "03",
      title: "Creative Direction",
      desc: "Visionary leadership that transforms ideas into award-winning visual experiences",
      points: ["Art Direction", "Concept Development", "Visual Storytelling", "Creative Strategy"],
      video: "https://cdn.prod.website-files.com/66d32d02750c0d5bd0fbcd9f%2F67d331b51ededa6f40c7b05d_10sec-transcode.mp4"
    },
    {
      num: "04",
      title: "Post Production",
      desc: "Meticulous editing and finishing that elevates your content to perfection",
      points: ["Video Editing", "Color Grading", "Sound Design", "VFX & Animation"],
      video: "https://cdn.prod.website-files.com/66d32d02750c0d5bd0fbcd9f%2F6807ca221e6f0204ce34e406_windsmall-transcode.mp4"
    },
    {
      num: "05",
      title: "Campaign Management",
      desc: "End-to-end campaign execution that drives engagement and delivers results",
      points: ["Multi-Platform Strategy", "Performance Tracking", "Audience Targeting", "Content Distribution"],
      video: "https://cdn.prod.website-files.com/66d32d02750c0d5bd0fbcd9f%2F67d331b51ededa6f40c7b05d_10sec-transcode.mp4"
    },
    {
      num: "06",
      title: "Digital Innovation",
      desc: "Cutting-edge solutions that push boundaries and create immersive experiences",
      points: ["Interactive Content", "AR/VR Experiences", "Web Development", "Digital Platforms"],
      video: "https://cdn.prod.website-files.com/66d32d02750c0d5bd0fbcd9f%2F6807ca221e6f0204ce34e406_windsmall-transcode.mp4"
    }
  ];

  const tools = [
    { name: "SORA", src: "https://cdn.prod.website-files.com/66d32d02750c0d5bd0fbcd9f/66d874f96cc16e5711de1d9a_Layer%2019.png" },
    { name: "runway", src: "https://cdn.prod.website-files.com/66d32d02750c0d5bd0fbcd9f/66d874f934ab8e9e4becbd84_Layer%2014.png" },
    { name: "Midjourney", src: "https://cdn.prod.website-files.com/66d32d02750c0d5bd0fbcd9f/66d874f90da107ece2368dec_Layer%2016.png" },
    { name: "udio", src: "https://cdn.prod.website-files.com/66d32d02750c0d5bd0fbcd9f/66d874f9f49a9bce4aa377c7_Layer%2017.png" },
    { name: "KLING", src: "https://cdn.prod.website-files.com/66d32d02750c0d5bd0fbcd9f/66d874f934ab8e9e4becbd84_Layer%2025.png" },
    { name: "Suno", src: "https://cdn.prod.website-files.com/66d32d02750c0d5bd0fbcd9f/66d874f949cd3b8bf201341c_Layer%2015.png" },
    { name: "hedra", src: "https://cdn.prod.website-files.com/66d32d02750c0d5bd0fbcd9f/66df459296892eaf3c556418_image.png" },
    { name: "LUMA AI", src: "https://cdn.prod.website-files.com/66d32d02750c0d5bd0fbcd9f/66d874f974f2e8af519812c5_Layer%2021.png" },
    { name: "Leonardo.AI", src: "https://cdn.prod.website-files.com/66d32d02750c0d5bd0fbcd9f/66e36871745f9d4e37cddacf_leonardo-logo-white.svg" },
    { name: "MAGNIFIC", src: "https://cdn.prod.website-files.com/66d32d02750c0d5bd0fbcd9f/66d874f9fd3ce7c39760a4d4_Layer%2023.png" },
    { name: "Eleven Labs", src: "https://cdn.prod.website-files.com/66d32d02750c0d5bd0fbcd9f/66d874f950920c0ed90cd1b0_Layer%2024.png" },
    { name: "hotshot", src: "https://cdn.prod.website-files.com/66d32d02750c0d5bd0fbcd9f/66eb19490960ed5a134027d0_hotshot.png" }
  ];

  const workProjects = [
    { title: "America 250", img: "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/6Frame%20Images/thumb.jpg", video: "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/Website%20Videos/america_250_generations_in_360_v1%20(1440p).mp4" },
    { title: "Slab", subtitle: "Horror Film", img: "https://vumbnail.com/1129542989.jpg", video: "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/Website%20Videos/slab_v2%20(1080p)%20(1).mp4" },
    { title: "The 27 Protocol", subtitle: "AI Movie Trailer", img: "https://i.imgur.com/kX9g0Q0.jpg", video: "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/Website%20Videos/the_27_protocol_v1%20(1080p).mp4" },
    { title: "Home of the Brave", subtitle: "Nationally Syndicated Television Show", img: "https://i.imgur.com/LabuVQH.jpeg", video: "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/Website%20Videos/home_of_the_brave_website_video_v1%20(2160p).mp4" },
    { title: "ReThink", subtitle: "Digital Marketing Product Campaign", img: "https://i.imgur.com/17O8SUf.jpeg", video: "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/Website%20Videos/rethink_commercial_v1%20(1440p).mp4" },
    { title: "the us", subtitle: "AI Movie Trailer", img: "https://i.imgur.com/NLUaXdk.jpeg", video: "https://player.vimeo.com/progressive_redirect/playback/1130711211/rendition/2160p/file.mp4?loc=external&signature=59a190d395ca9c0e793705980e6fa41a3ad672ed9c723b964e223eca8e666758" },
    { title: "Tesla", subtitle: "Product Content Creation", img: "https://i.imgur.com/shoacMQ.png", video: "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/Website%20Videos/tesla_america_commercial_v1%20(1440p).mp4" },
    { title: "Manifest Nueve", subtitle: "Fragrance Commercial", img: "https://i.imgur.com/HH41q4s.png", video: "https://player.vimeo.com/progressive_redirect/playback/1127254270/rendition/720p/file.mp4?loc=external&signature=4a0fc72984abdbe1edc8460cfc8049179a1aea53808f7ae083837014fed3a756" },
    { title: "Full House Parody", subtitle: "Brand Commercial", img: "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/6Frame%20Images/thumb%20(1)%20(1).jpg", video: "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/Website%20Videos/full_house_parady_v1%20(1080p).mp4" },
    { title: "Belmont", subtitle: "Horror Film", img: "https://i.imgur.com/YDPvpzU.png", video: "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/Website%20Videos/belmont_v1%20(1440p)%20(1)%20(1)%20(1).mp4" },
    { title: "Home of the Brave", subtitle: "Nationally Syndicated Television Show", img: "https://i.imgur.com/xYOiBEQ.png", video: "https://player.vimeo.com/progressive_redirect/playback/1127293716/rendition/720p/file.mp4?loc=external&signature=2c01423127663514777a1e9f9f42590d7dc1410cafa19a5ac845344db8ff3550" },
    { title: "Par For The Course", subtitle: "AI Comedy Short", img: "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/6Frame%20Images/hf_20260331_144302_3234ea01-5672-47e2-8131-f90dd1b02e31.jpg", video: "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/Website%20Videos/Par%20For%20The%20Course.mp4" },
    { title: "The Rarest of History", subtitle: "AI Film Short", img: "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/6Frame%20Images/thumb%20(2).jpg", video: "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/Website%20Videos/the_rarest_of_history_v1%20(1440p).mp4" },
    { title: "El Patron", subtitle: "Movie Trailer", img: "https://6frame.com/gemini_generated_image_yrw2opyrw2opyrw2.jpeg", video: "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/Website%20Videos/el_patron_v1%20(1080p).mp4" },
    { title: "The Thorn Recordings", subtitle: "AI Film Trailer", img: "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/6Frame%20Images/thumb%20(1).jpg", video: "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/Website%20Videos/the_thorne_recordings_v1%20(1080p).mp4" },
  ];

  const processSteps = [
    { num: "01", title: "Discovery", desc: "Deep dive into your brand, goals, and audience to uncover unique insights" },
    { num: "02", title: "Strategy", desc: "Develop a comprehensive creative roadmap aligned with your objectives" },
    { num: "03", title: "Creation", desc: "Bring concepts to life with world-class production and craftsmanship" },
    { num: "04", title: "Refinement", desc: "Polish every detail through meticulous review and iteration" },
    { num: "05", title: "Delivery", desc: "Launch your content with precision and measure its impact" }
  ];

  const teamMembers = [
    { name: "Jim Chevious", role: "Creative Director", img: "https://i.imgur.com/a1MeVFs.png" },
    { name: "Majid Zafer", role: "Lead Producer", img: "https://i.imgur.com/OWfiqjP.png" },
    { name: "Anonymous Content", role: "Advisor", img: "https://i.imgur.com/xyQX7jS.jpeg" }
  ];

  const whyUs = [
    { num: "01", title: "Creative Excellence", desc: "Innovative storytelling that makes your brand unforgettable", video: "https://cdn.prod.website-files.com/66d32d02750c0d5bd0fbcd9f%2F67d331b51ededa6f40c7b05d_10sec-transcode.mp4" },
    { num: "02", title: "Strategic Thinking", desc: "Data-driven insights that resonate and convert", video: "https://cdn.prod.website-files.com/66d32d02750c0d5bd0fbcd9f%2F6807ca221e6f0204ce34e406_windsmall-transcode.mp4" },
    { num: "03", title: "End-to-End Production", desc: "Seamless execution from concept to final delivery", video: "https://player.vimeo.com/progressive_redirect/playback/1135047732/rendition/2160p/file.mp4?loc=external&signature=daf5723e8d515aaad4382d70fc1fd96aed3683018de235d28c42a324b24c81e2" },
    { num: "04", title: "Collaborative Partnership", desc: "Your vision meets our expertise as true partners", video: "https://player.vimeo.com/progressive_redirect/playback/1135055541/rendition/2160p/file.mp4%20%282160p%29.mp4?loc=external&signature=dd2788695089d50bed973b3f50612490b1b080acc4250f62f63e359053631aa3" }
  ];

  const handleNavClick = (e: React.MouseEvent, target: "home" | "work" | "capabilities" | "team" | "contact" | "project-detail") => {
    e.preventDefault();
    setView(target);
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  return (
    <div className="text-white selection:bg-white selection:text-black" style={{ backgroundColor: "rgb(25, 25, 25)" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "rgb(25, 25, 25)" }}>
        <div className="px-6 lg:pl-[1in] lg:pr-12">
          <div className="flex items-center justify-between h-24">
            <a className="flex items-center lg:-ml-[0.5in]" href="/" onClick={(e) => handleNavClick(e, "home")}>
              <img src="https://i.imgur.com/3T135v2.jpeg" alt="6FRAME Logo" className="h-16 lg:h-24" />
            </a>
            <div className="flex-1"></div>
            <div className="hidden lg:flex items-center gap-8">
              {["home", "Work", "Capabilities", "Team", "Contact"].map((item) => (
                <a 
                  key={item} 
                  className={`text-sm uppercase tracking-wider hover:text-gray-300 transition ${view === item.toLowerCase() ? 'text-white' : 'text-gray-500'}`} 
                  href={`/${item.toLowerCase()}`}
                  onClick={(e) => {
                    const t = item.toLowerCase();
                    if (t === "home" || t === "work" || t === "capabilities" || t === "team" || t === "contact") {
                      handleNavClick(e, t as "home" | "work" | "capabilities" | "team" | "contact");
                    }
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[rgb(25,25,25)] flex flex-col items-center justify-center gap-8">
          {["home", "Work", "Capabilities", "Team", "Contact"].map((item) => (
            <a 
              key={item} 
              className="text-4xl uppercase font-bold tracking-tighter" 
              href={`/${item.toLowerCase()}`}
              onClick={(e) => {
                const t = item.toLowerCase();
                if (t === "home" || t === "work" || t === "capabilities" || t === "team" || t === "contact") {
                  handleNavClick(e, t as "home" | "work" | "capabilities" | "team" | "contact");
                }
              }}
            >
              {item}
            </a>
          ))}
          <button className="absolute top-8 right-8 p-2" onClick={() => setIsMenuOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      )}

      <div className="fade-in">
        {view === "home" ? (
          <>
            {/* Hero Section */}
            <section className="relative pt-32 md:pt-8">
              <div className="relative w-full px-4 pt-[0.5in] md:pt-0 md:px-0 md:aspect-video md:overflow-hidden md:pt-[0.5in] md:px-[0.5in] md:pb-[0.5in]">
                <video 
                  className="w-full aspect-video rounded-xl md:absolute md:top-[0.75in] md:left-[0.75in] md:right-[0.75in] md:bottom-[0.75in] md:w-[calc(100%-1.5in)] md:h-[calc(100%-1.5in)] object-cover md:rounded-[3rem]" 
                  loop 
                  playsInline 
                  controls 
                  autoPlay 
                  muted
                >
                  <source src="https://player.vimeo.com/progressive_redirect/playback/1124831601/rendition/2160p/file.mp4?loc=external&signature=324ebbf9d705adc5d26ba8d48ec5d8523a09736b92a562f55588628464780e28" type="video/mp4" />
                </video>
              </div>
            </section>

            {/* Quote Section */}
            <section className="py-16 md:py-32 lg:py-48 relative">
              <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col justify-center min-h-[200px] md:min-h-[400px]">
                  <h2 className="text-3xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-tight mb-8 md:mb-24 text-gray-50 break-words md:-ml-24">
                    "A creative shop with deep expertise in generative AI." - Forbes
                  </h2>
                </div>
              </div>
            </section>

            {/* Video Grid Section */}
            <section className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 bg-[#191919] py-8 md:py-16 px-4 md:px-16">
              <div className="w-full md:flex-1 aspect-video rounded-xl md:rounded-2xl border border-white/[0.08] overflow-hidden bg-[#121212] shadow-[0_0_24px_rgba(0,0,0,0.4)] flex justify-center items-center transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_32px_rgba(255,255,255,0.05)] md:hover:scale-[1.01]">
                <div className="w-full h-full">
                  <video loop playsInline autoPlay muted className="w-full h-full object-cover">
                    <source src="https://xcrovtedmijtyxshpgyn.supabase.co/storage/v1/object/public/videos/reel-1.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="w-full md:flex-1 aspect-video rounded-xl md:rounded-2xl border border-white/[0.08] overflow-hidden bg-[#121212] shadow-[0_0_24px_rgba(0,0,0,0.4)] flex justify-center items-center transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_32px_rgba(255,255,255,0.05)] md:hover:scale-[1.01]">
                <div className="w-full h-full">
                  <video loop playsInline autoPlay muted className="w-full h-full object-cover">
                    <source src="https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/Website%20Videos/upscale%20explosion.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="w-full md:flex-1 aspect-video rounded-xl md:rounded-2xl border border-white/[0.08] overflow-hidden bg-[#121212] shadow-[0_0_24px_rgba(0,0,0,0.4)] flex justify-center items-center transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_32px_rgba(255,255,255,0.05)] md:hover:scale-[1.01]">
                <div className="w-full h-full">
                  <video loop playsInline autoPlay muted className="w-full h-full object-cover">
                    <source src="https://xcrovtedmijtyxshpgyn.supabase.co/storage/v1/object/public/videos/reel-2.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </section>

            {/* Seamless Marquee */}
            <section className="py-8 md:py-12 overflow-hidden border-y border-white/[0.08]" style={{ backgroundColor: "rgb(25, 25, 25)" }}>
              <div className="relative flex">
                <div className="flex animate-scroll-seamless items-center whitespace-nowrap">
                  {marqueeItems.map((item, i) => (
                    <div key={i} className="flex items-center">
                      <span className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase tracking-wider px-4 md:px-6">{item}</span>
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-orange-500 flex-shrink-0 mx-4 md:mx-6"></div>
                    </div>
                  ))}
                </div>
                <div className="flex animate-scroll-seamless items-center whitespace-nowrap" aria-hidden="true">
                  {marqueeItems.map((item, i) => (
                    <div key={`dup-${i}`} className="flex items-center">
                      <span className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase tracking-wider px-4 md:px-6">{item}</span>
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-orange-500 flex-shrink-0 mx-4 md:mx-6"></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Lab Video Section */}
            <section className="py-8 md:py-16 lg:py-24">
              <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-12 uppercase leading-tight">Innovative AI Video<br />Creation Lab</h2>
                <div className="relative" style={{ paddingBottom: "75%" }}>
                  <video loop playsInline autoPlay muted className="absolute top-0 left-0 w-full h-full rounded-lg object-cover">
                    <source src="https://xcrovtedmijtyxshpgyn.supabase.co/storage/v1/object/public/videos/lab-video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-12 md:py-24 lg:py-32" style={{ backgroundColor: "rgb(25, 25, 25)" }}>
              <div className="max-w-[1440px] mx-auto px-6 lg:px-12 lg:ml-[calc(50%-816px)]">
                <div className="mb-10 md:mb-20">
                  <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight">video. motion.</h2>
                  <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight">sound. Ethics.</h2>
                </div>
                <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
                  <div className="lg:col-span-5"></div>
                  <div className="lg:col-span-7 mt-24">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-wide leading-[1.3] mb-4 md:mb-6">
                      A.I. HAS RADICALLY CHANGED THE CREATIVE INDUSTRY.
                    </h1>
                    <h2 className="text-lg md:text-2xl lg:text-3xl font-medium leading-[1.5] mb-6 md:mb-10 text-[rgb(220,220,220)]">
                      Enhanced Ideation. Streamlined Workflows. Personalized Content. Collaboration And Exploration. Democratization Of Creativity.
                    </h2>
                  </div>
                </div>
              </div>
            </section>

            {/* Work Grid */}
            <section id="our-work" className="py-8 md:py-16 lg:py-24" style={{ backgroundColor: "rgb(25, 25, 25)" }}>
              <div className="max-w-[2600px] mx-auto px-4 md:px-6 lg:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 mb-8 md:mb-16">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="aspect-[16/9] bg-gray-900 rounded-xl md:rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
                      <video loop playsInline autoPlay muted className="w-full h-full object-cover">
                        <source src={`https://xcrovtedmijtyxshpgyn.supabase.co/storage/v1/object/public/videos/grid-${num}.mp4`} type="video/mp4" />
                      </video>
                    </div>
                  ))}
                </div>
                <h2 className="text-white text-[12vw] md:text-[120px] lg:text-[200px] font-black leading-none text-center tracking-tight">OUR WORK</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 mt-8 md:mt-16">
                  <div className="aspect-[16/9] bg-gray-900 rounded-xl md:rounded-2xl overflow-hidden relative group cursor-pointer transition-transform hover:scale-[1.02]">
                    <video loop playsInline autoPlay muted className="w-full h-full object-cover">
                      <source src="https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/Website%20Videos/upscale%20racing.mp4" type="video/mp4" />
                    </video>
                  </div>
                  {[2, 3, 4].map((num) => (
                    <div key={`bottom-${num}`} className="aspect-[16/9] bg-gray-900 rounded-xl md:rounded-2xl overflow-hidden relative group cursor-pointer transition-transform hover:scale-[1.02]">
                      <video loop playsInline autoPlay muted className="w-full h-full object-cover">
                        <source src={`https://xcrovtedmijtyxshpgyn.supabase.co/storage/v1/object/public/videos/grid-bottom-${num}.mp4`} type="video/mp4" />
                      </video>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Preferred Tools */}
            <section className="pt-16 pb-12 md:pt-24 lg:pt-32 bg-[#191919]">
              <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-24 text-gray-500 uppercase tracking-wider">PREFERRED TOOLS</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l border-t border-white/10">
                  {tools.map((tool, i) => (
                    <div key={i} className="flex items-center justify-center h-[160px] md:h-[240px] lg:h-[320px] border-r border-b border-white/10 bg-[#1a1a1a] hover:bg-white/5 transition-colors duration-300">
                      <img src={tool.src} alt={tool.name} className="max-w-[60%] h-auto object-contain" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : view === "work" ? (
          /* Work Page */
          <div className="min-h-screen pt-32">
            <div className="max-w-[3000px] mx-auto px-6 lg:px-12">
              <h1 className="text-[3rem] md:text-[10rem] lg:text-[14rem] font-bold mb-8 text-center leading-none mt-16 md:mt-[1.75in]">6FRAME WORK</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
                {workProjects.map((project, i) => (
                  <ProjectCard 
                    key={i} 
                    project={project} 
                    onClick={() => {
                      setSelectedProject(project);
                      setView("project-detail");
                      window.scrollTo(0, 0);
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Marquee for Work Page */}
            <section className="mt-16 md:mt-[3in] mb-8 md:mb-[calc(1.5rem+2in)] overflow-hidden border-y border-white/[0.08] cursor-pointer hover:bg-[#1f1f1f] transition-colors duration-300" onClick={() => setView("contact")}>
              <div className="relative flex py-6 md:py-8">
                <div className="flex animate-scroll-seamless items-center whitespace-nowrap">
                  <h2 className="text-[6rem] md:text-[12rem] lg:text-[16rem] font-bold text-white px-6 md:px-8">CLICK HERE</h2>
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-orange-500 mx-3 md:mx-4"></div>
                  <h2 className="text-[6rem] md:text-[12rem] lg:text-[16rem] font-bold text-white px-6 md:px-8">CLICK HERE</h2>
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-orange-500 mx-3 md:mx-4"></div>
                </div>
                <div className="flex animate-scroll-seamless items-center whitespace-nowrap" aria-hidden="true">
                  <h2 className="text-[6rem] md:text-[12rem] lg:text-[16rem] font-bold text-white px-6 md:px-8">CLICK HERE</h2>
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-orange-500 mx-3 md:mx-4"></div>
                  <h2 className="text-[6rem] md:text-[12rem] lg:text-[16rem] font-bold text-white px-6 md:px-8">CLICK HERE</h2>
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-orange-500 mx-3 md:mx-4"></div>
                </div>
              </div>
            </section>

            {/* Infinite Creativity Section */}
            <div className="max-w-[3000px] mx-auto px-6 lg:px-12">
              <div className="mb-16 relative overflow-hidden">
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] animate-pulse"></div>
                  <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] animate-pulse delay-1000"></div>
                </div>
                <div className="relative">
                  <div className="mb-12 md:mb-24">
                    <h2 className="text-[15vw] md:text-[10rem] lg:text-[16rem] font-bold mb-6 mt-8 md:mt-[1in] text-white leading-[0.85]">INFINITE<br />CREATIVITY</h2>
                  </div>
                  <div className="relative h-[400px] md:h-[600px] lg:h-[800px]">
                    <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {[
                        "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/Website%20Videos/upscale.mp4",
                        "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/Website%20Videos/hf_20260403_165118_e699b095-b751-4097-a0e4-c668cd44c17c.mp4",
                        "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/Website%20Videos/upscale%20girl%20fight%20(1).mp4"
                      ].map((src, i) => (
                        <div key={i} className={`relative h-full ${i > 0 ? 'hidden lg:block' : ''}`}>
                          <div className="absolute inset-0 bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl">
                            <video loop playsInline autoPlay muted className="absolute inset-0 w-full h-full object-cover">
                              <source src={src} type="video/mp4" />
                            </video>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : view === "team" ? (
          /* Team Page */
          <div className="min-h-screen pt-24 md:pt-32">
            <div className="max-w-[3000px] mx-auto px-6 lg:px-12">
              <h1 className="text-[4rem] md:text-[7rem] lg:text-[11rem] font-bold text-center leading-none mb-12 md:mb-16 lg:mb-24 mt-16 md:mt-56">6FRAME TEAM</h1>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {teamMembers.map((member, i) => (
                  <button 
                    key={i} 
                    className="group relative overflow-hidden bg-black aspect-[3/3.75] cursor-pointer"
                    onClick={() => {
                      if (member.name === "Anonymous Content") {
                        setView("anonymous-detail");
                      } else if (member.name === "Majid Zafer") {
                        setView("majid-detail");
                      } else if (member.name === "Jim Chevious") {
                        setView("jim-detail");
                      }
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10"></div>
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{member.name}</h3>
                      <p className="text-base md:text-lg text-gray-300">{member.role}</p>
                    </div>
                  </button>
                ))}
                <div className="group relative overflow-hidden bg-black lg:col-span-3 mt-[1in] rounded-3xl aspect-[3/1.25]">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10"></div>
                  <video 
                    src="https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/Website%20Videos/hf_20260331_191051_eeaec333-9394-46b3-bf6b-13b585523cbf%20(1)%20(3).mp4" 
                    autoPlay 
                    loop 
                    playsInline 
                    muted 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <section className="mt-16 md:mt-32 lg:mt-48 overflow-hidden">
                <div className="py-12 md:py-24 lg:py-32">
                  <h2 className="text-[4rem] md:text-[10rem] lg:text-[15rem] xl:text-[20rem] font-black text-center leading-none tracking-tight mb-16 md:mb-32 uppercase">WHY US</h2>
                  <div className="flex flex-col gap-0 border-t border-white/[0.08]">
                    {whyUs.map((item, i) => (
                      <div key={i} className="group relative border-b border-white/[0.08] transition-all duration-500 hover:border-orange-600/30">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 via-orange-600/5 to-orange-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative flex items-center justify-between px-6 md:px-12 py-12 md:py-16 lg:py-20">
                          <div className="flex items-center gap-6 md:gap-12 lg:gap-16">
                            <span className="text-5xl md:text-7xl lg:text-9xl font-bold text-orange-600">{item.num}</span>
                            <div>
                              <h3 className="text-2xl md:text-4xl lg:text-6xl font-bold uppercase mb-4">{item.title}</h3>
                              <p className="text-base md:text-xl lg:text-2xl text-gray-400 max-w-3xl">{item.desc}</p>
                            </div>
                          </div>
                          <div className="hidden lg:block w-64 h-64 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <video loop playsInline autoPlay muted className="w-full h-full object-cover">
                              <source src={item.video} type="video/mp4" />
                            </video>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="py-12 md:py-20 overflow-hidden border-y border-white/[0.08]">
                  <div className="relative flex">
                    <div className="flex animate-scroll-seamless items-center whitespace-nowrap">
                      {[1, 2].map((_, i) => (
                        <React.Fragment key={i}>
                          <div className="flex items-center">
                            <span className="text-4xl md:text-6xl lg:text-9xl font-bold uppercase tracking-wider px-8">READY TO CREATE</span>
                            <div className="w-4 h-4 rounded-full bg-orange-600 flex-shrink-0 mx-8"></div>
                          </div>
                          <div className="flex items-center">
                            <span className="text-4xl md:text-6xl lg:text-9xl font-bold uppercase tracking-wider px-8">SOMETHING</span>
                            <div className="w-4 h-4 rounded-full bg-orange-600 flex-shrink-0 mx-8"></div>
                          </div>
                          <div className="flex items-center">
                            <span className="text-4xl md:text-6xl lg:text-9xl font-bold uppercase tracking-wider px-8">EXTRAORDINARY</span>
                            <div className="w-4 h-4 rounded-full bg-orange-600 flex-shrink-0 mx-8"></div>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                    <div className="flex animate-scroll-seamless items-center whitespace-nowrap" aria-hidden="true">
                      {[1, 2].map((_, i) => (
                        <React.Fragment key={i}>
                          <div className="flex items-center">
                            <span className="text-4xl md:text-6xl lg:text-9xl font-bold uppercase tracking-wider px-8">READY TO CREATE</span>
                            <div className="w-4 h-4 rounded-full bg-orange-600 flex-shrink-0 mx-8"></div>
                          </div>
                          <div className="flex items-center">
                            <span className="text-4xl md:text-6xl lg:text-9xl font-bold uppercase tracking-wider px-8">SOMETHING</span>
                            <div className="w-4 h-4 rounded-full bg-orange-600 flex-shrink-0 mx-8"></div>
                          </div>
                          <div className="flex items-center">
                            <span className="text-4xl md:text-6xl lg:text-9xl font-bold uppercase tracking-wider px-8">EXTRAORDINARY</span>
                            <div className="w-4 h-4 rounded-full bg-orange-600 flex-shrink-0 mx-8"></div>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        ) : view === "contact" ? (
          /* Contact Page */
          <div className="min-h-screen pt-24 md:pt-32">
            <div className="max-w-[3000px] mx-auto px-6 lg:px-12">
              <h1 className="text-[4rem] md:text-[7rem] lg:text-[11rem] font-bold text-center leading-none mb-6 md:mb-8 mt-12 md:mt-16 md:mt-56">LET'S TALK</h1>
              <p className="text-base md:text-xl lg:text-xl md:text-2xl text-center text-gray-400 max-w-3xl mx-auto mb-8 md:mb-12 md:mb-24">Ready to bring your vision to life? We're here to create something extraordinary together.</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 mb-32">
                <div>
                  <h2 className="text-xl md:text-2xl md:text-4xl lg:text-6xl font-bold mb-8 md:mb-12 uppercase">Get In Touch</h2>
                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="name" className="block text-sm uppercase tracking-wider mb-3 text-gray-400">Name *</label>
                        <input type="text" id="name" name="name" required className="w-full bg-transparent border-b-2 border-white/20 focus:border-orange-600 py-3 px-0 text-lg transition-colors outline-none" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm uppercase tracking-wider mb-3 text-gray-400">Email *</label>
                        <input type="email" id="email" name="email" required className="w-full bg-transparent border-b-2 border-white/20 focus:border-orange-600 py-3 px-0 text-lg transition-colors outline-none" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="company" className="block text-sm uppercase tracking-wider mb-3 text-gray-400">Company</label>
                        <input type="text" id="company" name="company" className="w-full bg-transparent border-b-2 border-white/20 focus:border-orange-600 py-3 px-0 text-lg transition-colors outline-none" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm uppercase tracking-wider mb-3 text-gray-400">Phone</label>
                        <input type="tel" id="phone" name="phone" className="w-full bg-transparent border-b-2 border-white/20 focus:border-orange-600 py-3 px-0 text-lg transition-colors outline-none" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-sm uppercase tracking-wider mb-3 text-gray-400">Project Type</label>
                      <select id="projectType" name="projectType" className="w-full bg-transparent border-b-2 border-white/20 focus:border-orange-600 py-3 px-0 text-lg transition-colors outline-none cursor-pointer">
                        <option value="" className="bg-[#191919]">Select a project type</option>
                        <option value="brand-video" className="bg-[#191919]">Brand Video</option>
                        <option value="commercial" className="bg-[#191919]">Commercial</option>
                        <option value="social-content" className="bg-[#191919]">Social Content</option>
                        <option value="documentary" className="bg-[#191919]">Documentary</option>
                        <option value="animation" className="bg-[#191919]">Animation</option>
                        <option value="other" className="bg-[#191919]">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm uppercase tracking-wider mb-3 text-gray-400">Tell us about your project *</label>
                      <textarea id="message" name="message" required rows={6} className="w-full bg-transparent border-b-2 border-white/20 focus:border-orange-600 py-3 px-0 text-lg transition-colors outline-none resize-none"></textarea>
                    </div>
                    <button type="submit" className="group relative overflow-hidden bg-orange-600 px-12 py-6 rounded-full border border-orange-600 hover:border-white transition-all duration-300">
                      <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                      <span className="relative z-10 text-xl font-bold uppercase tracking-wider group-hover:text-black transition-colors duration-300">Send Message</span>
                    </button>
                  </form>
                </div>
                
                <div className="lg:pl-12">
                  <h2 className="text-xl md:text-2xl md:text-4xl lg:text-6xl font-bold mb-8 md:mb-12 uppercase">Contact Info</h2>
                  <div className="space-y-10">
                    <div className="group">
                      <div className="flex items-start gap-6">
                        <div className="p-4 bg-orange-600/10 rounded-full group-hover:bg-orange-600 transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 uppercase">Email</h3>
                          <a href="mailto:majid@dcrbn.io" className="text-lg text-gray-400 hover:text-orange-600 transition-colors">majid@dcrbn.io</a>
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <div className="flex items-start gap-6">
                        <div className="p-4 bg-orange-600/10 rounded-full group-hover:bg-orange-600 transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 uppercase">Phone</h3>
                          <a href="tel:+18472936760" className="text-lg text-gray-400 hover:text-orange-600 transition-colors">+1 (847) 293-6760</a>
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <div className="flex items-start gap-6">
                        <div className="p-4 bg-orange-600/10 rounded-full group-hover:bg-orange-600 transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 uppercase">Location</h3>
                          <p className="text-lg text-gray-400">Las Vegas, NV</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 md:mt-16 p-8 bg-white/5 rounded-2xl border border-white/10">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase">Business Hours</h3>
                    <div className="space-y-2 text-gray-400">
                      <p className="flex justify-between"><span>Monday - Friday:</span><span className="text-white">9:00 AM - 6:00 PM</span></p>
                      <p className="flex justify-between"><span>Saturday:</span><span className="text-white">10:00 AM - 4:00 PM</span></p>
                      <p className="flex justify-between"><span>Sunday:</span><span className="text-white">Closed</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : view === "capabilities" ? (
          /* Capabilities Page */
          <div className="min-h-screen">
            <section className="relative pt-8">
              <div className="relative w-full overflow-hidden px-4 md:aspect-video md:pt-[0.5in] md:px-[0.5in] md:pb-[2.5in]">
                <video className="w-full aspect-video md:absolute md:top-[0.75in] md:left-[0.75in] md:right-[0.75in] md:bottom-[2.75in] md:w-[calc(100%-1.5in)] md:h-[calc(100%-3.5in)] object-cover rounded-2xl md:rounded-[3rem]" autoPlay loop playsInline muted>
                  <source src="https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/Website%20Videos/moley_v1%20(2160p).mp4" type="video/mp4" />
                </video>
              </div>
              <div className="text-center px-6 pt-8 md:pt-16 pb-8">
                <h1 className="text-[3rem] md:text-[7rem] lg:text-[10rem] xl:text-[13rem] font-black leading-none uppercase tracking-tight md:-translate-y-[2in]">6FRAME CAPABILITIES</h1>
                <p className="text-xl md:text-4xl lg:text-5xl text-gray-300 max-w-4xl translate-y-[0.25in] md:translate-x-[2.5in] md:-translate-y-[1.25in] text-left">
                  We transform brands<br />through exceptional<br />storytelling and<br />innovative production
                </p>
              </div>
            </section>

            <div className="max-w-[3000px] mx-auto px-6 lg:px-12 pt-8 md:pt-32 md:-mt-[2in]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-white/[0.08]">
                {capabilities.map((cap, i) => (
                  <div key={i} className={`group relative border-b border-white/[0.08] transition-all duration-500 hover:border-orange-600/30 ${i % 2 === 0 ? 'lg:border-r' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 via-orange-600/5 to-orange-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative p-6 md:p-12 lg:p-16 min-h-[400px] md:min-h-[600px] flex flex-col">
                      <div className="mb-8"><span className="text-6xl md:text-8xl lg:text-9xl font-bold text-orange-600 opacity-30">{cap.num}</span></div>
                      <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 leading-tight">{cap.title}</h3>
                      <p className="text-base md:text-xl lg:text-2xl text-gray-400 mb-8 leading-relaxed">{cap.desc}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-12">
                        {cap.points.map((point, j) => (
                          <div key={j} className="flex items-center gap-2 md:gap-3 text-sm md:text-lg text-gray-300">
                            <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-auto overflow-hidden rounded-lg md:rounded-xl h-48 md:h-64 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <video autoPlay loop playsInline muted className="w-full h-full object-cover">
                          <source src={cap.video} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Our Process Section */}
              <section className="py-16 md:py-32 lg:py-48 overflow-hidden">
                <div className="text-center mb-12 md:mb-24">
                  <div className="relative overflow-hidden whitespace-nowrap">
                    <div className="inline-flex animate-scroll-seamless items-center">
                      {[1, 2, 3, 4].map((_, i) => (
                        <React.Fragment key={i}>
                          <h2 className="text-[4rem] md:text-[8rem] lg:text-[12rem] font-black leading-none uppercase tracking-tight mb-8">OUR PROCESS</h2>
                          <div className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 rounded-full bg-orange-600 mx-6 md:mx-8 lg:mx-12 mb-6 md:mb-8"></div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-0">
                  {processSteps.map((step, i) => (
                    <div key={i} className="group relative border-t border-white/[0.08] last:border-b transition-all duration-500 hover:border-orange-600/30">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 via-orange-600/5 to-orange-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="relative flex items-center gap-4 md:gap-8 lg:gap-16 px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16">
                        <span className="text-4xl md:text-6xl lg:text-8xl font-bold text-orange-600 min-w-[60px] md:min-w-[120px]">{step.num}</span>
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-4xl lg:text-6xl font-bold uppercase mb-2 md:mb-4">{step.title}</h3>
                          <p className="text-base md:text-xl lg:text-2xl text-gray-400 max-w-3xl">{step.desc}</p>
                        </div>
                        <div className="hidden lg:flex items-center justify-center w-24 h-24 rounded-full border-2 border-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <svg className="w-8 h-8 text-orange-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M9 5l7 7-7 7"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        ) : view === "anonymous-detail" ? (
          <div className="min-h-screen pt-24 md:pt-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <button 
                onClick={() => setView("team")}
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 md:mb-12"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left w-5 h-5 group-hover:-translate-x-1 transition-transform">
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
                Back to Team
              </button>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-24">
                <div className="relative overflow-hidden rounded-3xl aspect-[3/4] bg-black">
                  <img src="https://i.imgur.com/xyQX7jS.jpeg" alt="Anonymous Content" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-none">Anonymous Content</h1>
                  <p className="text-2xl md:text-3xl text-orange-500 mb-8 md:mb-12">The Unknown</p>
                  <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                    <p>The Headliner You Didn't Know You Needed. Where others see algorithms, I see art. Where they build systems, I compose.</p>
                    <p>Architected Vibe Coding, a whole philosophical rebellion that fuses raw human emotion with AI's turbocharged logic. Every line of script is a brushstroke on a digital canvas.</p>
                    <p>AI isn't a tool; it's a collaborator that riffs alongside you like a jazz musician who never stops.</p>
                    <p>Data is art and algorithms have soul.</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Key Achievements</h2>
                  <ul className="space-y-4">
                    {["I'm not", "Like them", "But I can", "Pretend"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-lg md:text-xl text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Areas of Expertise</h2>
                  <div className="flex flex-wrap gap-3">
                    {["Brand Strategy", "Market Research", "Audience Analytics", "Competitive Positioning", "Content Strategy"].map((skill, i) => (
                      <span key={i} className="px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-base md:text-lg text-orange-400">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <section className="mb-16 md:mb-24 overflow-hidden border-y border-white/[0.08] cursor-pointer hover:bg-[#1f1f1f] transition-colors duration-300" style={{ backgroundColor: "rgb(25, 25, 25)" }}>
              <div className="relative flex py-6 md:py-8">
                <div className="flex animate-scroll-seamless items-center whitespace-nowrap">
                  {[1, 2, 3, 4, 5, 6].map((_, i) => (
                    <div key={i} className="flex items-center">
                      <h2 className="text-[4rem] md:text-[8rem] lg:text-[12rem] font-bold text-white px-6 md:px-8 uppercase">LET'S WORK TOGETHER</h2>
                      <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-orange-500 mx-3 md:mx-4"></div>
                    </div>
                  ))}
                </div>
                <div className="flex animate-scroll-seamless items-center whitespace-nowrap" aria-hidden="true">
                  {[1, 2, 3, 4, 5, 6].map((_, i) => (
                    <div key={i} className="flex items-center">
                      <h2 className="text-[4rem] md:text-[8rem] lg:text-[12rem] font-bold text-white px-6 md:px-8 uppercase">LET'S WORK TOGETHER</h2>
                      <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-orange-500 mx-3 md:mx-4"></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        ) : view === "majid-detail" ? (
          <div className="min-h-screen pt-24 md:pt-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <button 
                onClick={() => setView("team")}
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 md:mb-12"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left w-5 h-5 group-hover:-translate-x-1 transition-transform">
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
                Back to Team
              </button>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-24">
                <div className="relative overflow-hidden rounded-3xl aspect-[3/4] bg-black">
                  <img src="https://i.imgur.com/OWfiqjP.png" alt="Majid Zafer" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-none">Majid Zafer</h1>
                  <p className="text-2xl md:text-3xl text-orange-500 mb-8 md:mb-12">Lead Producer</p>
                  <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                    <p>Majid brings a decade of production excellence to every project, seamlessly orchestrating complex shoots and delivering exceptional results on time and on budget.</p>
                    <p>His meticulous attention to detail and ability to solve problems under pressure has made him an invaluable asset to both clients and creative teams. Majid has produced content across 30+ countries, managing everything from intimate brand stories to large-scale commercial productions.</p>
                    <p>Known for his collaborative approach and unwavering commitment to quality, Majid ensures every production exceeds expectations while maintaining the creative vision.</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Key Achievements</h2>
                  <ul className="space-y-4">
                    {[
                      "Produced 200+ commercial projects",
                      "International production across 30+ countries",
                      "Producer's Guild Award Nominee",
                      "Featured in Production Weekly"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-lg md:text-xl text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Areas of Expertise</h2>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Production Management",
                      "Budget Optimization",
                      "Location Scouting",
                      "Crew Management",
                      "Post-Production Coordination"
                    ].map((skill, i) => (
                      <span key={i} className="px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-base md:text-lg text-orange-400">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <section className="mb-16 md:mb-24 overflow-hidden border-y border-white/[0.08] cursor-pointer hover:bg-[#1f1f1f] transition-colors duration-300" style={{ backgroundColor: "rgb(25, 25, 25)" }}>
              <div className="relative flex py-6 md:py-8">
                <div className="flex animate-scroll-seamless items-center whitespace-nowrap">
                  {[1, 2, 3, 4, 5, 6].map((_, i) => (
                    <div key={i} className="flex items-center">
                      <h2 className="text-[4rem] md:text-[8rem] lg:text-[12rem] font-bold text-white px-6 md:px-8 uppercase">LET'S WORK TOGETHER</h2>
                      <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-orange-500 mx-3 md:mx-4"></div>
                    </div>
                  ))}
                </div>
                <div className="flex animate-scroll-seamless items-center whitespace-nowrap" aria-hidden="true">
                  {[1, 2, 3, 4, 5, 6].map((_, i) => (
                    <div key={i} className="flex items-center">
                      <h2 className="text-[4rem] md:text-[8rem] lg:text-[12rem] font-bold text-white px-6 md:px-8 uppercase">LET'S WORK TOGETHER</h2>
                      <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-orange-500 mx-3 md:mx-4"></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        ) : view === "jim-detail" ? (
          <div className="min-h-screen pt-24 md:pt-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <button 
                onClick={() => setView("team")}
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 md:mb-12"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left w-5 h-5 group-hover:-translate-x-1 transition-transform">
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
                Back to Team
              </button>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-24">
                <div className="relative overflow-hidden rounded-3xl aspect-[3/4] bg-black">
                  <img src="https://i.imgur.com/a1MeVFs.png" alt="Jim Chevious" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-none">Jim Chevious</h1>
                  <p className="text-2xl md:text-3xl text-orange-500 mb-8 md:mb-12">Creative Director</p>
                  <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                    <p>With over 15 years of experience in creative direction and visual storytelling, John leads our creative vision with unparalleled passion and expertise.</p>
                    <p>His work has been recognized globally, earning multiple awards including Cannes Lions, Clio Awards, and D&AD Pencils. John's innovative approach to storytelling has helped brands connect with audiences in meaningful and memorable ways.</p>
                    <p>Before joining 6FRAME, John served as Creative Director at leading agencies where he spearheaded campaigns for Fortune 500 companies and emerging brands alike.</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Key Achievements</h2>
                  <ul className="space-y-4">
                    {[
                      "Responsible for numerous Top 10 hits",
                      "Major label executive and independent label owner",
                      "Independently charted over 40 projects in Billboard Top 100",
                      "Produced and directed multiple theatrical films and TV shows"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-lg md:text-xl text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Areas of Expertise</h2>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Expert in veteran narrative development",
                      "Authentic voice capturing military experience",
                      "Community-focused production approach",
                      "Respected industry professional"
                    ].map((skill, i) => (
                      <span key={i} className="px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-base md:text-lg text-orange-400">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <section className="mb-16 md:mb-24 overflow-hidden border-y border-white/[0.08] cursor-pointer hover:bg-[#1f1f1f] transition-colors duration-300" style={{ backgroundColor: "rgb(25, 25, 25)" }}>
              <div className="relative flex py-6 md:py-8">
                <div className="flex animate-scroll-seamless items-center whitespace-nowrap">
                  {[1, 2, 3, 4, 5, 6].map((_, i) => (
                    <div key={i} className="flex items-center">
                      <h2 className="text-[4rem] md:text-[8rem] lg:text-[12rem] font-bold text-white px-6 md:px-8 uppercase">LET'S WORK TOGETHER</h2>
                      <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-orange-500 mx-3 md:mx-4"></div>
                    </div>
                  ))}
                </div>
                <div className="flex animate-scroll-seamless items-center whitespace-nowrap" aria-hidden="true">
                  {[1, 2, 3, 4, 5, 6].map((_, i) => (
                    <div key={i} className="flex items-center">
                      <h2 className="text-[4rem] md:text-[8rem] lg:text-[12rem] font-bold text-white px-6 md:px-8 uppercase">LET'S WORK TOGETHER</h2>
                      <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-orange-500 mx-3 md:mx-4"></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        ) : view === "project-detail" ? (
          /* Project Detail Page */
          <div className="min-h-screen pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <button 
                onClick={(e) => handleNavClick(e, "work")}
                className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left w-5 h-5 group-hover:-translate-x-1 transition-transform">
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
                Back to Work
              </button>
              <div className="mb-8 text-center">
                <div className="text-sm uppercase tracking-widest text-orange-500 mb-3">{selectedProject?.subtitle || "Project"}</div>
                <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold mb-6">{selectedProject?.title || "Project Title"}</h1>
              </div>
            </div>
            <div className="w-full px-4 md:px-12 lg:px-24">
              <div className="relative w-full aspect-video bg-black rounded-xl md:rounded-3xl overflow-hidden">
                <video 
                  className="w-full h-full object-contain" 
                  autoPlay 
                  muted
                  playsInline 
                  controls 
                  preload="auto"
                  key={selectedProject?.video}
                >
                  <source src={selectedProject?.video} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-white/60 mb-2">Client</h3>
                  <p className="text-xl">6Frame Studios</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-white/60 mb-2">Services</h3>
                  <p className="text-xl">{selectedProject?.subtitle || "Production"}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-white/60 mb-2">Year</h3>
                  <p className="text-xl">2026</p>
                </div>
              </div>
              <div className="mt-16 pt-16 border-t border-white/10">
                <h2 className="text-3xl font-bold mb-6">More Work</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {workProjects.filter(p => p.title !== selectedProject?.title).slice(0, 3).map((project, i) => (
                    <button 
                      key={i} 
                      onClick={() => {
                        setSelectedProject(project);
                        window.scrollTo(0, 0);
                      }}
                      className="group relative overflow-hidden rounded-xl bg-gray-800 aspect-[4/3]"
                    >
                      {project.img && (
                        <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
                      )}
                      <video 
                        loop 
                        playsInline 
                        muted
                        preload="auto" 
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${project.img ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
                        onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
                        onMouseOut={(e) => {
                          const v = e.target as HTMLVideoElement;
                          v.pause();
                          v.currentTime = 0;
                        }}
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity opacity-0 group-hover:opacity-100">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-sm font-semibold">{project.title}</p>
                          <p className="text-xs text-white/70">{project.subtitle}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* CTA Section (Shared) */}
        <section id="cta" className="pt-8 md:pt-16 lg:pt-24 pb-0">
          <div className="relative pt-4 px-4 pb-0 md:pt-8 md:px-6 md:pb-0">
            <div className="relative" style={{ paddingBottom: "50%" }}>
              <div className="absolute top-4 left-4 right-4 bottom-0 md:top-6 md:left-6 md:right-6 md:bottom-0 bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl md:rounded-3xl overflow-hidden">
                <div className="absolute inset-0">
                  <video 
                    src={view === "work" 
                      ? "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/Website%20Videos/upscale%20spider.mp4" 
                      : view === "capabilities"
                      ? "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/Website%20Videos/upscale%20boxing.mp4"
                      : view === "team"
                      ? "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/Website%20Videos/upscale%20hand%20(1).mp4"
                      : (view === "anonymous-detail" || view === "majid-detail" || view === "jim-detail")
                      ? "https://player.vimeo.com/progressive_redirect/playback/1131667449/rendition/2160p/file.mp4?loc=external&signature=e8c3de7c7fda1bfa87868268f81e2a3e3f6dafd15da5c755c486455e5021c8bc"
                      : "https://keecjeumjvmpqqytqdlm.supabase.co/storage/v1/object/public/Website%20Videos/the_plot_v1%20(2160p).mp4"
                    } 
                    autoPlay 
                    loop 
                    playsInline 
                    muted 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <img src="https://6framestudio.com/6frame_logo_white.svg" alt="6FRAME Logo" className="w-4/5 h-auto max-w-full blur-[0.3px]" style={{ imageRendering: "-webkit-optimize-contrast" }} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
