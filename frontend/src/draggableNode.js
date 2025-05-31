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
      className={`${color} rounded-xl shadow-md px-5 py-3 cursor-grab transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <span className="text-white font-semibold text-sm">{label}</span>
    </div>
  );
};