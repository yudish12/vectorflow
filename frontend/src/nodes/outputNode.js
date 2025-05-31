// outputNode.js

import { useState } from "react";
import { BaseNode } from "./baseNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      targetHandles={[{ id: "value" }]}
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div style={{ padding: "10px" }}>
        <div style={{ fontWeight: "bold", marginBottom: "8px" }}>Output</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label>
            Name:
            <input
              type="text"
              value={currName}
              onChange={handleNameChange}
              style={{ marginLeft: "8px" }}
            />
          </label>
          <label>
            Type:
            <select
              value={outputType}
              onChange={handleTypeChange}
              style={{ marginLeft: "8px" }}
            >
              <option value="Text">Text</option>
              <option value="File">Image</option>
            </select>
          </label>
        </div>
      </div>
    </BaseNode>
  );
};
