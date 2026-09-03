import { useEffect, memo, useMemo, useState } from "react"
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

// Memoized Components
const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2 
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500" 
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        About Me
      </h2>
    </div>
    <p 
      className="mt-2 text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Sparkles className="w-5 h-5 text-zinc-400" aria-hidden="true" />
      <span>Transforming ideas into digital experiences</span>
      <Sparkles className="w-5 h-5 text-zinc-400" aria-hidden="true" />
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div 
      className="relative group" 
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Optimized gradient backgrounds with reduced complexity for mobile */}
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-900 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-zinc-800 via-zinc-700 to-zinc-900 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-800 to-zinc-700 rounded-full blur-2xl animate-float opacity-50" />
      </div>

      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.05)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" aria-hidden="true" />
          
          {/* Optimized overlay effects - disabled on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-500/20 via-transparent to-zinc-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" aria-hidden="true" />
          
          <img
            src="/PP-Crop.png"
            alt="Portrait of Surya Pamungkas"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            loading="lazy"
            decoding="async"
          />

          {/* Advanced hover effects - desktop only */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
            <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </div>
  </div>
));

const StatCard = memo(({ icon: Icon, color, value, label, description, animation }) => (
  <div data-aos={animation} data-aos-duration={1300} className="relative group">
    <div className="relative z-10 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-sm h-full flex flex-col justify-between">
      <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
          <Icon className="w-8 h-8 text-zinc-300" />
        </div>
        <span 
          className="text-4xl font-bold text-zinc-100"
          data-aos="fade-up-left"
          data-aos-duration="1500"
          data-aos-anchor-placement="top-bottom"
        >
          {value}
        </span>
      </div>

      <div>
        <p 
          className="text-sm uppercase tracking-wider text-zinc-400 mb-2"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-anchor-placement="top-bottom"
        >
          {label}
        </p>
        <div className="flex items-center justify-between">
          <p 
            className="text-xs text-zinc-500"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            {description}
          </p>
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
        </div>
      </div>
    </div>
  </div>
));

const AboutPage = () => {
  // Memoized calculations
  const [totalProjects, setTotalProjects] = useState(0);
  const [totalCertificates, setTotalCertificates] = useState(0);
  const YearExperience = 3;

  useEffect(() => {
    const updateStats = () => {
      const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
      const storedCertificates = JSON.parse(localStorage.getItem("certificates") || "[]");
      setTotalProjects(storedProjects.length);
      setTotalCertificates(storedCertificates.length);
    };

    updateStats();
    window.addEventListener("storage_updated", updateStats);
    
    return () => window.removeEventListener("storage_updated", updateStats);
  }, []);

  // Optimized AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false, 
      });
    };

    initAOS();
    
    // Debounced resize handler
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Memoized stats data
  const statsData = useMemo(() => [
    {
      icon: Code,
      color: "from-zinc-500 to-zinc-700",
      value: totalProjects,
      label: "Total Projects",
      description: "Innovative web solutions crafted",
      animation: "fade-right",
    },
    {
      icon: Award,
      color: "from-zinc-700 to-zinc-500",
      value: totalCertificates,
      label: "Certificates",
      description: "Professional skills validated",
      animation: "fade-up",
    },
    {
      icon: Globe,
      color: "from-zinc-500 to-zinc-700",
      value: YearExperience,
      label: "Years of Experience",
      description: "Continuous learning journey",
      animation: "fade-left",
    },
  ], [totalProjects, totalCertificates, YearExperience]);

  return (
    <div
      className="h-auto pb-[10%] text-zinc-100 overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0" 
      id="About"
     itemScope
  itemType="https://schema.org/Person"

    >
      <Header />

      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
                Hello, I'm
              </span>
              <span 
                className="block mt-2 text-zinc-200"
                data-aos="fade-right"
                data-aos-duration="1300"
                itemProp="name"
              >
                Nur Hidayat Surya Pamungkas
              </span>
            </h2>
            
              <p 
              className="text-base sm:text-lg lg:text-xl text-zinc-400 leading-relaxed text-justify pb-4 sm:pb-0"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              I am an Informatics student at UPN Veteran Jawa Timur focused on full-stack development, artificial intelligence, and cloud technologies. I am passionate about applying software engineering and AI to solve real-world problems.
                  </p>

               {/* Quote Section */}
      <div 
        className="relative bg-white/5 border border-white/10 rounded-2xl p-4 my-6 backdrop-blur-md shadow-sm overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1700"
      >
        {/* Floating orbs background */}
        <div className="absolute top-2 right-4 w-16 h-16 bg-gradient-to-r from-zinc-500/10 to-zinc-700/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -left-2 w-12 h-12 bg-gradient-to-r from-zinc-700/10 to-zinc-500/10 rounded-full blur-lg"></div>
        
        {/* Quote icon */}
        <div className="absolute top-3 left-4 text-zinc-500 opacity-30">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
          </svg>
        </div>
        
        <blockquote className="text-zinc-300 text-center lg:text-left italic font-medium text-sm relative z-10 pl-6">
          "Leveraging AI as a professional tool, not a replacement."
        </blockquote>
      </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
              <a
                href="/CV_Nur_Hidayat_Surya_Pamungkas.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-duration="800"
                className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-zinc-100 text-zinc-900 font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                <span>Download CV</span>
              </a>
              <a
                href="#Portofolio"
                data-aos="fade-up"
                data-aos-duration="1000"
                className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-white/20 text-zinc-300 font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                <Code className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                <span>View Projects</span>
              </a>
            </div>
          </div>

          <ProfileImage />
        </div>

        <a href="#Portofolio" aria-label="View portfolio projects and certificates">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
            {statsData.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </a>
      </div>

    </div>
  );
};

export default memo(AboutPage);