export default function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    return <div>User details page of User - {id}</div>;
}
