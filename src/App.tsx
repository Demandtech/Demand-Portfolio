import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { useDisclosure } from "@nextui-org/modal";

import IndexPage from "@/pages/index";
import {
  PageLoader,
  Particles,
  Header,
  Aside,
  BottomSides,
  Modal,
  Footer,
} from "@/components";

function App() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        onOpen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onOpen]);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setIsMounted(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (openMenu) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [openMenu]);

  return (
    <div className="min-h-dvh">
      <Particles />
      <AnimatedCursor
        clickables={[
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
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
      <Header
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        setOpenModal={onOpen}
      />
      <Aside openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <IndexPage onOpen={onOpen} />
      <PageLoader isMounted={isMounted} />
      <BottomSides />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} />
      <Footer />
    </div>
  );
}

export default App;
