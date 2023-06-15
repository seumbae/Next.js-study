"use client";
import { useParams } from "next/navigation";

import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById } from "@/lib/dummy-data";

export default function EventDetail() {
	const param = useParams();

	const event = getEventById(param.id);

	if (!event) {
		return <p>No event Found!</p>;
	}

	return (
		<>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt={event.title}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</>
	);
}
