
import Opensource from '../assets/opensource.svg?react';
import Internship from '../assets/internship.svg?react';
import '../styles/experience.css';
import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';
import { TimeStamp } from '../components/TimelineItem';

import Github from '../assets/icons/github.svg?react';

import Souloxy from '../assets/souloxy.png'

export default function Experience() {
    return (
        <div className='experience-section section' style={{ paddingBottom: '0' }} id="experience">
            <h2>Work Experience</h2>
            <div className='experience reverse'>
                <div className='details'>
                    <h3>Internships</h3>
                    <p>Gained hands-on experience through internship by contributing to real-world projects, implementing features, fixing bugs, and optimizing workflows. Collaborated with team members to deliver solutions and improve overall project quality.</p>
                    <Timeline>
                        <TimelineItem icon={Souloxy} color="rgb(223, 109, 20)" to="https://www.linkedin.com/in/rishabhjainggsipu/">
                            <h4>Instant System Inc.</h4>
                            <TimeStamp stamp="2025" />
                            <p>Worked as a Full Stack Web Developer using the MER(A)N stack. During this internship, I gained hands-on experience in working with production environments, writing and executing test cases, and creating documentation.</p>
                        </TimelineItem>
                    </Timeline>
                </div>
                <div className="illustration">
                    <Internship />
                </div>
            </div>
            <div className='experience reverse'>
                <div className="illustration">
                    <Opensource />
                </div>
                <div className='details'>
                    <h3>Open Source Contribution</h3>
                    <p>Actively contributed to open-source projects by developing new features, resolving issues, and enhancing documentation. Engaged with the community through code reviews and discussions to drive improvements.</p>
                    <Timeline>
                        <TimelineItem icon={<Github />} color="#5f5f5fff" to="https://x.com/rishabh_8153/status/1716535654937690457">
                            <h4>Hacktoberfest</h4>
                            <TimeStamp stamp="Oct-2023" />
                            <p>Contributed to repositories, collaborating on code, issues, and pull requests.</p>
                        </TimelineItem>
                    </Timeline>
                     <Timeline>
                        <TimelineItem icon={<Github />} color="#5f5f5fff" to="https://x.com/rishabh_8153/status/1852341339444355153">
                            <h4>Hacktoberfest</h4>
                            <TimeStamp stamp="Oct-2024" />
                            <p>Contributed to the 5+ project by resolving technical issues and developing new functionalities, enhancing usability and efficiency.</p>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
           
            
        </div>
    )
}
