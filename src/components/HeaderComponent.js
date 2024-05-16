import "../css/header.css";

const HeaderComponent = () => {
    return (
        <header>
            <nav>
                <div className="container">
                    <h1 className="logo">EMS</h1>
                    <ul className="navbar">
                        <li><a href="/">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div className="showcase">
                <h2>Employee Management System</h2>
            </div>
        </header>
    ); 
}

export default HeaderComponent;