import React from 'react';

import Title from '../components/Title';
import ServiceArticle from './ServiceArticle';

import { services } from '../data';

const Service = () => {
	return (
		<section className="section services" id="services">
			<Title title={'our'} titleBold={'service'} />
			<div className="section-center services-center">
				{services.map((service) => {
					return <ServiceArticle key={service.id} {...service} />;
				})}
			</div>
		</section>
	);
};

export default Service;
