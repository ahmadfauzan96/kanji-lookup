"use client";
import Link from "next/link";

export default function ResultsError({ error }) {
  return (
    <main className="error">
      <h2>An error occurred!</h2>
      <p>Unfortunately, something went wrong.</p>
      <p>{error.message}</p>
      <Link href="/">Go back</Link>
    </main>
  );
}
