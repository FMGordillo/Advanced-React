import Meta from './Meta';
import Header from './Header';

const Page = ({ children }) => {
	return (
		<div>
			<Meta />
			<Header />
			{children}
		</div>
	);
};

export default Page;
