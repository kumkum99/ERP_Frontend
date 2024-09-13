import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../App.css';

const Navbar = () => {
    const [navExpanded, setNavExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();

    // Function to handle search
    const performSearch = () => {
        const query = searchQuery.toLowerCase();
        const sections = document.querySelectorAll('.content-section');
        let found = false;

        sections.forEach(section => {
            const content = section.textContent.toLowerCase();
            if (content.includes(query)) {
                moveToText(section, query);
                found = true;
            }
        });

        if (!found) {
            alert('No results found');
        }
    };

    // Function to move to the text in the section
    const moveToText = (element, query) => {
        const textNodes = getTextNodes(element);
        let foundNode = null;
        let foundIndex = -1;

        for (let node of textNodes) {
            const nodeText = node.textContent.toLowerCase();
            foundIndex = nodeText.indexOf(query);

            if (foundIndex !== -1) {
                foundNode = node;
                break;
            }
        }

        if (foundNode) {
            const range = document.createRange();
            const selection = window.getSelection();
            range.setStart(foundNode, foundIndex);
            range.setEnd(foundNode, foundIndex + query.length);
            selection.removeAllRanges();
            selection.addRange(range);
            foundNode.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    // Function to get text nodes from an element
    const getTextNodes = (node) => {
        const textNodes = [];

        function traverse(node) {
            if (node.nodeType === 3) {
                textNodes.push(node);
            } else {
                node.childNodes.forEach(child => traverse(child));
            }
        }

        traverse(node);
        return textNodes;
    };

    return (
        <section id="nav-bar" data-header>
            <nav className="navbar navbar-expand-lg navbar-light py-lg-5 py-7">
                <Link className="navbar-brand" to="/">
                    <i className="fab fa-slack"></i> ERP Unity
                </Link>
                <button className="navbar-toggler" type="button" onClick={() => setNavExpanded(!navExpanded)} aria-expanded={navExpanded}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${navExpanded ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/" onClick={() => setNavExpanded(false)}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about" onClick={() => setNavExpanded(false)}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/Services' ? 'active' : ''}`} to="/Services" onClick={() => setNavExpanded(false)}>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact" onClick={() => setNavExpanded(false)}>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">
                                <i className="fa fa-user" aria-hidden="true"></i> Login
                            </a>
                        </li>
                        <li className="search-container">
                            <input
                                type="text"
                                id="search-bar"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <i className="fa fa-search" onClick={performSearch}></i>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
