import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext.jsx';
import styles from './Logoff.module.css';

function Logoff() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const [logoutError, setLogoutError] = useState('');

    async function handleLogout() {
        setLogoutError('');

        const result = await logout();

        if (result.success) {
            navigate('/login');
        } else {
            setLogoutError(result.error);
        }
    }

    return (
        <div className={styles.container}>
            {logoutError && (
                <p className={styles.error} role="alert">
                    {logoutError}
                </p>
            )}

            <button
                className={styles.button}
                type="button"
                onClick={handleLogout}
            >
                Log Out
            </button>
        </div>
    );
}

export default Logoff;