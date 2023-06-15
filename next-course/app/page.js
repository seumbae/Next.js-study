'use client'

import { styled } from 'styled-components'
import { getFeaturedEvents } from "./lib/dummy-data";
import EventList from './components/events/event-list';

export default function Home() {
	const featuredEvents = getFeaturedEvents();
	
	return (
		<div>
			<EventList items={featuredEvents}/>
		</div>
	);
}
