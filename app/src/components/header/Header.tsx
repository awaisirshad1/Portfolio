import { ThemeSelector } from '../../theme/ThemeSelector';
import FullLogoColored from '../../assets/icons/svg/Awais-Swagger-Logo-Full-Colored.svg' 
import FullLogoWhite from '../../assets/icons/svg/Awais-Swagger-Logo-Full-white.svg'
import './header.css'

const Header = () => {
  return (
    <nav class='header-nav'>
      <div class='wrapper'>
        <div class='header-nav-wrapper'>
          <FullLogoWhite class='svg-logo-white'/>
          <form class='search-bar-form'>
            <input type='text' class='search-bar-form-input'/>
            <button class='search-bar-form-button'>Explore</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;