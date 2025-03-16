import LandingPage from "./LandingPage";

export default function App() {
  const getRandomNumber = (minLimit: number, maxLimit: number) => {
    const num =
      Math.floor(Math.random() * (maxLimit - minLimit + 1)) + minLimit;
    console.log(num);
    return num;
  };

  return (
    <>
      {/* Fixed Background Shapes */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <div className="absolute w-64 h-64 bg-purple-700 rounded-full opacity-20 -top-32 -left-32 animate-float"></div>
        <div
          className={`absolute w-48 h-48 bg-indigo-700 rounded-full opacity-20 
            top-1/${getRandomNumber(2, 4)} 
            left-1/${getRandomNumber(3, 4)} animate-float-delay`}
        ></div>
        <div
          className={`absolute w-28 h-28 bg-indigo-700 rounded-full opacity-20
             top-1/${getRandomNumber(1, 4)} 
             right-1/${getRandomNumber(2, 4)} animate-float-delay`}
        ></div>
        <div
          className={`absolute w-18 h-18 bg-indigo-700 rounded-full opacity-20 
          top-${getRandomNumber(5, 10)} 
          right-1/${getRandomNumber(1, 4)} animate-float-delay`}
        ></div>
        <div className="absolute w-56 h-56 bg-purple-600 rounded-full opacity-20 bottom-0 right-0 animate-float"></div>
      </div>
      {/* <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-64 h-64 bg-purple-700 rounded-full opacity-20 -top-32 -left-32 animate-float"></div>
        <div className="absolute w-48 h-48 bg-indigo-700 rounded-full opacity-20 top-1/2 left-1/4 animate-float-delay"></div>
        <div className="absolute w-56 h-56 bg-purple-600 rounded-full opacity-20 bottom-0 right-0 animate-float"></div>
      </div> */}

      <LandingPage />
    </>
  );
}
