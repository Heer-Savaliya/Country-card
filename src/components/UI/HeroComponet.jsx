import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';

const HeroComponet = () => {
  return (
    <main className="hero-section main">
        <div className="container grid grid-two-cols">
            <div className="hero-content">
                <h1 className="heading-xl">
                    Explore the world , one country at a time . 
                </h1>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nisi veritatis reiciendis ipsum dolorum maiores? Voluptatibus facere cumque quibusdam neque. Iure voluptatum cumque eius nam.
                </p>
                <button className="btn btn-darken btn-inline bg-white-box">
                    Start Exploring <FaLongArrowAltRight />
                </button>
            </div>
            <div className="hero-image">
                <img src="/image/world.png" alt="" />
            </div>
        </div>
      </main>
  )
}

export default HeroComponet
