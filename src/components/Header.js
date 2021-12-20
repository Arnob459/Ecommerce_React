import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
function Header() {
    let user = JSON.parse(localStorage.getItem('user-info'));
    const navigate = useNavigate();
    function logout() {
        localStorage.clear();
        navigate("/login");
    }

    return (
        <div className="col-sm-12">
            <Navbar bg="dark" variant="dark">

                <Navbar.Brand ><Link className="btn btn-dark" to="/">Simple E-commerce</Link></Navbar.Brand>
                <Nav className="me-auto navbar_warapper">
                    <Link className="btn btn-dark" to="/">Products List</Link>
                    
                    <Link className="btn btn-dark" to="/search">Search Products</Link>
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link className="btn btn-dark" to="/add">Add Product</Link>
                                <Link className="btn btn-dark" to="/update">update Product</Link>
                    <Link className="btn btn-dark" to="/mlist">Member List</Link>

                            </>
                            :
                            <>
                                <Link className="btn btn-dark" to="/login">Login</Link>
                                <Link className="btn btn-dark" to="/signup">Signup</Link>
                            </>
                    }

                </Nav>
                {localStorage.getItem('user-info') ?
                    <Nav className="me-auto">
                        <NavDropdown title={user && user.first_name}>
                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    : null}

            </Navbar>

        </div>
    );
}

export default Header;