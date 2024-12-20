import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

import IndexPage from "@/pages/index";
import { PageLoader, Particles, Header, Aside } from "@/components";

function App() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setIsMounted(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!isMounted) {
    return <PageLoader isMounted />;
  }

  return (
    <div className="dark:bg-[rgb(13, 13, 13)]">
      <Particles />
      <AnimatedCursor
        clickables={[
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
            // options: {
            //   innerSize: 12,
            //   outerSize: 12,
            //   color: "255, 255, 255",
            //   outerAlpha: 0.3,
            //   innerScale: 0.7,
            //   outerScale: 5,
            // },
          },
        ]}
        color="#ffffff"
        innerScale={1}
        innerSize={8}
        outerAlpha={0}
        outerScale={1.7}
        outerSize={35}
        outerStyle={{
          mixBlendMode: "exclusion",
          background: "#ffffff",
        }}
      />
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Aside openMenu={openMenu} />
      <Routes>
        <Route element={<IndexPage />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
