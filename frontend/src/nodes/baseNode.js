import { Handle, Position } from "reactflow";

export const BaseNode = ({
  id,
  targetHandles = [],
  sourceHandles = [],
  style = {},
  children,
  handleGap = 20,
  handleOffset = 10,
  minHeight = 80,
  width = 280,
}) => {
  const baseStyle = {
    width,
    minHeight,
    ...style,
  };

  const calculateHandlePosition = (index, total) => {
    if (total === 1) return "50%";
    const spacing = (minHeight - (total - 1) * handleGap) / total;
    return `${handleOffset + index * (spacing + handleGap)}px`;
  };

  return (
    <div 
      style={baseStyle}
      className="bg-white rounded-xl shadow-lg border border-gray-200 transition-all duration-200 hover:shadow-xl"
    >
      {targetHandles.map((input, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{ top: calculateHandlePosition(index, targetHandles.length) }}
          className="!w-4 !h-4 !bg-blue-500 hover:!bg-blue-600 transition-colors !border-2 !border-white"
        />
      ))}
      <div className="p-5">
        {children}
      </div>
      {sourceHandles.map((output, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{ top: calculateHandlePosition(index, sourceHandles.length) }}
          className="!w-4 !h-4 !bg-blue-500 hover:!bg-blue-600 transition-colors !border-2 !border-white"
        />
      ))}
    </div>
  );
};