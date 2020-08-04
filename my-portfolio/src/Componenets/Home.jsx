import React, { useState } from 'react'
import Typical from 'react-typical'
import '../CSS/Home.css'

const Home = () => {
    let [displayTypical, setDisplayTypical] = useState(true)
    setTimeout(() => {
        setDisplayTypical(false)
    }, 16000)


    return (
        <div className='intro'>
            {displayTypical ? (
                <p>
                    <Typical
                        loop={1}
                        wrapper="p"
                        steps={[
                            "Welcome!",
                            2000,
                            "My name is Kadijah.",
                            2000,
                            "I'm a Software Engineer.",
                            2000,
                            "Based in Brooklyn, NY!",
                            2000
                        ]}
                    />
                </p>
            ) : (
                    <div className="displayIntro">
                        <div className='bio'>
                        <p>Welcome!</p>
                        <p>My name is Kadijah.</p>
                        <p> I'm a Software Engineer.</p>
                        <p>Based in Brooklyn, NY!</p>
                        </div>
                        <img className='cartoon' src='../../cartoon.jpg' alt='cartoonized'/>
                      
                    </div>
                )

            }


        </div>


    )
}

export default Home;