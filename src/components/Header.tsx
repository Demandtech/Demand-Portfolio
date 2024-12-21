import { Dispatch, SetStateAction } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { motion } from "framer-motion";

import { MoonSvg, SunSvg } from "./Svgs";

import { useTheme } from "@/contexts/AppContext";

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
    <header className="">
      <div className="flex items-center justify-between pt-5 lg:pt-10 max-w-[95%] lg:max-w-[90%] mx-auto">
        <div className="text-primary uppercase leading-4 lg:leading-5 text-center lg:text-2xl font-noto">
          <p>Demand</p>
          <p className="">Tech</p>
        </div>

        <div className="flex items-center gap-5">
          <Button
            isIconOnly
            className="bg-bgsecondary z-50"
            onClick={toggleTheme}
          >
            <motion.div
              animate={{ rotate: theme === "light" ? 80 : 0 }}
              initial={{ rotate: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {theme === "light" ? <MoonSvg /> : <SunSvg />}
            </motion.div>
          </Button>
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
