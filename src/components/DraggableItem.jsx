// DraggableItem.jsx
// npm install react-draggable
import Draggable from 'react-draggable';

const DraggableItem = ({ children }) => {
  return (
    <Draggable>
      <div className="draggable-item">
        {children}
      </div>
    </Draggable>
  );
};

export default DraggableItem;
