import React from 'react'
import Navbar from '../components/Navbar'
import './about.css'
export default function About() {
    
   return (
    <div>
    <Navbar />
    <section id="about">
  <h2>About Us</h2>
  <h3>Our Mission</h3>
  <p>At our organization, we harness the power of cutting-edge satellite imagery analysis to detect and map plastic pollution in our oceans. We are deeply committed to combating this global crisis by empowering governments, NGOs, and all stakeholders with actionable data to enact effective solutions.</p>
  <h3>The Problem</h3>
  <p>Millions of tons of plastic enter our oceans each year, causing devastating ecological harm and threatening marine life. This plastic breaks down into microplastics, infiltrating the food chain and posing significant risks to human health.</p>
  <h3>Our Solution</h3>
  <p>We leverage sophisticated satellite imagery analysis techniques to identify plastic pollution in ocean surfaces. Our innovative algorithms pinpoint areas with high plastic concentrations, providing crucial insights for targeted cleanup efforts.</p>
 
</section>
    </div>
  )
}
