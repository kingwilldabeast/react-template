export default function Home (props) {

    return (
        <>
            <h1>Draggable Items</h1>
            <DraggableItem>
            <p>Drag me!</p>
            </DraggableItem>
            <DraggableItem>
            <p>Drag me too!</p>
            </DraggableItem>
            <ScrollableComponent/>
            <FixedComponent/>
        </>
    )
}