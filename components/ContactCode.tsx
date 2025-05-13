import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'bchikara.com',
    href: 'https://bchikara.com',
  },
  {
    social: 'email',
    link: 'bhupeshchikara@gmail.com',
    href: 'mailto:bhupeshchikara@gmail.com',
  },
  {
    social: 'github',
    link: 'bchikara',
    href: 'https://github.com/bchikara',
  },
  {
    social: 'linkedin',
    link: 'bchikara',
    href: 'https://www.linkedin.com/in/bchikara/',
  },
  {
    social: 'leetcode',
    link: 'bchikara',
    href: 'https://www.leetcode.com/bchikara',
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
