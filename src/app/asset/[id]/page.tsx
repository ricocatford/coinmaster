export default function Asset({ params }: { params: { id: string } }) {
    return (
        <div>
            <h1>Asset ID: {params.id}</h1>
        </div>
    );
}
