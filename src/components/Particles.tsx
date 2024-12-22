// import type { Container, Engine } from "@tsparticles/engine";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { useTheme } from "@/contexts/ThemeContext";

export default function App() {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return (
      <div className="!-z-10 relative">
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: theme === "light" ? " #ffffff" : "rgb(13, 13, 13)",
              },
            },
            fpsLimit: 120,
            // interactivity: {
            //   events: {
            //     onClick: {
            //       enable: false,
            //       mode: "push",
            //     },
            //     onHover: {
            //       enable: true,
            //       mode: "repulse",
            //     },
            //     //   resize: "",
            //   },
            //   modes: {
            //     push: {
            //       quantity: 4,
            //     },
            //     repulse: {
            //       distance: 200,
            //       duration: 0.4,
            //     },
            //   },
            // },
            particles: {
              color: {
                value: theme === "light" ? "rgb(13, 13, 13)" : "#ffffff",
              },
              links: {
                color: theme === "light" ? "rgb(13, 13, 13)" : "#ffffff",
                distance: 100,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  //   area: 800,
                },
                value: 15,
              },
              opacity: {
                value: 0.8,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
          // particlesLoaded={particlesLoaded}
        />
      </div>
    );
  }
}
