// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  const nodeTypes = [
    { type: "customInput", label: "Input" },
    { type: "customOutput", label: "Output" },
    { type: "llm", label: "LLM" },
    { type: "text", label: "Text" },
    { type: "conditional", label: "Condition" },
    { type: "transform", label: "Transform" },
    { type: "merge", label: "Merge" },
    { type: "split", label: "Split" },
    { type: "format", label: "Format" },
  ];

  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {nodeTypes.map(({ type, label }) => (
          <DraggableNode key={type} type={type} label={label} />
        ))}
      </div>
    </div>
  );
};
