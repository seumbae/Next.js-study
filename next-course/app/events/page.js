'use client';
import { useRouter } from "next/navigation";

import { getAllEvents } from "@/lib/dummy-data";
import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";

export default function AllEvents() {
	const router = useRouter();
	const events = getAllEvents();

	function findEventsHandler(year, month) {
		const fullPath = `/events/${year}/${month}`
		router.push(fullPath);
	}
	return (
		<>
			<EventsSearch onSearch={findEventsHandler}/>
			<EventList items={events} />
		</>
	);
}
