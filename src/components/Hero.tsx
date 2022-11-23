import React, { FC } from 'react'
import { useGlobalContext } from '../context'

const Hero: FC = () => {
    const { closeSubmenu } = useGlobalContext()

    return <section className="hero" onMouseOver={closeSubmenu}>
        <div className="hero-center">
            <article className="hero-info">
                <h1>A responsible & slow developer's blog 🧑‍💻</h1>
                <p>
                    As a Software Engineer that have been already in the market for some time I am constantly learning new techniques
                    and applying different approaches to my solutions. Here I am planning to document the practices and techniques that
                    have helped me building useful and reusable software as well as improvements in processes.
                    [Under construction 🚨]
                </p>
                {/* <button className="btn">Start now</button> */}
            </article>
            <article className="hero-images">
                {/* <img src={""} alt="📲" className="phone" /> */}
            </article>
        </div>
    </section>
}

export default Hero