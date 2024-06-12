import './NavBar.css'

function NavBar()
{
    return(
        <div className ="Navbar">
            <div className="left">
                <h1>TITLE</h1>
            </div>
            <div className = "leftDiv">
                <a className="right" href="">Home</a>
                <a className="right" href="">About Us</a>
                <a className="right" href="">Services</a>
            </div>
        </div>
    )
}

export default NavBar