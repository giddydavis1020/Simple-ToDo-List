import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import styles from './ProfilePage.module.css';

function ProfilePage() {
    const { email, token } = useAuth();

    const [todoStats, setTodoStats] = useState({
        total: 0,
        completed: 0,
        active: 0,
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchTodoStats() {
            if (!token) return;

            try {
                setLoading(true);
                setError('');

                const response = await fetch('/api/tasks?limit=100', {
                    method: 'GET',
                    headers: {
                        'X-CSRF-TOKEN': token,
                    },
                    credentials: 'include',
                });

                if (response.status === 401) {
                    throw new Error('Unauthorized');
                }

                if (!response.ok) {
                    throw new Error('Failed to fetch todos');
                }

                const data = await response.json();

                const todos = Array.isArray(data)
                    ? data
                    : Array.isArray(data.tasks)
                      ? data.tasks
                      : [];

                const total = todos.length;
                const completed = todos.filter(
                    todo => todo.isCompleted
                ).length;
                const active = total - completed;

                setTodoStats({
                    total,
                    completed,
                    active,
                });
            } catch (err) {
                setError(`Error loading statistics: ${err.message}`);
            } finally {
                setLoading(false);
            }
        }

        fetchTodoStats();
    }, [token]);

    const completionPercentage =
        todoStats.total > 0
            ? Math.round(
                  (todoStats.completed / todoStats.total) * 100
              )
            : 0;

    return (
        <main className={styles.page}>
            <h2 className={styles.heading}>Profile</h2>

            <p className={styles.description}>
                View your account information and todo progress.
            </p>

            <section className={styles.card}>
                <h3 className={styles.cardHeading}>
                    Account Information
                </h3>

                <div className={styles.accountInfo}>
                    <div className={styles.accountRow}>
                        <span className={styles.label}>Name</span>
                        <span className={styles.value}>
                            {email || 'Unavailable'}
                        </span>
                    </div>

                    <div className={styles.accountRow}>
                        <span className={styles.label}>Status</span>
                        <span
                            className={`${styles.value} ${
                                token ? styles.status : ''
                            }`}
                        >
                            {token
                                ? 'Authenticated'
                                : 'Not authenticated'}
                        </span>
                    </div>
                </div>
            </section>

            <section className={styles.card}>
                <h3 className={styles.cardHeading}>
                    Todo Statistics
                </h3>

                {loading && (
                    <p
                        className={styles.loading}
                        role="status"
                        aria-live="polite"
                    >
                        Loading statistics...
                    </p>
                )}

                {error && (
                    <p
                        className={styles.error}
                        role="alert"
                    >
                        {error}
                    </p>
                )}

                {!loading && !error && (
                    <>
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>
                                    {todoStats.total}
                                </span>
                                <span className={styles.statLabel}>
                                    Total Todos
                                </span>
                            </div>

                            <div className={styles.stat}>
                                <span className={styles.statNumber}>
                                    {todoStats.completed}
                                </span>
                                <span className={styles.statLabel}>
                                    Completed
                                </span>
                            </div>

                            <div className={styles.stat}>
                                <span className={styles.statNumber}>
                                    {todoStats.active}
                                </span>
                                <span className={styles.statLabel}>
                                    Active
                                </span>
                            </div>
                        </div>

                        {todoStats.total > 0 && (
                            <div className={styles.progressSection}>
                                <div className={styles.progressHeader}>
                                    <span>Completion</span>
                                    <span>
                                        {completionPercentage}%
                                    </span>
                                </div>

                                <div
                                    className={styles.progressTrack}
                                    role="progressbar"
                                    aria-label="Todo completion"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    aria-valuenow={completionPercentage}
                                >
                                    <div
                                        className={styles.progressBar}
                                        style={{
                                            width: `${completionPercentage}%`,
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </>
                )}
            </section>
        </main>
    );
}

export default ProfilePage;