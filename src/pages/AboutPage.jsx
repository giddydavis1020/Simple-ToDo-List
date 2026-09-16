import styles from './AboutPage.module.css';

function AboutPage() {
    return (
        <main className={styles.page}>
            <div className={styles.hero}>
                <h2 className={styles.heading}>
                    About the Todo App
                </h2>

                <p className={styles.intro}>
                    This Todo app helps you create, manage, and organize
                    your tasks in one simple place.
                </p>
            </div>

            <div className={styles.grid}>
                <section className={styles.card}>
                    <h3 className={styles.cardHeading}>
                        Features
                    </h3>

                    <ul className={styles.list}>
                        <li>Create todos</li>
                        <li>Complete todos</li>
                        <li>Edit todos</li>
                        <li>Filter and sort todos</li>
                    </ul>
                </section>

                <section className={styles.card}>
                    <h3 className={styles.cardHeading}>
                        Technologies
                    </h3>

                    <ul className={styles.list}>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Vite</li>
                        <li>CSS Modules</li>
                    </ul>
                </section>
            </div>
        </main>
    );
}

export default AboutPage;