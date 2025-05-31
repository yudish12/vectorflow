import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  const nodeTypes = [
    { type: "customInput", label: "Input", color: "bg-gradient-to-br from-blue-400 to-blue-600" },
    { type: "customOutput", label: "Output", color: "bg-gradient-to-br from-green-400 to-green-600" },
    { type: "llm", label: "LLM", color: "bg-gradient-to-br from-purple-400 to-purple-600" },
    { type: "text", label: "Text", color: "bg-gradient-to-br from-yellow-400 to-yellow-600" },
    { type: "conditional", label: "Condition", color: "bg-gradient-to-br from-red-400 to-red-600" },
    { type: "transform", label: "Transform", color: "bg-gradient-to-br from-indigo-400 to-indigo-600" },
    { type: "merge", label: "Merge", color: "bg-gradient-to-br from-pink-400 to-pink-600" },
    { type: "split", label: "Split", color: "bg-gradient-to-br from-orange-400 to-orange-600" },
    { type: "format", label: "Format", color: "bg-gradient-to-br from-teal-400 to-teal-600" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Pipeline Components</h2>
      <div className="flex flex-wrap gap-4">
        {nodeTypes.map(({ type, label, color }) => (
          <DraggableNode key={type} type={type} label={label} color={color} />
        ))}
      </div>
    </div>
  );
};