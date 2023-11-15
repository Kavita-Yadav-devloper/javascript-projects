import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
    return (
        <div
            id="about"
            className="w-full py-[10px] md:py-[30px] bg-white text-black relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* HEADING START */}
                <Div className="text-[0px] md:text-[30px] 2xl:text-[50px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
                </Div>
                {/* HEADING END */}

                {/* PARAGRAPH START */}
                <Div >
               Highly motivated and skilled ReactJS developer seeking a challenging position to utilize my knowledge and expertise in building responsive web applications.
               </Div>
<br className="invisible md:visible" />

               <div><b>Technical Skills:</b>
<div>
<span>Languages:</span> HTML, CSS, JavaScript
<br className="invisible md:visible" />
<span>Frameworks/Libraries:</span> React, Redux
<br className="invisible md:visible" />
<span>Databases:</span> MySQL
<br className="invisible md:visible" />
<span>Version Control:</span> Git
<br className="invisible md:visible" />
<span>IDEs/Editors:</span> Visual Studio Code, Sublime Text
<br className="invisible md:visible" />
<span>Operating Systems:</span> Windows, Linux
<br className="invisible md:visible" />
</div>
</div>
<br className="invisible md:visible" />
<div><b>Additional Skills:</b>
<br className="invisible md:visible" />
Strong problem-solving and debugging skills.
<br className="invisible md:visible" />

Excellent teamwork and communication skills.
<br className="invisible md:visible" />

Ability to learn new technologies quickly.
</div>
<div>
<br className="invisible md:visible" />

<b>Education:</b>
<br className="invisible md:visible" />
   
Bachelor of Engineering in Computer Science
<br className="invisible md:visible" />

SGSITS College, Indore, India
<br className="invisible md:visible" />
</div>
                {/* PARAGRAPH END */}
          </Wrapper>
        </div>
    );
};

export default AboutMe;
