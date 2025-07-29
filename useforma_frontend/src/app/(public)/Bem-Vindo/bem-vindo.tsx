import Link from 'next/link';
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
              Use<span className={styles.titleAccent}>Forma</span>
            </h1>
            <p className={styles.subtitle}>
              Seu sistema completo de gestão e formação. Transforme sua experiência de aprendizado.
            </p>
          </div>

          {/* Features */}
          <div className={styles.features}>
            <div className={styles.featureCard}>
              <div className={`${styles.featureIcon} ${styles.featureIconIndigo}`}>
                <svg className={`${styles.featureIconSvg} ${styles.featureIconSvgIndigo}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Aprendizado Inteligente</h3>
              <p className={styles.featureDescription}>Metodologias avançadas para maximizar seu desenvolvimento profissional.</p>
            </div>

            <div className={styles.featureCard}>
              <div className={`${styles.featureIcon} ${styles.featureIconGreen}`}>
                <svg className={`${styles.featureIconSvg} ${styles.featureIconSvgGreen}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Gestão Completa</h3>
              <p className={styles.featureDescription}>Controle total sobre seus cursos, progresso e certificações.</p>
            </div>

            <div className={styles.featureCard}>
              <div className={`${styles.featureIcon} ${styles.featureIconPurple}`}>
                <svg className={`${styles.featureIconSvg} ${styles.featureIconSvgPurple}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Performance</h3>
              <p className={styles.featureDescription}>Interface rápida e responsiva para uma experiência excepcional.</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaSection}>
            <Link 
              href="/Login-Signup"
              className={styles.ctaButton}
            >
              Começar Agora
              <svg className={styles.ctaIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <button className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}>
              Saiba Mais
            </button>
          </div>

          {/* Footer */}
          <div className={styles.footer}>
            <p>&copy; 2024 UseForma. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </>
  );
}
