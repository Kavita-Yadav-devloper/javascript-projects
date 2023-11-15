import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
import Div from "./Div";

// IMAGES
import sk8 from "../assets/sk-8.png";
import sk9 from "../assets/sk-9.png";
import sk10 from "../assets/sk-10.png";
import sk11 from "../assets/sk-11.png";
import sk6 from "../assets/redux.png";
import sk7 from "../assets/node1.png";

import pattern from "../assets/heading-pattern.png";
import pe1 from "../assets/sec-3-p-e-1.png";
import pe2 from "../assets/sec-3-p-e-2.png";
import pe3 from "../assets/sec-3-p-e-3.png";

const Skills = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
    const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
    return (
        <div
            id="skills"
            className="bg-[#111111] py-[50px] md:py-[100px] relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <div className="sec-3-bg-gradient-1" />
            <div className="sec-3-bg-gradient-2" />
            <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2} />
            <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3} />
            {/* BACKGROUND ELEMENTS END */}
            <Wrapper>
                {/* SKILL ICONS START */}
                <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative">
                    <SkillIcon path={sk8} />
                    <SkillIcon path={sk9} />
                    <SkillIcon path={sk10} />
                    <SkillIcon path={sk11} />
                <SkillIcon path={sk6} />
                <SkillIcon path={sk7} />

                </Div>
                {/* SKILL ICONS END */}

                {/* SERVICES SECTION START */}
                <div className="flex items-end justify-between flex-wrap-reverse py-[10px] md:py-[50px] relative">
                    {/* SERVICES START */}
                    <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10">
                        
                        <Service
                            num="1"
                            title="E-commerce Website"
                            desc="
                            Created an e-commerce website using React and CSS.
                             Implemented product listing, searching, and filtering functionality."
                            data={[
                                "HTML",
                                "CSS",
                                "JAVA SCRIPT",
                                "REACT",
                                "STRIPE"
                            ]}
                        />
                        <Service
                            num="2"
                            title="Real-Time Chat Application"
                            desc="
                            Developed a real-time chat application using React.
                            Implemented features like user authentication, message sending, and real-time updates.
                            Utilized WebSocket technology for instant messaging."
                            data={[
                                "HTML",
                                "CSS",
                                "JAVA SCRIPT",
                                "REACT",
                            ]}
                        />
                        <Service
                            num="3"
                            title="Real-Time Weather Application"
                            desc="
                            A weather application built with React.js is a web application that allows users to access real-time weather information for different locations. It provides users with current weather conditions, such as temperature, humidity, wind speed."
                            data={[
                                "HTML",
                                "CSS",
                                "JAVA SCRIPT",
                                "REACT",
                            ]}
                        />
                       
                    </div>
                    {/* SERVICES END */}

                  
                </div>
                {/* SERVICES SECTION END */}

                <Portfolio />
                <Achievements />
            </Wrapper>
        </div>
    );
};

export default Skills;
