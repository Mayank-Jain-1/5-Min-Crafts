import undlogo from "./Media/undlogo.png";
import gift from "./Media/gift.jpg";
import cross from "./Media/cross.png";
import flag from "./Media/flag.png";
import "./App.css";

function App() {

  const togglePanel = () => {
    document.getElementById('panel').classList.toggle('showPan')
    document.getElementById('backdrop').classList.toggle('showBack');
  }

  return (
    <>
      <nav className="flex w-100 justify-between pt-[42px] pb-8 pl-12 shadow-lg">
        <img
          src={undlogo}
          alt="unacademy logo"
          className="w-[124px] h-[29px] "
        />
        <ul className="space-x-11 mr-9 flex items-end">
          <button className="bg-white w-[115px] h-[34px] p-3 flex items-center font-[sansation] shadow-md">
            <img src={gift} alt="" className="w-[15px] mr-[8px]" />
            <p className="text-xs font-bold">Refer & Earn</p>
          </button>

          <button onClick={togglePanel} className="bg-[#08BD80] text-white px-5 py-[11px] font-bold rounded-[10px]">
            Login
          </button>
        </ul>
      </nav>

      <button onClick={togglePanel} id='backdrop' className=" fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 hidden opacity-0 duration-200 z-10 cursor-default">
      </button>
      <div id='panel' className="absolute right-0 top-0 w-[663px] h-full bg-white py-[30px] px-[35px] translate-x-[1000px] duration-300 z-20 max-w-[100vw] hidden">
          <button onClick={togglePanel}>
            <img src={cross} alt="" className="w-8"/>
          </button>
          <h1 className="font-normal text-2xl  font-serif mt-12">Login</h1>
          <p className="font-normal text-sm font-serif mt-12">
            or <span className="text-[#08BD80]">create your account</span>
          </p>
          <div className="w-24 h-0 border-dashed border-[1px] border-[#08BD80] mt-12"></div>

          <div className="mt-12 flex items-center w-[464px] px-5 py-4 shadow-extra rounded-md">
            <img src={flag} alt="" className="w-[24px] mr-4" />
            <select name="" id="" className="font-serif text-sm pr-3 mr-4">
              <option value="+91">+91</option>
              <option value="+01">+01</option>
            </select>
            <input
              type="text"
              name=""
              id=""
              className="text-base font-[sansationReg] text-[#3C4852] w-48"
              placeholder="Enter your Mobile Number"
            />
          </div>

          <button className="mt-12 text-base font-[sansationReg] flex items-center justify-center py-3 px-8 text-[#7A8B94] bg-[#F4F6F8]">Login</button>

          <p className="mt-12 font-[sansationReg] text-xs text-[#7A8B94]">Having trouble?</p>
          <p className="mt-12 font-[sansationReg] text-xs text-[#7A8B94]">Please contact help@unacademy.com for further support</p>
        </div>
    </>
  );
}

export default App;
