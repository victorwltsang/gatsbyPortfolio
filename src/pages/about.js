import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Content from '../components/Content/Content';

const about = () => (
	<Layout>
		<SEO title="About Me | Victor Tsang" />
		<Content noHero>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio risus, tristique id arcu a, venenatis viverra mi. Ut at nulla dui. Donec posuere tellus nec molestie lacinia. Aenean pulvinar rutrum tincidunt. Phasellus porta eget nisi sit amet cursus. Donec ultricies sagittis neque, eget ultrices purus lacinia luctus. Sed hendrerit convallis ligula quis euismod. Vestibulum aliquet dui nec pulvinar pharetra. Suspendisse non lacus blandit, bibendum nibh eu, tincidunt mauris. Integer magna mauris, efficitur in orci at, bibendum euismod lacus. Phasellus fringilla arcu eget ligula eleifend, non ultrices mi finibus. Vivamus vel pellentesque mi, quis laoreet tortor.
			</p>
			<p>
				Donec ut elit tortor. Donec suscipit lectus justo, sit amet laoreet massa commodo ac. Curabitur felis leo, eleifend at volutpat sed, scelerisque eget elit. Curabitur ultricies, eros non fermentum gravida, ligula odio efficitur ante, at iaculis erat nisi vitae lorem. Proin commodo, tortor at vulputate tincidunt, velit tellus vulputate velit, in rhoncus leo neque non nunc. In in consequat ex, quis ullamcorper dolor.
			</p>
			<p>
				Hi, my name is Victor! I'm just a typical cookie-cutter, boiler-plate, Front-end Engineer. &#128514;
			</p>
		</Content>
	</Layout>
);

export default about;
