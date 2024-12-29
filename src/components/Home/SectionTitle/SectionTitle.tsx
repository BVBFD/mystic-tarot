const SectionTitle = ({ title }: SectionTitleType) => (
  <div style={{ margin: "5rem 0 2rem 0" }}>
    <h2>{title}</h2>
  </div>
);

export default SectionTitle;

interface SectionTitleType {
  title: string;
}
