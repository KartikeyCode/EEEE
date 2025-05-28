import styles from './page.module.css';

export default function CertificateButton() {
  return (
    <div className={styles.container}>
      <a
        href="/NPTEL25CS11S843204694.pdf"
        target="_blank"
        className={styles.button}
      >
        Course Certificate
      </a>
    </div>
  );
}
