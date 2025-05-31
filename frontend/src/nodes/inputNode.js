// inputNode.js

import { useState } from "react";
import { BaseNode } from "./baseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      sourceHandles={[{ id: "value" }]}
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div style={{ padding: "10px" }}>
        <div style={{ fontWeight: "bold", marginBottom: "8px" }}>Input</div>
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
              value={inputType}
              onChange={handleTypeChange}
              style={{ marginLeft: "8px" }}
            >
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </label>
        </div>
      </div>
    </BaseNode>
  );
};
