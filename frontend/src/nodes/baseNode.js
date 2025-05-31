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
  width = 200,
}) => {
  // Common styles
  const baseStyle = {
    width,
    minHeight,
    border: "1px solid black",
    position: "relative",
    ...style,
  };

  const calculateHandlePosition = (index, total) => {
    if (total === 1) return "50%";
    const spacing = (minHeight - (total - 1) * handleGap) / total;
    return `${handleOffset + index * (spacing + handleGap)}px`;
  };

  return (
    <div style={baseStyle}>
      {targetHandles.map((input, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{ top: calculateHandlePosition(index, targetHandles.length) }}
        />
      ))}
      {children}
      {sourceHandles.map((output, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{ top: calculateHandlePosition(index, sourceHandles.length) }}
        />
      ))}
    </div>
  );
};
