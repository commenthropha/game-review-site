import React from 'react'
import styles from "./styles/Hero.module.css"

const Hero = () => {
  return (
    <div id = "hero" className={`min-h-[800px] sm:min-h-[1000px] md:min-h-[1200px] lg:min-h-[1400px] xl:min-h-[1600px] ${styles.main}`}>
        Hero
    </div>
  )
}

export default Hero