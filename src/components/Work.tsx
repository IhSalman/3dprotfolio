import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      const container = document.querySelector(".work-flex") as HTMLElement;
      if (!container) return;

      const getScrollAmount = () => {
        const boxes = document.querySelectorAll(".work-box");
        if (!boxes.length) return 0;
        
        // Find width of a single box and multiply by total amount of boxes
        const boxWidth = (boxes[0] as HTMLElement).offsetWidth;
        const totalContentWidth = boxWidth * boxes.length;
        
        // Subtract screen width, then add padding-right (120px) + margin-left (80px) offsets
        return totalContentWidth - window.innerWidth + 200;
      };

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          scrub: 1,
          pin: true,
          id: "work",
          invalidateOnRefresh: true,
        },
      });

      timeline.to(".work-flex", {
        x: () => -getScrollAmount(),
        ease: "none",
      });

      // Refresh after a short delay to ensure layout is settled
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

      return () => {
        clearTimeout(timer);
        timeline.kill();
        ScrollTrigger.getById("work")?.kill();
      };
    });

    // Mobile fallback where we just let it scroll natively (handled via CSS changes)
    mm.add("(max-width: 1024px)", () => {
      // Just clear out any ScrollTrigger pins for this section
      ScrollTrigger.getById("work")?.kill();
    });

    return () => {
      mm.revert();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              number: "01",
              title: "IWillTravel",
              category: "Agentic Travel",
              tools: "Next.js, Multi-agent AI, Supabase",
              image: "/images/projects/iwilltravel.png",
              link: "https://iwilltravel.app",
            },
            {
              number: "02",
              title: "LinguaSphere",
              category: "Real-time AI Translation",
              tools: "TypeScript, AI Agents, Travel Tech",
              image: "/images/projects/linguasphere.png",
              link: "https://linguasphere-ai-travel-edition-132882644102.us-west1.run.app",
            },
            {
              number: "03",
              title: "Lumina AI",
              category: "Vision & Creative AI",
              tools: "React, OpenAI, Computer Vision",
              image: "/images/projects/lumina.png",
              link: "https://lumina-ai-132882644102.us-west1.run.app",
            },
            {
              number: "04",
              title: "PlanWe",
              category: "AI Planning System",
              tools: "Node.js, Backend Orchestration, AI",
              image: "/images/projects/planwe.png",
              link: "https://planforge-ai-132882644102.us-west1.run.app",
            },
            {
              number: "05",
              title: "FacelessClip AI",
              category: "AI Video Automation",
              tools: "React, Creative AI, SaaS",
              image: "/images/projects/facelessclip.png",
              link: "https://veo-creative-studio-132882644102.us-west1.run.app",
            },
            {
              number: "06",
              title: "AutoVid AI",
              category: "AI Video Engine",
              tools: "Python, AI Automation, Cloud Run",
              image: "/images/projects/autovid.png", 
              link: "https://autovid-ai-engine-132882644102.us-west1.run.app",
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="work-info">
                  <div className="work-title">
                    <h3>{project.number}</h3>
                    <div>
                      <h4>{project.title}</h4>
                      <p>{project.category}</p>
                    </div>
                  </div>
                  <h4>Tools and features</h4>
                  <p>{project.tools}</p>
                </div>
              </a>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
