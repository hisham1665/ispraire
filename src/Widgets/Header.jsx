import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';

function Header() {
    return (
        <div style={{ 
                backgroundImage: `url('https://i.pinimg.com/originals/2d/4d/9b/2d4d9b1d2de5fb1f0b119699c4419cbf.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '65vh', // Half of the viewport height
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
                    backdropFilter: 'blur(4px)', // Blur effect
                    zIndex: 1,
                }}
            />
            
            <div>
                <NavBar />
            </div>
            <div className='z-50'>
                <Hero />
            </div>
            
        </div>
        
    );
}

export default Header;