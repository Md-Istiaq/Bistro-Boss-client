import React from 'react'
import { Parallax, Background } from 'react-parallax';
function Cover({img ,title ,text}) {
    return (
        <Parallax
        blur={{ min:-100, max: 100 }}
        bgImageAlt="the dog"
        strength={-200}
    >
       <div
              className="hero lg:h-[500px] bg-fixed"
              style={{
                  backgroundImage: `url(${img})`
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                  <div className="max-w-md">
                      <h1 className="mb-5 text-5xl font-serif uppercase">{title}</h1>
                      <p className="mb-5  font-serif">
                         {text}
                      </p>
                  </div>
              </div>
          </div>
    </Parallax>
            
    )
}

export default Cover