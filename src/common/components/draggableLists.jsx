import PropTypes from 'prop-types';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export function DraggableLists({
  renderList,
  renderItem,
  getListKeys,
  getListItems,
  onDrag
}) {
  const onDragEnd = (result) => {
    if (result.destination.droppableId !== result.source.droppableId) {
      onDrag(
        result.source.droppableId,
        result.source.index,
        result.destination.droppableId,
        result.destination.index
      );
    }
  };

  // eslint-disable-next-line react/display-name
  const withDraggableRenderItem = (renderItem) => (el, id, index) =>
    (
      <Draggable key={id} draggableId={String(id)} index={index}>
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
    );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {getListKeys().map((listKey) => (
        <Droppable key={listKey} droppableId={String(listKey)}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {renderList(
                listKey,
                getListItems(listKey),
                withDraggableRenderItem(renderItem)
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </DragDropContext>
  );
}

DraggableLists.propTypes = {
  renderList: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
  getListKeys: PropTypes.func.isRequired,
  getListItems: PropTypes.func.isRequired,
  onDrag: PropTypes.func.isRequired
};
