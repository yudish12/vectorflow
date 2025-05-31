// llmNode.js

import { BaseNode } from "./baseNode";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      inputs={[{ id: "system" }, { id: "prompt" }]}
      outputs={[{ id: "response" }]}
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div style={{ padding: "10px" }}>
        <div style={{ fontWeight: "bold", marginBottom: "8px" }}>LLM</div>
        <div>This is a LLM.</div>
      </div>
    </BaseNode>
  );
};
