import "bootstrap/dist/css/bootstrap.min.css";

export default function SingleLineCard({ children }) {
  return (
    <section className="card">
      <p className="card-header">{children}</p>
    </section>
  );
}
