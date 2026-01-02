import ResourceDetailPage from "../[type]/[id]/page";

// Redirect single-segment resources (e.g. /resources/1) to a default type or handle them
// Simplest fix: Re-use the same component but map '1' to params 
// Ideally we redirect, but for now let's just render the same view via a wrapper or direct export

export default async function ResourceIdDirectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    // Default to 'book' if type is missing in URL
    // We mock the params object to match what ResourceDetailPage expects
    const mockedParams = Promise.resolve({ type: 'book', id });
    return <ResourceDetailPage params={mockedParams} />;
}
