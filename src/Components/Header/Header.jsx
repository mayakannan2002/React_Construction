import React, { useState } from 'react';
import './Header.css'; 
import logo from "./../../assets/image/logo-small.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearchClick = () => {
        if (!searchInput.trim()) {
            alert("Please enter a search term.");
            return;
        }

        // Clear previous highlights
        const previousMarks = document.querySelectorAll("mark");
        previousMarks.forEach((mark) => {
            const parent = mark.parentNode;
            parent.replaceChild(document.createTextNode(mark.textContent), mark);
        });

        const allTextNodes = [];
        const body = document.body;

        // Function to wrap matching text in <mark>
        const highlightText = (node, term) => {
            const regex = new RegExp(`(${term})`, "gi");
            const html = node.nodeValue.replace(regex, `<mark>$1</mark>`);
            const span = document.createElement("span");
            span.innerHTML = html;
            node.parentNode.replaceChild(span, node);
            return span.querySelector("mark"); // Return the first <mark>
        };

        // Traverse the DOM to collect text nodes
        const traverseNodes = (node) => {
            if (node.nodeType === 3) {
                allTextNodes.push(node);
            } else if (
                node.nodeType === 1 &&
                node.nodeName !== "SCRIPT" &&
                node.nodeName !== "STYLE"
            ) {
                for (let child of node.childNodes) {
                    traverseNodes(child);
                }
            }
        };

        traverseNodes(body);

        // Check for matches and highlight the first match
        let matchFound = false;
        let firstMatchElement = null;
        for (let node of allTextNodes) {
            if (node.nodeValue.toLowerCase().includes(searchInput.toLowerCase())) {
                matchFound = true;
                firstMatchElement = highlightText(node, searchInput);
                break;
            }
        }

        if (matchFound && firstMatchElement) {
            firstMatchElement.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        } else {
            alert("No matches found.");
        }
    };

    return (
        <header className="header">
            <div className="logo-section">
                <img src={logo} alt="Logo" className="logo" />
                <h1 className="title">VIRTUE BUILDERS</h1>
            </div>
            <button className="toggle-button" onClick={toggleMenu}>
                ☰
            </button>
            <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                <ul className="nav-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/#product-page">Products</a></li>
                    <li><a href="/Contact">Contact</a></li>
                    <div className="search-section">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="search-box" 
                            value={searchInput} 
                            onChange={handleSearchChange} 
                        />
                        <button className="search-button" onClick={handleSearchClick}>
                            Search
                        </button>
                    </div>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
