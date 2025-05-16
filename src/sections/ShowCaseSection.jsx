import  {useRef} from 'react'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const ShowCaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    const  projects = [project2Ref.current,project3Ref.current,project1Ref.current];




    useGSAP(()=> {
        projects.forEach((card, index)=> {
            gsap.fromTo(
                card,
                {
                    y:50, opacity:0
                },

                {
                    y:0,
                    opacity:1,
                    delay:0.3 * (index + 1),

                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        }),

       gsap.fromTo(sectionRef.current,
           {opacity:0},
           {opacity:1, duration:1.5})
    },[]);
    return (
        <section  id='work' ref={sectionRef} className='app-showcase'>
            <div className='w-full '>
                <div className='showcaselayout'>

                    {/*Left*/}
                    <div className='first-project-wrapper' ref={project1Ref}>
                        <div className='image-wrapper'>
                            <img src='/images/projectCoffee.png' alt='project1'/>

                        </div>
                        <div className='text-content'>
                            <h2>On Demand Hotel Website to Showcase the Menu and info
                                about a coffee shop </h2>
                            <p className='text-white-50 md:text-xl'>
                                A Website built with React, TailwindCSS for a more user-friendly
                                experience.This Website was built by a youtuber using just normal html and css but I
                                fined tuned with tailwindcss frameworks and React.
                            </p>

                        </div>
                    </div>


                    {/*Right*/}
                    <div className='project-list-wrapper overflow-hidden' >
                        <div className='project' ref={project2Ref}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src='/images/projectSkills.png' alt='jobskills'/>
                            </div>
                            <h2>Job Skill Match/Search This is a website intergrated with AI</h2>

                        </div>

                        <div className='project' ref={project3Ref}>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src='/images/projecttwitter.png' alt='jobskills'/>
                            </div>
                            <h2>Twitter Clone</h2>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}
export default ShowCaseSection
