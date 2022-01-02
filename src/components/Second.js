import React from 'react'
import './styles/Second.css'
import b1 from './assets/b1.jpg'
import b2 from './assets/b2.jpg'
import b3 from './assets/b3.jpg'
import b4 from './assets/b4.jpg'
import b5 from './assets/b5.jpg'
import b6 from './assets/b6.jpg'

const Second = () => {
    return (
        <section className='second-section'>
            <div className="second-container">

            <div className="card">
                <img src={b1} alt="" />
                <p>Big Boy Spicy</p>
                <button>Order</button>
            </div>


            <div className="card">
                <img src={b2} alt="" />
                <p>Big Boy Spicy</p>
                <button>Order</button>
            </div>


            <div className="card">
                <img src={b3} alt="" />
                <p>Big Boy Spicy</p>
                <button>Order</button>
            </div>


            <div className="card">
                <img src={b4} alt="" />
                <p>Big Boy Spicy</p>
                <button>Order</button>
            </div>


            <div className="card">
                <img src={b5} alt="" />
                <p>Big Boy Spicy</p>
                <button>Order</button>
            </div>


            <div className="card">
                <img src={b6} alt="" />
                <p>Big Boy Spicy</p>
                <button>Order</button>
            </div>









            </div>
        </section>
    )
}

export default Second
