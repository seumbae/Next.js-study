"use client";
import { useParams } from "next/navigation";
import styled from "styled-components";

import { getFilteredEvents } from "@/lib/dummy-data";
import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";

export default function FilteredEvents() {
	const params = useParams();

	const filtered = params.slug.split("/");
	if (!filtered) {
		return <Paragraph>Loading...</Paragraph>;
	}

	const filteredYear = +filtered[0];
	const filteredMonth = +filtered[1];

	if (
		isNaN(filteredYear) ||
		isNaN(filteredMonth) ||
		filteredYear > 2030 ||
		filteredYear < 2021 ||
		filteredMonth < 1 ||
		filteredMonth > 12
	) {
		return (
			<>
				<ErrorAlert>
					<p>Invalid Filter. Please adjust your values!</p>;
				</ErrorAlert>
				<Frg>
					<Button link="/events">Show All Events</Button>
				</Frg>
			</>
		);
	}

	const filteredEvents = getFilteredEvents({
		year: filteredYear,
		month: filteredMonth,
	});

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<>
				<ErrorAlert>
					<p>No events found for the chosen filter!</p>
				</ErrorAlert>
				<Frg>
					<Button link="/events">Show All Events</Button>
				</Frg>
			</>
		);
	}

	const date = new Date(filteredYear, filteredMonth - 1);

	return (
		<>
			<ResultsTitle date={date} />
			<EventList items={filteredEvents} />
		</>
	);
}

const Frg = styled.div`
	margin: auto;
	text-align: center;
`;
