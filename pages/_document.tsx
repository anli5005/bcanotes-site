import Document, { Html, Head, Main, NextScript } from "next/document";

class SiteDocument extends Document {
    render() {
        return <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Charis+SIL:ital,wght@0,400;0,700;1,400;1,700&family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
                
                {/* @ts-ignore */}
                <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />

                {/* @ts-ignore */}
                <meta name="theme-color" media="(prefers-color-scheme: dark) and (prefers-contrast: more)" content="#000000" />

                {/* @ts-ignore */}
                <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0a1224" />

                <meta name="theme-color" content="#096de3" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>;
    }
}

export default SiteDocument;