import { ThemeSelector } from '../../theme/ThemeSelector';
import FullLogoColored from '../../assets/icons/svg/Awais-Swagger-Logo-Full-Colored.svg' 
import FullLogoWhite from '../../assets/icons/svg/Awais-Swagger-Logo-Full-white.svg'
import './header.css'

const Header = () => {
  return (
    <nav class='header-nav'>
      
      <ThemeSelector/>
    </nav>
  );
};

export default Header;