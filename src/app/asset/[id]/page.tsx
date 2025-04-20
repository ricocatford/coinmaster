export default function Asset({ params }: { params: { id: string } }) {
    return (
        <div className="container">
            <h1>Asset ID: {params.id}</h1>
        </div>
    );
}
