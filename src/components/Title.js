import React from 'react';

const Title = ({ title, titleBold }) => {
	return (
		<div className="section-title">
			<h2>
				{title} <span>{titleBold}</span>
			</h2>
		</div>
	);
};

export default Title;
