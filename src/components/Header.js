import { logo } from "../Utils/constants";

const HeaderEle = () => {
    return (
        <div className="header">
            <div className="logo">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderEle;