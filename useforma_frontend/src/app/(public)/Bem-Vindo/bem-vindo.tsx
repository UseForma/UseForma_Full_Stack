import PublicMenu from '@/components/publicMenu/public-menu';
import styles from './bem-vindo.module.css';

export default function BemVindo() {
  return (
    <>
      <PublicMenu />
      <div className={styles.container}>
        {/* Background decoration */}
        <div className={styles.backgroundDecoration}>
          <div className={styles.decorationCircle1}></div>
          <div className={styles.decorationCircle2}></div>
        </div>
        
        <div className={styles.content}>
          {/* Header */}
          <div className={styles.header}>
            <h1 className={styles.title}>
              <span className={styles.titleUse}>USE</span>
              <span className={styles.titleForma}>FORMA</span>
            </h1>
            <p className={styles.subtitle}>
              Seu sistema completo de gestão e formação. Transforme sua experiência de aprendizado.
            </p>
            <p className={styles.description}>
              Plataforma inovadora que combina tecnologia avançada com metodologias comprovadas para maximizar seu desenvolvimento profissional e pessoal.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
