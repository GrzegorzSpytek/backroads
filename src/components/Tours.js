import React from 'react';

import Title from '../components/Title';
import TourArticle from './TourArticle';

import { tours } from '../data';

const Tours = () => {
	return (
		<section className="section" id="tours">
			<Title title={'featured'} titleBold={'tours'} />

			<div className="section-center featured-center">
				{tours.map((tour) => {
					return <TourArticle key={tour.id} {...tour} />;
				})}
			</div>
		</section>
	);
};

export default Tours;
