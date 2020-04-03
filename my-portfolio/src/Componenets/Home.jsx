import React from 'react'
import Typical from 'react-typical'
import '../CSS/Home.css'

const Home = () => {

return (
        
            <div className='intro'>
                <> </>
                <p>
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            "Welcome.",
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

            </div>


    )
}

export default Home;