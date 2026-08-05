

const TechStackIcon = ({ TechStackIcon, Language, color }) => {
  const isString = typeof TechStackIcon === 'string';

  return (
    <div className="group p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-sm hover:shadow-2xl">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-zinc-500 to-zinc-700 rounded-full opacity-0 group-hover:opacity-30 blur transition duration-300"></div>
        {isString ? (
          <img 
            src={TechStackIcon} 
            alt={`${Language} icon`} 
            className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
          />
        ) : (
          <div className={`relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300 flex items-center justify-center ${color || 'text-zinc-500 group-hover:text-zinc-300'}`}>
            <TechStackIcon className="w-12 h-12 md:w-14 md:h-14 drop-shadow-lg" strokeWidth={2.5} />
          </div>
        )}
      </div>
      <span className="text-zinc-400 font-semibold text-sm md:text-base tracking-wide group-hover:text-zinc-100 transition-colors duration-300">
        {Language}
      </span>
    </div>
  );
};

export default TechStackIcon; 