import '../styles/projects.css'
import ProjectCard, { Holder, Content, Tags, Tag, CardActions } from '../components/ProjectCard'

export default function Projects() {
  return (
    <div className='section projects-section' id="projects">
      
      <h2>Projects</h2>
      <Holder>
        <ProjectCard>
          <img src='Screenshot (77).png' alt='forever' />
          <Content>
            <h3>Forever E-commerce</h3>
            <p>A modern e-commerce website built with React, Node.js, Express, and Tailwind CSS. It provides a seamless shopping experience with a clean UI and efficient backend integration.</p>
            <Tags>
              <Tag hashtag="React" />
              <Tag hashtag="Nodejs" />
              <Tag hashtag="Express" />
              <Tag hashtag="Tailwind Css" />
            </Tags>
          </Content>
          <CardActions visit="https://forever-frontend-hazel.vercel.app/" source="https://github.com/Rish-tech1/Forever-Brand" />
        </ProjectCard>
        <ProjectCard>
          <img src='Screenshot (78).png' alt='Mojito' />
          <Content>
            <h3>Mojito Drink</h3>
            <p>An interactive landing page showcasing Mojito drinks with smooth GSAP animations and a stylish design, built using ReactJS and Tailwind CSS.</p>
            <Tags>
              <Tag hashtag="Gsap" />
              <Tag hashtag="Reactjs" />
              <Tag hashtag="TailwindCSS" />
            </Tags>
          </Content>
          <CardActions visit="https://velvetpourmojito.netlify.app/" source="https://github.com/Rish-tech1/Velvet-pour-mojito-project" />
        </ProjectCard>
        <ProjectCard>
          <img src='Screenshot (79).png' alt='AiClone' />
          <Content>
            <h3>NeuraChat-AI</h3>
            <p>A secure, full-stack AI chat application with JWT authentication, role-based access, and advanced admin tools. Built with React, MongoDB, Express, and Pinecone.</p>
            <Tags>
              <Tag hashtag="React" />
              <Tag hashtag="Mongodb" />
              <Tag hashtag="Express js" />
              <Tag hashtag="Tailwind Css" />
              <Tag hashtag="Gemini Ai" />
              <Tag hashtag="Pinecone" />
            </Tags>
          </Content>
          <CardActions visit="https://neurachat-ai-di7d.onrender.com/login" source="https://github.com/Rish-tech1/NeuraChat-AI" />
        </ProjectCard>
        <ProjectCard>
          <img src='Aichatbot.png' alt='Chatbot' />
          <Content>
            <h3>Ai Chatbot</h3>
            <p>An AI-powered chatbot platform with a markdown editor, theme support, and secure JWT-based authentication. Designed for seamless writing, deployment, and enhanced user experience.</p>
            <Tags>
              <Tag hashtag="React" />
              <Tag hashtag="Mongodb" />
              <Tag hashtag="Express js" />
              <Tag hashtag="Tailwind Css" />
              <Tag hashtag="Gemini Ai" />
            </Tags>
          </Content>
          <CardActions source="https://github.com/Rish-tech1/Ai-chatbot" />
        </ProjectCard>
       
      </Holder>
    </div>
  )
}
