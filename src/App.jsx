import { useState } from "react";

import {
  RiDashboard3Line,
  RiEarthLine,
  RiArrowDownSLine,
  RiQuestionAnswerLine,
  RiCalendarCheckLine,
  RiSettings2Line,
  RiCheckboxBlankCircleFill,
  RiArrowUpSLine,
  RiLoginBoxLine,
  RiMenuFill,
  RiCloseFill,
  RiNotification3Line,
  RiGhostSmileLine,
  RiCheckLine,
  RiBriefcaseLine,
  RiFireFill,
} from "react-icons/ri";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-[#141517]">
      {/* Sidebar  */}
      <div
        className={`bg-[#1E1F24] fixed ${
          showMenu ? "-left-0" : "-left-full"
        }  lg:left-0 top-0 w-72 h-full p-8 flex flex-col justify-between transition-all overflow-y-scroll z-50`}
      >
        {/* Menu sidebar */}
        <div>
          {/* Logo  */}
          <div className="mb-8">
            <h1 className="text-white uppercase font-bold text-2xl tracking-[4px]">
              E.P
            </h1>
          </div>
          {/* Nav  */}
          <nav>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-400 hover:text-gray-200 transition-colors py-2"
            >
              <RiDashboard3Line /> Analytic
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-400 hover:text-gray-200 transition-colors py-2"
            >
              <RiEarthLine />
              <span className="flex-1 flex items-center justify-between gap-3">
                Social media
                <RiArrowDownSLine />
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-400 hover:text-gray-200 transition-colors py-2"
            >
              <RiQuestionAnswerLine /> Message
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-400 hover:text-gray-200 transition-colors py-2"
            >
              <RiCalendarCheckLine /> Schedule
            </a>
            <a
              href="#"
              className="flex flex-col gap-4 text-gray-200 hover:text-gray-200 transition-colors py-2"
            >
              <span className="flex items-center gap-4">
                <RiSettings2Line className="text-orange-600" />
                <div className="flex-1 flex items-center justify-between">
                  Settings
                  <RiArrowUpSLine />
                </div>
              </span>
              <nav className="flex flex-col border-l border-gray-300 ml-2">
                <a
                  href="#"
                  className="relative pl-8 py-2 text-gray-300 hover:text-gray-200 transition-colors "
                >
                  <RiCheckboxBlankCircleFill className="absolute -left-[7px] text-orange-600 text-sm top-[50%] -translate-y-[50%] bg-[#1E1F24] p-[4px] rounded-full" />
                  Plan
                </a>
                <a
                  href="#"
                  className="relative pl-8 py-2 text-gray-400 hover:text-gray-200 transition-colors"
                >
                  <RiCheckboxBlankCircleFill className="absolute -left-[7px] text-gray-500 text-sm top-[50%] -translate-y-[50%] bg-[#1E1F24] p-[4px] rounded-full" />
                  Security
                </a>
              </nav>
            </a>
          </nav>
        </div>
        {/* Logout */}
        <div>
          <a
            href="#"
            className="flex items-center text-gray-400 gap-4 hover:text-gray-200 transition-colors"
          >
            <RiLoginBoxLine />
            Logout
          </a>
        </div>
      </div>
      {/* Responsive button  */}
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed right-4 bottom-4 bg-[#664EFA] ring-3 ring-[#000] text-white text-xl p-3 rounded-full z-50"
      >
        {showMenu ? <RiCloseFill /> : <RiMenuFill />}
      </button>
      {/* Content  */}
      <main className="lg:pl-80 p-8">
        {/* Header  */}
        <header className="fixed left-0 top-0 w-full bg-[#141517] p-8 flex justify-end border-b border-gray-600">
          <ul className="flex items-center gap-4">
            <li>
              <a href="#" className="relative text-white text-lg">
                <RiNotification3Line />
                <RiCheckboxBlankCircleFill className="text-orange-600 text-[8px] absolute -top-[2px] right-0" />
              </a>
            </li>
            <li>
              <a href="#" className="flex text-white items-center gap-3">
                <img
                  src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/988084852b94b9a.png"
                  className="w-8 h-8 object-cover rounded-full ring-2 ring-gray-300"
                />
                Esteban Pastor
                <RiArrowDownSLine />
              </a>
            </li>
          </ul>
        </header>
        {/* Main content  */}
        <div className="pt-28">
          <h1 className="text-4xl text-gray-300 my-10">Plan & Pricing</h1>
          {/* Plans */}
          <div className="text-gray-300 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cards */}
            <div className="bg-[#1E1F24] p-8 lg:p-12 rounded-xl mb-10">
              <div className="flex flex-col items-center mb-20">
                <RiGhostSmileLine className="text-7xl my-6 p-4 bg-purple-50 rounded-full text-purple-600" />
                <h2 className="text-4xl uppercase tracking-[8px]">Personal</h2>
                <p className="text-gray-500 mb-4">
                  ¡Perfect plan for only one user!
                </p>
                <h5 className="text-2xl uppercase tracking-[4px] font-bold">
                  Free
                </h5>
                <p className="text-gray-500 mb-8">¡For a life time!</p>
                <button className="bg-[#000000] py-2 px-8 rounded-lg hover:text-white transition-colors uppercase">
                  Current plan
                </button>
              </div>
              {/* Futures */}
              <ul className="flex flex-col gap-4 text-gray-500">
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-600 text-2xl" /> Detailed
                  post analytics
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-600 text-2xl" /> Share with
                  5 team members
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-600 text-2xl" /> Sync
                  across devices
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-600 text-2xl" /> Reach and
                  impressions analytics
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-600 text-2xl" /> Up to 6
                  social profile
                </li>
              </ul>
            </div>
            <div className="bg-[#664EFA] p-8 lg:p-12 rounded-xl mb-10">
              <div className="flex flex-col items-center mb-20">
                <RiBriefcaseLine className="text-7xl my-6 p-4 bg-purple-200 rounded-full text-purple-600" />
                <h2 className="text-4xl text-white uppercase tracking-[6px]">
                  Professional
                </h2>
                <p className="text-gray-300 mb-4">
                  ¡For users who want to do more!
                </p>
                <h5 className="text-2xl uppercase tracking-[4px] font-bold text-white">
                  $99.00
                </h5>
                <p className="text-gray-300 mb-8">¡For a life time!</p>
                <button className="bg-[#000000] py-2 px-8 rounded-lg hover:text-white transition-colors uppercase">
                  Current plan
                </button>
              </div>
              {/* Futures */}
              <ul className="flex flex-col gap-4 text-gray-100">
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-600 text-2xl" /> Detailed
                  post analytics
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-600 text-2xl" /> Unlimited
                  teams members
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-600 text-2xl" /> Sync
                  across devices
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-600 text-2xl" /> Reach and
                  impressions analytics
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-600 text-2xl" /> Up to 10
                  social profile
                </li>
              </ul>
            </div>
            <div className="bg-[#1E1F24] p-8 lg:p-12 rounded-xl mb-10">
              <div className="flex flex-col items-center mb-20">
                <RiFireFill className="text-7xl my-6 p-4 bg-purple-50 rounded-full text-purple-600 " />
                <h2 className="text-4xl ">Interprice</h2>
                <p className="text-gray-500 mb-4">¡Analyze your company!</p>
                <h5 className="text-2xl uppercase tracking-[4px] font-bold">
                  $120.00
                </h5>
                <p className="text-gray-500 mb-8">¡For a life time!</p>
                <button className="bg-[#000000] py-2 px-8 rounded-lg hover:text-white transition-colors uppercase">
                  Current plan
                </button>
              </div>
              {/* Futures */}
              <ul className="flex flex-col gap-4 text-gray-500">
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-600 text-2xl" /> Detailed
                  post analytics
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-600 text-2xl" /> Unlimited
                  team members
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-600 text-2xl" /> Sync
                  across devices
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-600 text-2xl" /> Reach and
                  impressions analytics
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-600 text-2xl" /> Unlimited
                  social profiles
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
