import { ThemeSelector } from '../../theme/ThemeSelector';
import './header.css'

const Header = () => {
  return (
    <nav class='header-nav'>
      <ThemeSelector></ThemeSelector>
    </nav>
  );
};

export default Header;