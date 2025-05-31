// textNode.js

import { useState } from "react";
import { BaseNode } from "./baseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      sourceHandles={[{ id: "output" }]}
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div style={{ padding: "10px" }}>
        <div style={{ fontWeight: "bold", marginBottom: "8px" }}>Text</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label>
            Text:
            <input
              type="text"
              value={currText}
              onChange={handleTextChange}
              style={{ marginLeft: "8px", width: "calc(100% - 16px)" }}
            />
          </label>
        </div>
      </div>
    </BaseNode>
  );
};
