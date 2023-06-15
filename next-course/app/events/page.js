'use client';

import { getAllEvents } from "@/lib/dummy-data";
import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";

export default function AllEvents() {
	const events = getAllEvents();

	return (
		<>
			<EventsSearch />
			<EventList items={events} />
		</>
	);
}
