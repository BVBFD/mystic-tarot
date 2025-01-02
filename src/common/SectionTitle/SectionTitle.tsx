import React from "react";

const SectionTitle = ({ title, style }: SectionTitleType) => (
  <div style={{ margin: "5rem 0 2rem 0", ...style }}>
    <h2>{title}</h2>
  </div>
);

export default SectionTitle;

interface SectionTitleType {
  title: string;
  style?: React.CSSProperties;
}
