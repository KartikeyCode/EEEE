import styles from './page.module.css';

export default function CertificateButton() {
  return (
    <div className={styles.container}>
      <a
        href="/NOC/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S84320371404245990.pdf"
        target="_blank"
        className={styles.button}
      >
        Course Certificate
      </a>
    </div>
  );
}
