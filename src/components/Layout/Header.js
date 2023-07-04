

import mealsImage from '../../assets/meals.png'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <>
        <header className={classes.header}>
            <h1>Food Hub</h1>
          <HeaderCartButton onClick ={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Oriental food pieces"/>
        </div>
        </>

      );
}
 
export default Header;