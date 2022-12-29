import logo from "./media/paytm_logo.png";
import "./App.css";

function App() {
  const toggleHamburger = () => {
    const hamburger = document.getElementById('hamburger').classList.toggle('open')
    const navlinks = document.getElementById('navLinks').classList.toggle('hidden')
  };

  return (
    <>
      <nav className="hidden lg:flex items-center p-12 justify-between border-2 shadow-lg">
        <img src={logo} alt="paytm logo" className="w-44" />
        <ul className="flex font-semibold space-x-[23px] text-[17px]">
          <li>
            <a href="">Paytm for Consumer</a>
          </li>
          <li>
            <a href="">Paytm for Business</a>
          </li>
          <li>
            <a href="">Investor Relations</a>
          </li>
          <li>
            <a href="">Company</a>
          </li>
          <li>
            <a href="">Career</a>
          </li>
        </ul>
        <button className="bg-[#00BAF2] text-white px-[10px] py-[3px] flex items-center text-[15px] font-semibold rounded-3xl">
          Sign In
          <div className="bg-[#002970] w-[34px] h-[34px] rounded-full ml-2 relative flex items-center justify-center overflow-hidden ">
            <div className="bg-white w-4 h-4 rounded-full"></div>
            <div className="bg-white w-[26px] h-[26px] rounded-full absolute bottom-[-15px]"></div>
          </div>
        </button>
      </nav>

      <nav className="lg:hidden block">
        <div className="flex items-center justify-between sm:px-5 px-[5px] py-[10px] shadow-lg">
          <div className="flex items-center ">
            <button
              onClick={toggleHamburger}
              id="hamburger"
              className="h-[14px] w-[18px] mr-[38px] relative"
            >
              <div className="w-[18px] h-0 border-[1px] border-black bg-black absolute top-0  duration-200"></div>
              <div className="w-[18px] h-0 border-[1px] border-black bg-black absolute top-[8px] duration-200"></div>
              <div className="w-[18px] h-0 border-[1px] border-black bg-black absolute top-[16px] duration-200"></div>
            </button>
            <img src={logo} alt="" className="w-32" />
          </div>
          <button className="bg-[#00BAF2] text-white px-[6px] py-[3px] flex items-center text-[10px] font-semibold rounded-3xl">
            Sign In
            <div className="bg-[#002970] w-[34px] h-[34px] rounded-full ml-2 relative flex items-center justify-center overflow-hidden ">
              <div className="bg-white w-4 h-4 rounded-full"></div>
              <div className="bg-white w-[26px] h-[26px] rounded-full absolute bottom-[-15px]"></div>
            </div>
          </button>
        </div>
        <ul id="navLinks" className="hidden font-semibold space-y-[31px] space-x-[20px] text-[17px]">

          {/* You can also get the desired result by just adding an empty li item which wont have the space-x and space-y. This is becuase space-x and space-y starts from the 2nd element in the list */}
          {/* <li></li> */}
          <li className="px-[20px] pt-[38px]">
            <a href="">Investor Relations</a>
          </li>
          <li>
            <a href="">Company</a>
          </li>
          <li>
            <a href="">Career</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
