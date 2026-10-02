import { useState } from "react";

// Shows a neutral block if the image URL fails to load.
export default function SmartImage({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div role="img" aria-label={alt} className={`bg-stone ${className}`} />;
  return (
    <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={`object-cover ${className}`} />
  );
}
