import { Dispatch, SetStateAction } from "react";

function Header({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <header>
      <div className="flex items-center justify-between pt-5 lg:pt-10 max-w-[95%] mx-auto">
        <div className="text-white uppercase leading-4 lg:leading-5 text-center lg:text-2xl font-noto">
          <p>Demand</p>
          <p className="">Tech</p>
        </div>
        <button
          className="bg-white z-50"
          onClick={() => setOpenMenu((prev: boolean) => !prev)}
        >
          <div className={`${openMenu ? " open" : ""}`} id="nav-icon4">
            <span />
            <span />
            <span />
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;
