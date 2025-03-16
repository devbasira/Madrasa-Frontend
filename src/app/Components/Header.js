export default function Header({ setshowMenu, showMenu }) {
  return (
    <header className="flex justify-center w-full sticky top-0 bg-white z-200 bg-[#ffffff]">
      <div className="max-w-[1140px] w-full flex justify-between h-[120px] lg:h-[135px] px-5 lg:px-0 py-[20px]">
        <img src="/logo.svg"className="w-[56px] h-[56px] " alt="" />

        <div className="flex items- gap-[20px]">
          <div className="hidden text-lg font-medium sm:flex gap-[40px] items-center cursor-pointer">
            <div>home</div>
            <div className="cursor-pointer">course</div>
            <div className="cursor-pointer">resources</div>
          </div>

          <div className="flex gap-7 items-center">
            <div className="flex flex-col items-center h-full justify-center mt-[33px] gap-[5px]">
            <button className="bg-[#0044CB] text-white w-[100px] lg:w-[180px] h-[45px] px-2 rounded-full">
              enroll now
            </button> <p className="text-[#0044CB] text-[18px]">Bismillah!</p>
            </div>
            <span className="sm:hidden">
              <img
                className={`${
                  showMenu ? "rotate-90" : "rotate-0"
                } cursor-pointer transition-all duration-[1500ms]`}
                onClick={(e) => {
                  setshowMenu((e) => !e);
                }}
                src="/Humburger.svg"
                height="30px"
                width="30px"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}