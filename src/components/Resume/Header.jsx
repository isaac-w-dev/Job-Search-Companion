import React from 'react'

const Header = () => {
    return (
        <div className='category'>
            <h2>Header</h2>
            <ul>
                <li>Line 1: first and last name</li>
                <li>Line 2: City, State of residence | Phone number you can be reached at in this format: (555)-555-5555 | Email that is appropriate for professional use</li>
                <li>Line 2 or Line 3 if no room: LinkedIn, GitHub(If computer science major), Personal website</li>
                <li>Ex. John Doe</li>
                <li>Columbus, Ohio | (777) 777-7777 | johndoe15@gmail.com</li>
                <li>LinkedIn address | GitHub | Personal Website</li>
            </ul>
        </div>
    )
}

export default Header