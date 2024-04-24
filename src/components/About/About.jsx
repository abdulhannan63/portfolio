import React from 'react'
import "./About.css"
import html_img from '../../assets/HTML-Blog-Cover.png';
import css_img from '../../assets/Css-img.jpeg';
import js_img from '../../assets/JS-img.png';
import react_img from '../../assets/React-img.png';
import { Card } from '../Card/Card'
const About = () => {
  return (
    <>
      <div className="about contain" id='about' data-aos="zoom-out-right" >
        <h1>About Me</h1><hr />
        <p> <span>I'm a passionate front-end developer</span>  with a knack for crafting engaging and user-friendly web experiences. I bring websites to life by translating design concepts into clean, responsive code. I'm proficient in HTML, CSS, and JavaScript, and I'm always eager to learn new frameworks and libraries to stay ahead of the curve.  I thrive in collaborative environments and enjoy working closely with designers and back-end developers to bring a project from vision to reality.</p>
        <div className="skills d-md-flex flex-wrap" >
          <Card path={html_img} title="HTML" desc="I possess a strong foundation in HTML, the cornerstone of web development" />
          <Card path={css_img} title="CSS" desc="I bring websites to life visually using CSS. I can craft clean, maintainable CSS that adheres to best practices." />
          <Card path={js_img} title="JS" desc="I elevate web experiences with dynamic and interactive elements using JavaScript." />
          <Card path={react_img} title="React" desc="I build dynamic and reusable user interfaces with React, a popular JavaScript library. " />
        </div>
      </div>
    </>
  )
}

export default About