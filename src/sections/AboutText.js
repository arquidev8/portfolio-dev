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
        Hello, I'm Robin Payot a Freelance Creative Developer
        <br />
        <br /> I'm based in Paris and I love programming 3D or 2D websites with good <br></br>
        design and beautifull animations using WebGL, JS, HTML, CSS, Frameworks<br></br>
        included. I've made my first WebGL website in 2015 and got my degree at <br></br>
        HETIC in 2016. I then continued to develop websites in different agencies <br></br>
        and worked on a metaverse more recently. <br></br>
        Feel free to contact me, let's create together
      </div>
    </section>
  );
};

export default AboutText;
