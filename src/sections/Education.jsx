import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';
import { TimeStamp } from '../components/TimelineItem';
import School from '../assets/icons/school.svg?react';
import College from '../assets/icons/college.svg?react';
import Learning from '../assets/learning.svg?react';
import '../styles/education.css';

export default function Education() {
    return (
        <div className='section education-section' id='education'>
            <h2>Education</h2>
            <div className='education'>
                <div className="illustration">
                    <Learning />
                </div>
                <div className='details'>
                    <Timeline>
                        <TimelineItem icon={<School />} bgColor="#444444">
                            <h4>Rishabh Public School [10+2]</h4>
                            <TimeStamp stamp="2021 - 2022" />
                            <p>Intermediate</p>
                        </TimelineItem>
                        <TimelineItem icon={<College />} bgColor="#444444">
                            <h4> Guru Gobind Singh Indraprastha University
[B.Tech]</h4>
                            <TimeStamp stamp="2022 - 2026" />
                            <p>Current CGPA: 8.07</p>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    )
}
