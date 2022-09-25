import React from 'react'; //importowanie REACT'a
import styles from './Header.module.css'; //import CSS dla Header

function Header()
{
    console.log(styles)
    return (
        <header className={styles.header}>
        <div>
            <h4>Pod Kasztanem albo innym Ogórkiem</h4>
        </div>
        <div>
            <input 
            style={{
                width: 'Calc(100%-20px)',
                backgroundColor: 'red'
                }}
                className={styles.input} 
                type="text" placeholder='Szukajcie, a znajdziecie..'/>
                <button className={styles.buttone}>Click</button>
        </div>
        </header>
    );
}

 export default Header;