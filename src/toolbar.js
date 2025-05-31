import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  const nodeTypes = [
    { type: "customInput", label: "Input", color: "bg-blue-500" },
    { type: "customOutput", label: "Output", color: "bg-green-500" },
    { type: "llm", label: "LLM", color: "bg-purple-500" },
    { type: "text", label: "Text", color: "bg-yellow-500" },
    { type: "conditional", label: "Condition", color: "bg-red-500" },
    { type: "transform", label: "Transform", color: "bg-indigo-500" },
    { type: "merge", label: "Merge", color: "bg-pink-500" },
    { type: "split", label: "Split", color: "bg-orange-500" },
    { type: "format", label: "Format", color: "bg-teal-500" },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Pipeline Components</h2>
      <div className="flex flex-wrap gap-4">
        {nodeTypes.map(({ type, label, color }) => (
          <DraggableNode key={type} type={type} label={label} color={color} />
        ))}
      </div>
    </div>
  );
};