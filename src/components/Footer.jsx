const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <hr className="my-4 border-white/10" aria-hidden="true" />
      <div className="flex flex-col items-center justify-center py-6 text-center">
        <p className="text-sm text-zinc-500">
          © {currentYear}{" "}
          <a
            href="https://github.com/suryapamungkas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-200 transition-colors underline-offset-4 hover:underline"
          >
            Surya Pamungkas™
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;