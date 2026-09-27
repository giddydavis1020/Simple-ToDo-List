import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext.jsx';
import styles from './LoginPage.module.css';

function LoginPage() {
    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState('');
    const [isLoggingOn, setIsLoggingOn] = useState(false);

    const from = location.state?.from || {
        pathname: '/todos',
        search: '',
        hash: '',
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate(
                `${from.pathname}${from.search || ''}${from.hash || ''}`,
                { replace: true }
            );
        }
    }, [isAuthenticated, navigate, from]);

    async function handleSubmit(event) {
        event.preventDefault();
        setIsLoggingOn(true);
        setAuthError('');

        const result = await login(email, password);

        if (!result.success) {
            setAuthError(result.error);
            setIsLoggingOn(false);
        }
    }

    return (
        <main className={styles.page}>
            <section className={styles.card}>
                <h2 className={styles.heading}>Welcome Back</h2>

                <p className={styles.description}>
                    Log in to manage your todos and keep track of your tasks.
                </p>

                <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                >
                    {authError && (
                        <p
                            className={styles.error}
                            role="alert"
                        >
                            {authError}
                        </p>
                    )}

                    <div className={styles.field}>
                        <label
                            className={styles.label}
                            htmlFor="email"
                        >
                            Email
                        </label>

                        <input
                            className={styles.input}
                            id="email"
                            type="email"
                            value={email}
                            onChange={event =>
                                setEmail(event.target.value)
                            }
                            autoComplete="email"
                            required
                        />
                    </div>

                    <div className={styles.field}>
                        <label
                            className={styles.label}
                            htmlFor="password"
                        >
                            Password
                        </label>

                        <input
                            className={styles.input}
                            id="password"
                            type="password"
                            value={password}
                            onChange={event =>
                                setPassword(event.target.value)
                            }
                            autoComplete="current-password"
                            required
                        />
                    </div>

                    <button
                        className={styles.button}
                        type="submit"
                        disabled={isLoggingOn}
                    >
                        {isLoggingOn ? 'Logging in...' : 'Log In'}
                    </button>
                </form>
            </section>
        </main>
    );
}

export default LoginPage;