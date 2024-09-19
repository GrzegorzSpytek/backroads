import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Tours from './components/Tours';
import Footer from './components/Footer';

const App = () => {
	return (
		<body>
			<Navbar />
			<Hero />
			<About />
			<Service />
			<Tours />
			<Footer />

			<script src="./js/app.js"></script>
		</body>
	);
};

export default App;
