import "./hero.css";

const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src="/public/images/me.png" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">
          Software designer, founder, and amateur astronaut.
        </h1>
        <p className="sub-title">
          m Hakam Qalalwi, Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sed, magni cumque quae velit consequatur numquam, pariatur
          doloremque animi officia dignissimos ducimus impedit iure fugit nulla
          repudiandae rerum distinctio eos veritatis.
        </p>

        <div className="all-icons flex">
          <div className="icon icon-x"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin-square"></div>
        </div>
      </div>
      <div className="right-section animation border">cccccc</div>
    </section>
  );
};

export default Hero;
