import React,{useState} from 'react'
import './styles/Header.css'
import { MenuOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import {Data} from './Data'

const Header = () => {

    const [open,setOpen] = useState(false)

    const showMenu = (e) => {
        e.preventDefault()
        setOpen(!open)
    }

    return (
        <div className='header'>
            <div className="header-container">



                <div className="logo">
                    <h1>eBurger</h1>
                </div>


                <div className="number">
                    <span></span>
                    <p>+1 983 1234 5567</p>
                </div>


                <div className="right">
                    <ShoppingCartOutlined className='shopping-cart'/>
                    <MenuOutlined className='menu-icon' onClick={showMenu}/>
                </div>


            </div>


            <nav className={open ? 'slider active' : 'slider'}>
                <ul onClick={showMenu}>
                    {Data.map((item,index) => {
                        return (
                            <li key={index}>
                                <a href={item.path}>{item.text}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>




        </div>
    )
}

export default Header
