"use client";
import { useParams } from "next/navigation";

import { getEventById } from "@/lib/dummy-data";
import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import ErrorAlert from "@/components/ui/error-alert";

export default function EventDetail() {
	const param = useParams();

	const event = getEventById(param.id);

	if (!event) {
		return (
			<ErrorAlert>
				<p>No event Found!</p>
			</ErrorAlert>
		);
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
