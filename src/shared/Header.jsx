import { useAuth } from '../contexts/AuthContext.jsx';
import Logoff from '../features/Logoff.jsx';
import Navigation from './Navigation.jsx';
import styles from './Header.module.css';

function Header() {
    const { isAuthenticated } = useAuth();

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <h1 className={styles.title}>Todo List</h1>

                <Navigation />

                {isAuthenticated && (
                    <div className={styles.logoutArea}>
                        <Logoff />
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;