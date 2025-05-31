import { useState } from "react";
import { BaseNode } from "./baseNode";

export const FormatNode = ({ id, data }) => {
  const [formatType, setFormatType] = useState(data?.formatType || "date");
  const [template, setTemplate] = useState(data?.template || "");
  const [locale, setLocale] = useState(data?.locale || "en-US");

  const getDefaultTemplate = (type) => {
    switch (type) {
      case "date":
        return "YYYY-MM-DD";
      case "number":
        return "#,##0.00";
      case "currency":
        return "$#,##0.00";
      case "custom":
        return "";
      default:
        return "";
    }
  };

  const handleFormatTypeChange = (e) => {
    const newType = e.target.value;
    setFormatType(newType);
    setTemplate(getDefaultTemplate(newType));
  };

  return (
    <BaseNode
      id={id}
      targetHandles={[{ id: "input" }]}
      sourceHandles={[{ id: "output" }]}
      style={{ backgroundColor: "#e0f7fa" }}
    >
      <div style={{ padding: "10px" }}>
        <div style={{ fontWeight: "bold", marginBottom: "8px" }}>Format</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <select
            value={formatType}
            onChange={handleFormatTypeChange}
            style={{ width: "100%" }}
          >
            <option value="date">Date</option>
            <option value="number">Number</option>
            <option value="currency">Currency</option>
            <option value="custom">Custom</option>
          </select>
          <input
            type="text"
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            placeholder="Format template"
            style={{ width: "100%" }}
          />
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value)}
            style={{ width: "100%" }}
          >
            <option value="en-US">English (US)</option>
            <option value="en-GB">English (UK)</option>
            <option value="fr-FR">French</option>
            <option value="de-DE">German</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};
