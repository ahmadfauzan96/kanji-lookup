import "bootstrap/dist/css/bootstrap.min.css";
import type { JSX, ReactNode } from "react";

interface SingleLineCardProps {
  children: ReactNode;
}

export default function SingleLineCard({ children }: SingleLineCardProps): JSX.Element {
  return (
    <section className="card">
      <p className="card-header">{children}</p>
    </section>
  );
}
