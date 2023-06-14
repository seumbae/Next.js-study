'use client'

import { styled } from 'styled-components'
import { getFeaturedEvents } from "./lib/dummy-data";

export default function Home() {
	const featuredEvents = getFeaturedEvents();

	return (
		<div>
			<ul>
				<Head>Hello!!!!</Head>
			</ul>
		</div>
	);
}

const Head = styled.div`
  font-size: 4rem;
  font-weight: 700;
`
