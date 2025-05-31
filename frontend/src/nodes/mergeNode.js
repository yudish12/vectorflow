import { useState } from "react";
import { BaseNode } from "./baseNode";

export const MergeNode = ({ id, data }) => {
  const [mergeType, setMergeType] = useState(data?.mergeType || "concat");
  const [separator, setSeparator] = useState(data?.separator || " ");

  return (
    <BaseNode
      id={id}
      targetHandles={[{ id: "input1" }, { id: "input2" }, { id: "input3" }]}
      sourceHandles={[{ id: "output" }]}
      style={{ backgroundColor: "#e8f5e9" }}
    >
      <div style={{ padding: "10px" }}>
        <div style={{ fontWeight: "bold", marginBottom: "8px" }}>Merge</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <select
            value={mergeType}
            onChange={(e) => setMergeType(e.target.value)}
            style={{ width: "100%" }}
          >
            <option value="concat">Concatenate</option>
            <option value="join">Join</option>
            <option value="sum">Sum</option>
          </select>
          {mergeType === "join" && (
            <input
              type="text"
              value={separator}
              onChange={(e) => setSeparator(e.target.value)}
              placeholder="Separator"
              style={{ width: "100%" }}
            />
          )}
        </div>
      </div>
    </BaseNode>
  );
};
