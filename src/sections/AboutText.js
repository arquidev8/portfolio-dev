const AboutText = () => {
  const getSpans = (text) => {
    let spans = [];
    for (let i = 0; i < text.length; i++) {
      spans.push(
        <span className="t" key={i.toString()}>
          {text[i]}
        </span>
      );
    }
    return spans;
  };
  return (
    <section className="about-text">
      <h1 className="about-title">{getSpans("About me")}</h1>
      <div className="about-contents">
        Hello, I'm Hector Hernandez a Fullstack Developer
        <br />
        <br /> I live in Venezuela and I love programming websites in 3D or 2D.
        I started my career as a developer in 2018, <br></br> 
        <br></br>
        Designing sites with HTML, Css, Javascript and Wordpress. <br></br>
        <br></br>

        Then I specialized in Fullstack web development using React, Vue, <br></br>
        Laravel and node. I also have knowledge in Java and .NET. <br></br>
        
      </div>
    </section>
  );
};

export default AboutText;
