import styled from "styled-components";

import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
export default function EventItem(props) {
	const { title, image, date, location, id } = props;
	const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const formattedAddress = location.replaceAll(", ", "\n");
	const exploreLink = `/events/${id}`;
	return (
		<ListItem>
			<Image src={"/" + image} alt={title} />
			{/* <img src={image} alt={title} /> */}
			<Content>
				<div>
					<h2>{title}</h2>
					<ReadableDate>
						<DateIcon />
						<time>{humanReadableDate}</time>
					</ReadableDate>
					<Address>
						<AddressIcon />
						<address>{formattedAddress}</address>
					</Address>
				</div>
				<Actions>
					<Button link={exploreLink}>
						<span>Explore Event</span>
						<Icon>
							<ArrowRightIcon />
						</Icon>
					</Button>
				</Actions>
			</Content>
		</ListItem>
	);
}

const ListItem = styled.li`
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);
	border-radius: 8px;
	overflow: hidden;
	background-color: white;
	margin: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

const Image = styled.img`
	width: 100%;
	object-fit: cover;
	height: 10rem;

	@media (min-width: 768px) {
		width: 40%;
		height: 14rem;
	}
`;

const Content = styled.div`
	width: 100%;
	padding: 0 1rem;
	text-align: center;
	@media (min-width: 768px) {
		width: 60%;
		padding: 0;
		text-align: left;
	}
	h2 {
		margin: 0.5rem 0;
		@media (min-width: 768px) {
			margin: 1rem 0;
		}
	}

	time {
		color: #666666;
		font-weight: bold;
	}

	address {
		margin: 0.5rem 0;
		color: #666666;
		white-space: pre;
	}
`;

const ReadableDate = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;

	svg {
		width: 1.25rem;
		height: 1.25rem;
		color: #666666;
	}
`;

const Address = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	svg {
		width: 1.25rem;
		height: 1.25rem;
		color: #666666;
	}
`;

const Actions = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: flex-end;
	}
	a {
		display: block;
	}
	a span {
		vertical-align: middle;
	}
`;

const Icon = styled.span`
	margin-left: 0.5rem;
	display: inline-flex;
	justify-content: center;
	align-items: center;

	svg {
		width: 1.25rem;
		height: 1.25rem;
	}
`;
