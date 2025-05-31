import { useState } from "react";
import { BaseNode } from "./baseNode";

export const ConditionalNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || "equals");
  const [value, setValue] = useState(data?.value || "");

  return (
    <BaseNode
      id={id}
      targetHandles={[{ id: "input" }, { id: "condition" }]}
      sourceHandles={[{ id: "true" }, { id: "false" }]}
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div style={{ padding: "10px" }}>
        <div style={{ fontWeight: "bold", marginBottom: "8px" }}>Condition</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <select
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            style={{ width: "100%" }}
          >
            <option value="equals">Equals</option>
            <option value="greater">Greater Than</option>
            <option value="less">Less Than</option>
            <option value="contains">Contains</option>
          </select>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Value to compare"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </BaseNode>
  );
};
