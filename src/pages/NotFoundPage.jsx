import { Link } from 'react-router';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
    return (
        <main className={styles.page}>
            <section className={styles.card}>
                <p className={styles.code}>404</p>

                <h2 className={styles.heading}>
                    Page Not Found
                </h2>

                <p className={styles.description}>
                    Sorry, the page you're looking for doesn't exist or
                    may have been moved.
                </p>

                <div className={styles.links}>
                    <Link
                        className={`${styles.link} ${styles.primaryLink}`}
                        to="/"
                    >
                        Go Home
                    </Link>

                    <Link
                        className={styles.link}
                        to="/about"
                    >
                        About
                    </Link>

                    <Link
                        className={styles.link}
                        to="/todos"
                    >
                        Todos
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default NotFoundPage;