import React from "react";

export default function ContentCard({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}
