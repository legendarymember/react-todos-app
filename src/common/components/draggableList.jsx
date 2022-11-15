import PropTypes from 'prop-types';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';

function DraggableListContext({ children, onDrag }) {
  const onDragEnd = (result) => {
    if (
      result.destination &&
      result.destination.droppableId !== result.source.droppableId
    ) {
      onDrag(
        result.source.droppableId,
        result.source.index,
        result.destination.droppableId,
        result.destination.index
      );
    }
  };

  return <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>;
}

DraggableListContext.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
  onDrag: PropTypes.func.isRequired
};

export function DraggableList({ listKey, items, renderItem }) {
  const renderedItems = items.map((el, index) => (
    <Draggable key={el.id} draggableId={String(el.id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {renderItem(el)}
        </div>
      )}
    </Draggable>
  ));

  return (
    <Droppable droppableId={listKey}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {renderedItems}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

DraggableList.propTypes = {
  listKey: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired
};

DraggableList.Context = DraggableListContext;
