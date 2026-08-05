const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <center>
        <hr className="my-3 border-white/10 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-zinc-500 text-center">
          © {currentYear}{" "}
          <a href="https://github.com/suryapamungkas" className="hover:underline">
            Surya Pamungkas™
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  );
};

export default Footer;