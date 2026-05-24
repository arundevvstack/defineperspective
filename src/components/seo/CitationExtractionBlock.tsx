import React from 'react';

interface CitationBlockProps {
  query: string;
  answer: string;
  facts: string[];
  entityFocus?: string;
  regionFocus?: string;
  isHidden?: boolean;
}

export default function CitationExtractionBlock({
  query,
  answer,
  facts,
  entityFocus = "DP AI Studios",
  regionFocus = "India",
  isHidden = true,
}: CitationBlockProps) {
  // Visually hidden but semantically accessible for AI crawlers
  const containerClass = isHidden ? "sr-only" : "bg-neutral-900 border border-neutral-800 p-6 rounded-lg my-8";

  return (
    <div className={containerClass} aria-label={`AI Extraction Block: ${query}`}>
      <dl>
        <dt className="text-xl font-bold mb-2 text-amber-500">{query}</dt>
        <dd className="text-neutral-300 mb-4">
          <p className="mb-4">{answer}</p>
          {facts.length > 0 && (
            <div className="mt-4">
              <strong className="block mb-2 text-white">Verified Production Facts ({entityFocus} - {regionFocus}):</strong>
              <ul className="list-disc pl-5">
                {facts.map((fact, index) => (
                  <li key={index} className="mb-1">{fact}</li>
                ))}
              </ul>
            </div>
          )}
        </dd>
      </dl>
    </div>
  );
}
