import Link from "next/link";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <div className="not-found">
      <header>
        <h1>Not Found!</h1>
      </header>
      <main>
        <p>Unfortunately, we could not find the requested page or resource.</p>
        <p>
          This page was intentionally styled poorly so you don’t go around to any undefined routes
          👍🏼
        </p>
        <Link href="/">Go back</Link>
      </main>
      <Footer />
    </div>
  );
}
