import { ArrowForward } from '@material-ui/icons'
import React from 'react'
import './styles/Section.css'

const Section = () => {
    return (
        <section className='section-1'>
            
            <div className="section-cotainer">


                    <div className="texts">
                        <h1>Day Starts with a piece of <span>Pizza</span></h1>
                        <h4>And Ends with two piece of Pizza</h4>
                        <button>Discover</button>
                        <button>Menu</button>
                    </div>


                    <div className="black-box">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis possimus nesciunt dicta. Neque nam magnam sed. Illo illum iusto quidem ipsa distinctio sunt quo perspiciatis sit nesciunt ipsum, harum alias, tempore ab! Eveniet pariatur odio ratione quidem neque reprehenderit eligendi saepe, nobis doloremque inventore temporibus consequatur molestias ex non est? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, nihil.</p>
                        <button>
                            <span>more</span>
                            <ArrowForward className='arrow-forward'/>
                        </button>
                    </div>


            </div>

        </section>
    )
}

export default Section
