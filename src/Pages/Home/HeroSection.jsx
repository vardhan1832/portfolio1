const HeroSection = () => {
  return (
    <section id="heroSection" className="hero--section">
    <div className="hero--section--content--box">
      <div className="hero--section--content">
        <p className="section--title">Hey, I'm Sreevardhan</p>
        <h1 className="hero--section--title">
          <span className="hero--section-title--color">Full Stack</span>{" "}
          <br />
          Developer
        </h1>
        <p className="hero--section-description">
        Welcome to my digital realm! I specialize in crafting seamless user experiences, turning innovative ideas into robust, user-centric applications.
            <br /> Building Tomorrow's Solutions, Today!!
        </p>
      </div>
      <button className="btn btn-primary">Get In Touch</button>
    </div>
    <div className="hero--section--img">
      <img src="./img/imagenew.png" alt="Hero Section" />
    </div>
  </section>
  );
};

export default HeroSection;
