export const DraggableNode = ({ type, label, color }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`${color} rounded-lg shadow-md px-4 py-3 cursor-grab transition-transform hover:scale-105 hover:shadow-lg`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <span className="text-white font-medium">{label}</span>
    </div>
  );
};