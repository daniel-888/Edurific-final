import { useState } from "react";


function Accordion1() {
    const [activeDefault, setActiveDefault] = useState(0);
    const defaultAccordion = [
        {
            title: "Will my children benefit academically from coding?",
            text:
                "Coding for Kids is a course that helps children improve their problem-solving abilities. It prepares children to excel in all aspects of their lives. They will perform better in academics as well as their other hobbies and passions if they have well-honed problem-solving skills. It teaches them to think for themselves. Children can do better if they can think better.",
            bg: "primary",
        },
        {
            title: "What are the prices of online coding classes for kids?",
            text:
                "The cost of an online coding class for kids varies greatly depending on the class level of the student. You must conduct extensive research on the available coding classes and their costs. However, you should register in a trustable class, such as Edurific. You can get a well-organized curriculum, a variety of resources, certified tutors by enrolling with Edurific.",

            bg: "info",
        },
        {
            title: "My children are already learning about computers in school. So, why should they join Edurific?",
            text:
                "While most schools provide computer education to students, our courses have a student-teacher ratio of one to one. Our courses are tailored to each child's needs based on his or her assessment. This greatly improves the child's understanding and learning of the concepts. We do not focus on teaching the child a single technology or language, but rather on improving important skills such as problem-solving, perseverance, logical thinking, abstract thinking, and so on. Kids work on projects that not only improve their technical knowledge, but also help them develop valuable creative self-expression, empathy, and communication skills for the future.",

            bg: "success",
            
        },
        {
            title: "Can we teach kids programming online?",
            text:
                "Yes, we can teach programming to children online because there are numerous curriculums designed specifically for children to learn this skill.",

            bg: "success",
        },
        {
            title: "Why it`s important for my kids to learn how to code?",
            text:
                "Because the world is changing so quickly, there is a high demand for people who can think critically and solve complex problems. Learning to code is an excellent way to teach your child problem-solving skills and how to work with algorithms. Programming is also an outlet for children to learn to be creative when attempting to complete new tasks. There are always new ways to collaborate, learn, and code, and programming provides children with a creative outlet to explore all of the different options. Whether or not your child pursues a career in programming, they will have the skills to understand how code works, which will be useful when using technology in other aspects of their lives.",

            bg: "success",
        },
        
    ];
  return (
    <>
        <div
            className="dlab-accordion"
            id="accordionFaq"
            defaultActiveKey="0"
        >
            {defaultAccordion.map((d, i) => (
                <div className="card" key={i}>
                    <div
                        eventKey={`${i}`}
                        className="card-header"
                        onClick={() =>
                            setActiveDefault(activeDefault === i ? -1 : i)
                        }
                    >
                        <h5 className="dlab-title">
                            <a href="javascript:void(0);"
                                className={`${
                                    activeDefault === i ? "" : "collapsed"
                                }`}
                                onClick={() =>
                                    setActiveDefault(
                                        activeDefault === i ? -1 : i
                                    )
                                }
                            >
                                {" "}
                                {d.title}
                            </a>
                        </h5>
                    </div>
                    {/* <div className="collapse show" eventKey={`${i}`}>
                        <div className="card-body">
                            <p className="m-b0">{d.text}</p>
                        </div>
                    </div> */}
                    <div className={`${
                                    activeDefault === i ? "collapsed show" : "collapsed"
                                }`} eventKey={`${i}`} onClick={() =>
                                    setActiveDefault(
                                        activeDefault === i ? -1 : i
                                    )
                                }>
                        <div className="card-body">
                            <p className="m-b0">{d.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default Accordion1;