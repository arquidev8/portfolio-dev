const SkillText = () => {
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
    <section className="skill-text">
      <h1 className="skill-title">
        {getSpans("Skills &").map((e) => e)} <br />
        {getSpans("Experience").map((e) => e)}
      </h1>
      <div className="skill-contents">
      I am a passionate programmer, who is always looking for new challenges to improve, 
      I like to be constantly learning and collaborate as a team.
        <br />
        <br />I love working with JavaScript, React, Vue, Html, Css, Laravel and Java,
        I also have experience with WebGl among many others.
        
      </div>
    </section>
  );
};

export default SkillText;
