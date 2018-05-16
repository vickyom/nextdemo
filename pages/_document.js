import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    // Returns an object like: { html, head, errorHtml, chunks, styles }     
    return renderPage();
  }

  render () {    
    return (
      <html>
        <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="../static/css/bootstrap.min.css" />
        <script type="text/javascript" href="../static/js/bootstrap.min.js"></script>

          <title>My page</title>
        </Head>
        <body>
       <div className="container">
        
          <Main />
          <NextScript />
       
          </div>
        </body>

      </html>
    )
  }
}
