import React, { Component } from 'react';
import { Link } from '../routes';
class header extends Component {
    render() {
        return (
           
                
                    <nav className="navbar navbar-dark bg-dark">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="movies" params={{ slug: 'mumbai' }}>
                                    <a className="nav-link">Movies Listing</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/mumbai/events" params={{ slug: 'mumbai' }}>
                                    <a className="nav-link">Events Listing</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                
                
            
        );
    }
}

export default header;
