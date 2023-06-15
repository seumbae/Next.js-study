'use client';

import { getAllEvents } from "@/lib/dummy-data";
import EventList from "@/components/events/event-list";

export default function AllEvents() {
	const events = getAllEvents();

	return (
		<div>
			<EventList items={events} />
		</div>
	);
}
