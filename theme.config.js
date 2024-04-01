const YEAR = new Date().getFullYear();

export default {
  footer: (
    <footer>
      <large>
        <time>{YEAR}</time> © Copyright
        <a href="https://uspekhi.web.app"rel="noopener"  target="_blank" > USPEKHI</a>
      </large>
      <style jsx>{`
        footer {
          margin-top: 5rem;
        }
        a {
          float: center;
        }
      `}</style>
    </footer>
  ),
};
