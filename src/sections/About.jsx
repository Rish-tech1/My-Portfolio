import { Button1 } from '../components/Buttons'
import Pdf from "../assets/icons/pdf.svg?react";
import SvgIcon from '../components/SvgIcon';

export default function About() {


  return (
    <div className='about-section section' id="about">
      <h2>About</h2>
      <p>
  I&apos;m <span className="hl">Rishabh Jain</span>, a B.Tech undergraduate (2026) at 
  <a href="http://www.ipu.ac.in/" target="_blank"> Guru Gobind Singh Indraprastha University</a>. 
  I am passionate about crafting scalable and efficient digital solutions using the 
  <span className="hl"> MER(A)N stack</span> and exploring the endless possibilities of 
  <span className="hl"> Artificial Intelligence</span>.
</p>
<p>
  Over the past years, I’ve gained hands-on experience through internships, open-source contributions 
  (<span className="hl"> GSSoC, Hacktoberfest</span>), and hackathons, where I collaborated on 
  <span className="hl"> real-world projects</span> and enhanced my problem-solving skills. 
  I also enjoy diving into areas like <span className="hl"> AI, DevOps, and DSA</span> to 
  broaden my technical expertise.
</p>
<p>
  Currently, I am <span className="hl">seeking opportunities as a Full Stack Developer</span> 
  where I can apply my skills, grow professionally, and build impactful, intelligent applications.
</p>
<p>Let’s innovate and create something impactful! 🚀</p>

      <a href="https://drive.google.com/file/d/1TcJvFeiiow55JyyMsxej-M2Am0u7piO7/view?usp=sharing" target='_blank'>
        <Button1>
          <SvgIcon icon={Pdf} />
          Resume
        </Button1>
      </a>
    </div>
  )
}
