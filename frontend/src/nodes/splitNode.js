import { useState } from "react";
import { BaseNode } from "./baseNode";

export const SplitNode = ({ id, data }) => {
  const [splitType, setSplitType] = useState(data?.splitType || "character");
  const [delimiter, setDelimiter] = useState(data?.delimiter || ",");
  const [maxSplits, setMaxSplits] = useState(data?.maxSplits || 2);

  return (
    <BaseNode
      id={id}
      targetHandles={[{ id: "input" }]}
      sourceHandles={[{ id: "output1" }, { id: "output2" }, { id: "output3" }]}
      style={{ backgroundColor: "#fff3e0" }}
    >
      <div style={{ padding: "10px" }}>
        <div style={{ fontWeight: "bold", marginBottom: "8px" }}>Split</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <select
            value={splitType}
            onChange={(e) => setSplitType(e.target.value)}
            style={{ width: "100%" }}
          >
            <option value="character">By Character</option>
            <option value="delimiter">By Delimiter</option>
            <option value="length">By Length</option>
          </select>
          {splitType === "delimiter" && (
            <input
              type="text"
              value={delimiter}
              onChange={(e) => setDelimiter(e.target.value)}
              placeholder="Delimiter"
              style={{ width: "100%" }}
            />
          )}
          <input
            type="number"
            value={maxSplits}
            onChange={(e) => setMaxSplits(parseInt(e.target.value) || 2)}
            min="2"
            max="3"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </BaseNode>
  );
};
