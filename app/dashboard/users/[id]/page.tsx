export default function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    return (
        <div className="3xl flex flex-col flex-nowrap min-h-screen w-screen text-center justify-center">
            User details page of User - {id}
        </div>
    );
}
