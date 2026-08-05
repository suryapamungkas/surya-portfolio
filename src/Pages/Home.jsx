import { useState, useEffect, useCallback, memo } from "react"
import { Helmet } from "react-helmet-async"
import { Github, Linkedin, Mail, ExternalLink, Instagram, Sparkles } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-zinc-400 to-zinc-700 blur-2xl opacity-10"></span>
        <span className="relative bg-gradient-to-r from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
          Full Stack Developer
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-zinc-400 to-zinc-700 blur-2xl opacity-10"></span>
        <span className="relative bg-gradient-to-r from-zinc-300 to-zinc-600 bg-clip-text text-transparent">
          & AI Engineer
        </span>
      </span>
    </h1>
  </div>
));

const TechStack = memo(({ tech }) => (
  <div className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-zinc-300 shadow-sm hover:bg-white/10 transition-colors">
    {tech}
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a href={href}>
    <button className="group relative w-[160px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-500 to-zinc-700 rounded-xl opacity-20 blur-md group-hover:opacity-60 transition-all duration-700"></div>
      <div className="relative h-11 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 shadow-sm leading-none overflow-hidden">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-white/5 to-white/10"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-zinc-100 to-zinc-300 bg-clip-text text-transparent font-medium z-10">
            {text}
          </span>
          <Icon className={`w-4 h-4 text-zinc-300 ${text === 'Contact' ? 'group-hover:translate-x-1' : 'group-hover:rotate-45'} transform transition-all duration-300 z-10`} />
        </span>
      </div>
    </button>
  </a>
));

const SocialLink = memo(({ icon: Icon, link, label }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <button className="group relative p-3"
      aria-label={label}>
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-400 to-zinc-600 rounded-xl blur opacity-10 group-hover:opacity-30 transition duration-300"></div>
      <div className="relative rounded-xl bg-white/5 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 shadow-sm group-hover:border-zinc-500 transition-all duration-300">
        <Icon className="w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-colors" />
      </div>
    </button>
  </a>
));

const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = ["Full Stack Developer", "AI Engineer Enthusiast", "Informatics Student", "Cloud Computing"];
const TECH_STACK = ["Python", "Machine Learning", "Generative AI", "Google Cloud", "React", "Data Science"];
const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/suryapamungkas", label: "GitHub Profile" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/suryapamungkas", label: "LinkedIn Profile" },
  { icon: Instagram, link: "https://www.instagram.com/suryaszy", label: "Instagram Profile" }
];

const Home = () => {
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: true,
        offset: 10,
      });
    };

    initAOS();
    window.addEventListener('resize', initAOS);
    return () => window.removeEventListener('resize', initAOS);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(prev => prev + WORDS[wordIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setWordIndex(prev => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  return (
    <>
      <Helmet>
        <title>Surya Pamungkas</title>
        <meta name="description" content="Official website of Surya Pamungkas, Full Stack Developer & AI Engineer Enthusiast. I am passionate about artificial intelligence, cloud technologies, and full-stack development to solve real-world problems." />
     <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://github.com/suryapamungkas" />
        <meta property="og:title" content="Surya Pamungkas" />
     <meta property="og:description" content="Official website of Surya Pamungkas, Full Stack Developer & AI Engineer Enthusiast. I am passionate about artificial intelligence, cloud technologies, and full-stack development to solve real-world problems." />
        <meta property="og:url" content="https://github.com/suryapamungkas" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Surya Pamungkas",
            "jobTitle": "Full Stack Developer & AI Engineer",
            "url": "https://github.com/suryapamungkas",
            "sameAs": [
              "https://github.com/suryapamungkas",
              "https://www.linkedin.com/in/suryapamungkas",
              "https://www.instagram.com/suryaszy"
            ]
          }
        `}</script>
      </Helmet>

      <div className="min-h-screen bg-transparent overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%]" id="Home">
        <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <div className="container mx-auto min-h-screen">
            <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen pt-24 lg:pt-0 md:justify-between gap-0 sm:gap-12 lg:gap-20">
              {/* Left Column */}
              <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 mt-10 lg:mt-0"
                data-aos="fade-right"
                data-aos-delay="200">
                <div className="space-y-4 sm:space-y-6">

                  <MainTitle />

                  <div className="h-8 flex items-center" data-aos="fade-up" data-aos-delay="800">
                    <span className="text-xl md:text-2xl text-zinc-300 font-light">
                      {text}
                    </span>
                    <span className="w-[3px] h-6 bg-gradient-to-t from-zinc-400 to-zinc-600 ml-1 animate-blink"></span>
                  </div>

                  {/* Description */}
                  <p className="text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed font-light"
                    data-aos="fade-up"
                    data-aos-delay="1000">
                    Passionate about full-stack development, artificial intelligence, and cloud technologies to solve real-world problems.
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 justify-start" data-aos="fade-up" data-aos-delay="1200">
                    {TECH_STACK.map((tech, index) => (
                      <TechStack key={index} tech={tech} />
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-row gap-3 w-full justify-start" data-aos="fade-up" data-aos-delay="1400">
                    <CTAButton href="#Portofolio" text="Projects" icon={ExternalLink} />
                    <CTAButton href="#Contact" text="Contact" icon={Mail} />
                  </div>

                  {/* Social Links */}
                  <div className="hidden sm:flex gap-4 justify-start" data-aos="fade-up" data-aos-delay="1600">
                    {SOCIAL_LINKS.map((social, index) => (
                      <SocialLink key={index} {...social} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - WebM Video */}
              <div className="w-full py-0 md:py-[10%] sm:py-0 lg:w-1/2 h-[260px] sm:h-[400px] lg:h-[600px] xl:h-[750px] relative flex items-center justify-center order-2 lg:order-2  mt-5 sm:mt-0"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                data-aos="fade-left"
                data-aos-delay="600">
                <div className="relative w-full opacity-90">
                  <div className={`absolute inset-0 bg-gradient-to-r from-zinc-500/10 to-zinc-300/10 rounded-3xl blur-3xl transition-all duration-700 ease-in-out ${
                    isHovering ? "opacity-30 scale-105" : "opacity-10 scale-100"
                  }`}>
                  </div>

                  <div className={`relative lg:left-12 z-10 w-full opacity-90 transform transition-transform duration-500 flex justify-center items-center ${
                    isHovering ? "scale-105" : "scale-100"
                  }`}>
                    <img
                      src="/PP-Crop.png"
                      alt="Profile Picture"
                      className={`w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] rounded-full object-cover border-4 border-white/5 shadow-[0_0_40px_rgba(255,255,255,0.02)] transition-all duration-500 ${
                        isHovering 
                          ? "scale-105 rotate-2 shadow-[0_0_60px_rgba(255,255,255,0.05)] border-white/10" 
                          : "scale-100"
                      }`}
                    />
                  </div>

                  <div className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
                    isHovering ? "opacity-30" : "opacity-10"
                  }`}>
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-zinc-500/5 to-zinc-400/5 blur-3xl animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-all duration-700 ${
                      isHovering ? "scale-110" : "scale-100"
                    }`}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Home);