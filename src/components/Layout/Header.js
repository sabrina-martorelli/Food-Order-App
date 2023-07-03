

import mealsImage from '../../assets/meals.png'
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <>
        <header className={classes.header}>
            <h1>HappyMeals</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Oriental food pieces"/>

        </div>
        </>

      );
}
 
export default Header;