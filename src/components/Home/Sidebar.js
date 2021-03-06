import React from 'react';
import { FaLinkedin, FaFacebookSquare, FaTwitter, FaInstagramSquare } from 'react-icons/fa';

function Sidebar() {
    return (
        <div className={`d-none d-sm-none d-md-block py-5 relative bg-white sidebar z-10`}>
            <ul className="space-y-8 absolute h-[300px] bottom-20 socialLinks">
                <li><a href="https://www.linkedin.com/company/nairobits" target="_blank" rel="noreferrer"><span className="hidden">linkedin</span> <FaLinkedin className="h-7 w-7" /></a></li>
                <li><a href="https://www.facebook.com/NairobitsTrust?_rdc=1&_rdr" target="_blank" rel="noreferrer"><span className="hidden">faceboook</span> <FaFacebookSquare className="h-7 w-7" /></a></li>
                <li><a href="https://twitter.com/Nairobits" target="_blank" rel="noreferrer"><span className="hidden">twitter</span> <FaTwitter className="h-7 w-7" /></a></li>
                <li><a href="https://www.instagram.com/nairobitstrust/?hl=en" target="_blank" rel="noreferrer"><span className="hidden">instagram</span> <FaInstagramSquare className="h-7 w-7" /></a></li>
            </ul>
        </div>
    )
}

export default Sidebar
