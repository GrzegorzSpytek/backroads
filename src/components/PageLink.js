import React from 'react';

const PageLink = ({ id, href, text, className }) => {
	return (
		<li key={id}>
			<a href={href} className={className}>
				{' '}
				{text}{' '}
			</a>
		</li>
	);
};

export default PageLink;
