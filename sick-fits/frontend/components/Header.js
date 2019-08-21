import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';

Router.onRouteChangeStart = () => {
	NProgress.start();
};

Router.onRouteChangeComplete = () => {
	NProgress.done();
};

Router.onRouteChangeError = () => {
	NProgress.done();
};

const StyledHeader = styled.header`
	.bar {
		border-bottom: 10px solid ${({ theme }) => theme.black};
		display: grid;
		grid-template-columns: auto 1fr;
		justify-content: space-between;
		align-items: stretch;
		@media (max-width: 1300px) {
			grid-template-columns: 1fr;
			justify-content: center;
			border-bottom: 1px solid ${({ theme }) => theme.lightGray};
		}
	}
	.sub-bar {
		display: grid;
		grid-template-columns: 1fr;
	}
`;

const Logo = styled.h1`
	font-size: 4rem;
	margin-left: 2rem;
	position: relative;
	transform: skew(-7deg);
	a {
		padding: 0.5rem 1rem;
		background: ${({ theme }) => theme.red};
		color: white;
		text-transform: uppercase;
		text-decoration: none;
	}
	@media (max-width: 1300px) {
		margin: 0;
		text-align: center;
	}
`;

const Header = () => (
	<StyledHeader>
		<div className="bar">
			<Logo>
				<Link href="/">
					<a>Sick fits</a>
				</Link>
			</Logo>
			<Nav />
		</div>
		<div className="sub-bar">
			<p>Search</p>
		</div>
		<div>Cart</div>
	</StyledHeader>
);

export default Header;
