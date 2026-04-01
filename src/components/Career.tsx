import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BACHELOR OF ENGINEERING</h4>
                <h5>INTERNET OF THINGS</h5>
              </div>
              <h3>2022  2023</h3>
            </div>
            <p>
              Started building my foundation in Internet of Things (IoT) and robotics.
              Worked on a project using the Niryo Ned Robot Arm, where the goal was to
              enable the robot to autonomously play Tic-Tac-Toe using Python,
              basic NLP, and planning algorithms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>EMBEDDED IoT DEVELOPER</h4>
                <h5>INTERNET OF THINGS</h5>
              </div>
              <h3>2023  2024</h3>
            </div>
            <p>
              Developed a smart home automation project using Arduino Nano, enabling remote control of
              household appliances (lights, fans) via mobile devices from anywhere.
              Technologies used: MQTT, IFTTT, Embedded systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development</h4>
                <h5>Internship</h5>
              </div>
              <h3>2024  2025</h3>
            </div>
            <p>
              Learned core web development technologies: HTML, CSS, JavaScript.
              Built and deployed a WordPress-based website, implemented custom
              frontend code, and gained practical experience in WordPress
              security and basic cybersecurity practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Automation</h4>
                <h5>AI-Powered Web (Linguasphere)</h5>
              </div>
              <h3>2025  2026</h3>
            </div>
            <p>
              Developed Linguasphere using TypeScript and React.
              The platform focuses on AI-based translation using Gemini LLM,
              enabling seamless communication across languages via agentic
              orchestration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Agentic AI & Web Development</h4>
                <h5>
                  <a
                    href="https://iwilltravel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="disable"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    iwilltravel.app
                  </a>
                </h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Completing my fourth year at Savonia University of Applied
              Sciences. Currently integrating emerging AI automation tools
              with large-scale web development to deliver scalable and
              efficient solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
