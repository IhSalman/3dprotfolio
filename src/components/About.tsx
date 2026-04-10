import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Hello, I am Ismail Habib Salman, currently in my Final year of a
          Bachelor’s degree at Savonia University of Applied Sciences,
          specializing in Internet of Things (IoT) in Kuopio,Finland. I am
          passionate about creating real-world digital solutions that solve
          problems,enhance productivity, and help business to grow. My goal is
          to combine web development expertise with emerging AI automation
          skills to deliver scalable and high-impact solutions.
        </p>
        <a 
          href="/Resume.pdf" 
          download="Ismail_Habib_Salman_Resume.pdf" 
          className="resume-btn" 
          style={{
            marginTop: "30px", 
            display: "inline-block", 
            padding: "12px 28px", 
            border: "1px solid var(--accentColor)", 
            color: "var(--accentColor)", 
            borderRadius: "30px", 
            textDecoration: "none", 
            fontWeight: 500,
            fontSize: "14px",
            letterSpacing: "1px",
            boxShadow: "0 0 10px rgba(var(--accentColorRGB), 0.1)",
            transition: "0.3s"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(var(--accentColorRGB), 0.1)";
            e.currentTarget.style.boxShadow = "0 0 15px rgba(var(--accentColorRGB), 0.3)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.boxShadow = "0 0 10px rgba(var(--accentColorRGB), 0.1)";
          }}
        >
          DOWNLOAD RESUME
        </a>
      </div>
    </div>
  );
};

export default About;
