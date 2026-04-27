import { personalInfo } from '../../data/personalInfo';
import { useContactForm } from '../../hooks/useContactForm';
import styles from './ContactSection.module.css';

export function ContactSection() {
  const { formData, errors, isSubmitting, isSuccess, submitError, handleChange, handleSubmit } =
    useContactForm();

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's discuss opportunities</p>
        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Email</span>
              <a href={`mailto:${personalInfo.email}`} className={styles.infoValue}>
                {personalInfo.email}
              </a>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Location</span>
              <span className={styles.infoValue}>{personalInfo.location}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>LinkedIn</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.infoValue}>
                linkedin.com/in/pk7500
              </a>
            </div>
          </div>

          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            noValidate
          >
            {isSuccess && <div className={styles.success}>Message sent successfully!</div>}
            {submitError && <div className={styles.error}>Failed to send. Please try again.</div>}

            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                id="name"
                type="text"
                className={styles.input}
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                aria-invalid={!!errors.name}
              />
              {errors.name && <span className={styles.fieldError}>{errors.name}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                id="email"
                type="email"
                className={styles.input}
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                aria-invalid={!!errors.email}
              />
              {errors.email && <span className={styles.fieldError}>{errors.email}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="subject" className={styles.label}>Subject</label>
              <input
                id="subject"
                type="text"
                className={styles.input}
                value={formData.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
                aria-invalid={!!errors.subject}
              />
              {errors.subject && <span className={styles.fieldError}>{errors.subject}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                className={styles.textarea}
                rows={5}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                aria-invalid={!!errors.message}
              />
              {errors.message && <span className={styles.fieldError}>{errors.message}</span>}
            </div>

            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
