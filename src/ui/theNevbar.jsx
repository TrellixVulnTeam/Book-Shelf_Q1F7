import classes from '../styles/sass/nevbar.module.scss'

import { Link } from 'react-router-dom';

function theNevbar() {


    return(
        <>
            <header className={`${classes.header}`}>
                <img src="../../bookshelfLogo.png" alt="logo" />
                <div className={`${classes.responsiveDisplayNone} ${classes.div}`}>
                    <Link to='/home'><h3 className={`${classes.displayBtn}`}>Home</h3></Link>
                    <Link to='/books'><h3  className={`${classes.displayBtn}`}>Books</h3></Link>
                    <Link to='/magazines'><h3  className={`${classes.displayBtn}`}>Magazines</h3></Link>            
                </div>
            </header>
            <footer className={`${classes.displayNone} ${classes.header}`}>
                <div className={`${classes.div}`}>
                    <Link to='/home'><h3 className={`${classes.displayBtn}`}>Home</h3></Link>
                    <Link to='/books'><h3 className={`${classes.displayBtn}`}>Books</h3></Link>
                    <Link to='/magazines'><h3 className={`${classes.displayBtn}`}>Magazines</h3></Link>            
                </div>
            </footer>
        </>
    )
}

export default theNevbar ;