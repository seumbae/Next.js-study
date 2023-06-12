"use client";

import { useParams, useRouter } from "next/navigation";

export default function ClientProjectPage({ params }) {
	// const params = useParams();
	// console.log(params)
	console.log(params);
    const router = useRouter();

    const loadProjectHandler = () => {
        // load data...
        router.push('/clients/max/projecta')
    }
	return (
		<div>
			<h1>The Projects of a Given Client</h1>
            <button onClick={loadProjectHandler}>
                Load Project A
            </button>
		</div>
	);
}
