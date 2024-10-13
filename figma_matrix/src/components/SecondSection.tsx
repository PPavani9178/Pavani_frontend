import React from "react";

const SecondSection: React.FC  = () => {
  return (
    <div
  className="w-[1440px] h-[832px] p-[32px_120px_40px_120px] gap-[var(--fontsize16)] opacity-0 bg-[rgb(0,22,28)"
>
<div
  className="w-[350px] h-[1052px] max-w-[var(--width1200)] gap-[var(--itemspacings)] opacity-0 
             md:w-[1200px] md:h-[504px] md:opacity-100"
>
  {/* Your content goes here */}
  <div
      className="w-[608px] h-[504px] gap-[16px] opacity-0 
                 sm:w-[350px] sm:h-[1052px] sm:max-w-[var(--width1200)] 
                 sm:gap-[var(--itemspacings)] sm:opacity-0
                 flex flex-col sm:flex-col md:flex-row md:gap-[16px]" // Column on small screens, row on medium and larger
    >
      <div
  className="w-[280px] h-[504px] p-[72px_37px_32px_37px] gap-0 
             rounded-[var(--radius56)] rounded-[var(--fontsize16)] 
             opacity-0 border-[var(--strokeweight1)] 
             sm:w-[350px] sm:h-[348px] 
             sm:rounded-[16px_0px_0px_0px] sm:gap-0 
             sm:opacity-0 bg-sec2bg1"
>
  {/* Content goes here */}
  <p className="text-white">This is some content inside the responsive div.</p>
</div>
      
      
    </div>
</div>
</div>

  );
};

export default SecondSection;