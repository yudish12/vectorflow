import { useState } from "react";
import { BaseNode } from "./baseNode";

export const TransformNode = ({ id, data }) => {
  const [transformType, setTransformType] = useState(
    data?.transformType || "uppercase"
  );
  const [options, setOptions] = useState(data?.options || {});

  const handleOptionChange = (key, value) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <BaseNode
      id={id}
      targetHandles={[{ id: "input" }]}
      sourceHandles={[{ id: "output" }]}
      style={{ backgroundColor: "#f3e5f5" }}
    >
      <div style={{ padding: "10px" }}>
        <div style={{ fontWeight: "bold", marginBottom: "8px" }}>Transform</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <select
            value={transformType}
            onChange={(e) => setTransformType(e.target.value)}
            style={{ width: "100%" }}
          >
            <option value="uppercase">Uppercase</option>
            <option value="lowercase">Lowercase</option>
            <option value="trim">Trim</option>
            <option value="replace">Replace</option>
          </select>
          {transformType === "replace" && (
            <div style={{ display: "flex", gap: "8px" }}>
              <input
                type="text"
                value={options.find || ""}
                onChange={(e) => handleOptionChange("find", e.target.value)}
                placeholder="Find"
                style={{ flex: 1 }}
              />
              <input
                type="text"
                value={options.replace || ""}
                onChange={(e) => handleOptionChange("replace", e.target.value)}
                placeholder="Replace"
                style={{ flex: 1 }}
              />
            </div>
          )}
        </div>
      </div>
    </BaseNode>
  );
};
