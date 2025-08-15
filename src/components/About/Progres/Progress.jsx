import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useModeContext } from '../../../context/modeContext';
import { useLanguageContext } from '../../../context/langContext';
import { useInView } from 'react-intersection-observer';

const Progress = () => {
  const { darkMode } = useModeContext();
  
  const { t,currentLang } = useLanguageContext();

 const isRTL = currentLang === 'ar' || currentLang === 'he' || currentLang === 'fa';
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const skills = [
    { title: t("Academic"), percent: 98 },
    { title: t("Artistic"), percent: 99 },
    { title: t("Sports"), percent: 97 },
  ];

  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    if (inView) {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          let start = 0;
          const step = () => {
            start += 1;
            if (start <= skill.percent) {
              setProgress((prev) => {
                const updated = [...prev];
                updated[index] = start;
                return updated;
              });
              requestAnimationFrame(step);
            }
          };
          step();
        }, index * 300);
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className="w-full">
      {skills.map((skill, index) => (
        <div key={index} className="my-6">
          <span className={`block text-[22px] font-normal  mb-2 transition-all duration-500 ease-in-out
            ${darkMode ? "text-[#f4af0f]" : "text-[#2b2873] "}
            `}>
            {skill.title}
          </span>
          <div className="h-2 w-full bg-black/10 rounded-md relative ">
            <div
              className={`h-full rounded-md bg-gradient-to-r relative
    ${darkMode ? "from-[#2b287301] to-[#091048] rtl:from-[#091048] rtl:to-[#2b287301] " : "from-[#2b287301] to-[#2b2873] rtl:from-[#2b2873] rtl:to-[#2b287301]"}`}
              style={{
                width: `${progress[index]}%`,
                transition: 'width 2s linear',
              }}
            >
              <span
                className="absolute bottom-4 text-4xl font-medium px-2 py-[2px]
                md:text-[45px] rtl:md:text-[40px]
                "
                style={
                  isRTL ? { left: '-14px' } 
                    : { right: '-14px' } 
                }
              >
                <div
                  className={`overLay w-[88px] h-[26px] absolute top-3 left-1 
                    md:top-4 md:left-2  rtl:md:left-0
        ${darkMode ? "bg-[#f4af0f]/70" : "bg-[#ffcc00]/60"}`}
                  style={{ zIndex: 0 }}
                ></div>

                <CountUp
                  className={`relative z-10 transition-all duration-500 ease-in-out 
        ${darkMode ? 'text-[#091048]' : 'text-[#2b2873]'}`}
                  end={progress[index]}
                  duration={3}
                  suffix="%"
                />
              </span>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Progress;
