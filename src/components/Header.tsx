import { Dispatch, SetStateAction } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { motion } from "framer-motion";

import { MoonSvg, SunSvg } from "./Svgs";

import { useTheme } from "@/contexts/ThemeContext";

function Header({
  openMenu,
  setOpenMenu,
  setOpenModal,
}: {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  setOpenModal: any;
}) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`sticky top-0 ${openMenu ? " bg-transparent" : "bg-bgprimary"} z-[70] pb-3 transition-background `}
    >
      <div className="flex items-center justify-between pt-5 lg:pt-10 max-w-[95%] lg:max-w-[90%] mx-auto">
        <div className="uppercase leading-4 lg:leading-5 text-center lg:text-2xl font-noto backdrop-blur-sm">
          <p className="text-primary">Demand</p>
          {/* <p className="text-primary">Tech</p> */}
        </div>

        <div className="flex items-center gap-5 z-[599]">
          <motion.div
            animate={{ rotate: theme === "light" ? 80 : 0 }}
            initial={{ rotate: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Button
              radius="full"
              isIconOnly
              className="bg-bgsecondary"
              onClick={toggleTheme}
            >
              {theme === "light" ? <MoonSvg /> : <SunSvg />}
            </Button>
          </motion.div>
          <Input
            isReadOnly
            className="rounded-sm !bg-transparent z-50 max-w-28"
            classNames={{
              input: "bg-transparent",
              inputWrapper: "bg-bgsecondary",
            }}
            endContent={
              <Button
                isIconOnly
                className="z-50"
                size="sm"
                tabIndex={0}
                type="button"
                variant="light"
                onPress={setOpenModal}
              >
                <Kbd
                  className="bg-black150 border-none shadow-none text-primary"
                  keys={["command"]}
                >
                  K
                </Kbd>
              </Button>
            }
            placeholder="Search..."
            radius="sm"
            size="sm"
            variant="flat"
            onClick={setOpenModal}
          />
          <button
            className="z-50 bg-primary"
            onClick={() => setOpenMenu((prev: boolean) => !prev)}
          >
            <div className={`${openMenu ? " open" : ""}`} id="menu-bar">
              <span className="bg-bgprimary" />
              <span className="bg-bgprimary" />
              <span className="bg-bgprimary" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
