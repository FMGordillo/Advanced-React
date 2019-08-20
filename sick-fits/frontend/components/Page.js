import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Meta from './Meta';
import Header from './Header';

const theme = {
	red: '#FF0000',
	black: '#393939',
	grey: '#3A3A3A',
	lightgrey: '#E1E1E1',
	offWhite: '#EDEDED',
	maxWidth: '1000px',
	bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

const StylePage = styled.div`
	background: ${({ theme }) => theme.offWhite};
	color: ${({ theme }) => theme.black};
`;

const Inner = styled.div`
	max-width: ${({ theme }) => theme.maxWidth};
	margin: 0 auto;
	padding: 2rem;
`;

injectGlobal`
	@font-face {
		font-family: 'radnika_next';
		src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
		font-weight: normal; /* Why */
		font-style: normal; /* Why */
	}
	html {
		font-family:'radnika_next';
		box-sizing: border-box;
		font-size: 10px;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		margin: 0;
		padding: 0;
		font-size: 1.5rem;
		line-height: 2;
	}
	a {
		text-decoration: none;
		color: ${theme.black};
	}
`;

const Page = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<StylePage>
				<Meta />
				<Header />
				<Inner>{children}</Inner>
			</StylePage>
		</ThemeProvider>
	);
};

export default Page;
