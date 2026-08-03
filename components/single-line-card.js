import "bootstrap/dist/css/bootstrap.min.css";

/**
 * @param {React.ReactNode} children - The child components to be rendered within the layout.
 */
export default function SingleLineCard({ children }) {
  return (
    <section className="card">
      <p className="card-header">{children}</p>
    </section>
  );
}
