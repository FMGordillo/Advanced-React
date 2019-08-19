import Head from 'next/head';

const Meta = ({ title }) => (
	<Head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta charSet="utf-8" />
		<link rel="shortcut icon" href="/static/favicon.png" type="image/x-icon" />
		<link rel="stylesheet" href="/static/nprogress.css" />
		<title>{title || 'Hello'}</title>
	</Head>
);

export default Meta;
