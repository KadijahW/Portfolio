import React from 'react'
import Typical from 'react-typical'

const Home = () => {

    return (
        <div>
            <div className='intro'>
                <h1>Hi.</h1>
                <p>
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            "My name is Kadijah.",
                            2000,
                            "I'm a Software Engineer.",
                            2000,
                            "I'm based in Brooklyn, NY!",
                            2000   
                        ]}
                    />
                </p>

            </div>

        </div>

    )
}

export default Home;