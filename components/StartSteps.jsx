const StartSteps = ({ number, title }) => (
  <div className="flex flex-row w-full mt-[20px] " >
    <div className="flex justify-center items-center w-[50px] h-[50px] rounded-[13px] bg-[rgba(228,213,213,0.5)]  "  >
      <p className="text-white" > 0{number + 1} </p>
    </div>
    <p className=" text-white font-normal text-[22px] ml-[25px]" > {title} </p>
  </div>
);

export default StartSteps;
