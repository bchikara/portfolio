import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Bhupesh Chikara is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Bhupesh Chikara, bhupesh, chikara, web developer portfolio, bhupesh web developer, bhupesh developer, mern stack, Bhupesh Chikara portfolio, bchikara-portfolio"
      />
      <meta property="og:title" content="Bhupesh Chikara's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/a/U3k9zhI" />
      <meta property="og:url" content="https://bchikara.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Bhupesh Chikara',
};
