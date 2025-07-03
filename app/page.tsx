'use client';

import { useState } from "react";

export default function LawnEstimator() {
  const [size, setSize] = useState(2000);
  const [grassHeight, setGrassHeight] = useState("normal");
  const [extras, setExtras] = useState({
    bagging: false,
    edging: false,
    weeds: false,
  });
  const [quote, setQuote] = useState<string | null>(null);

  const calculateQuote = () => {
    const baseRate = 20;
    const costPerSqft = 0.015;
    const lawnCost = size * costPerSqft;

    let grassFee = 0;
    if (grassHeight === "long") grassFee = 10;
    if (grassHeight === "overgrown") grassFee = 20;

    const extrasTotal =
      (extras.bagging ? 5 : 0) +
      (extras.edging ? 3 : 0) +
      (extras.weeds ? 5 : 0);

    const total = baseRate + lawnCost + grassFee + extrasTotal;
    setQuote(total.toFixed(2));
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h2>Lawn Mowing Quote Estimator</h2>

      <label>Lawn Size (sqft): {size}</label>
      <input type="range" min="500" max="10000" step="100"
        value={size} onChange={e => setSize(Number(e.target.value))} />

      <label>Grass Height:</label>
      <select value={grassHeight} onChange={e => setGrassHeight(e.target.value)}>
        <option value="normal">Normal</option>
        <option value="long">Long</option>
        <option value="overgrown">Overgrown</option>
      </select>

      <div>
        <label><input type="checkbox"
          checked={extras.bagging}
          onChange={() => setExtras({ ...extras, bagging: !extras.bagging })} />
          Bag Clippings ($5)</label><br />
        <label><input type="checkbox"
          checked={extras.edging}
          onChange={() => setExtras({ ...extras, edging: !extras.edging })} />
          Edge Trimming ($3)</label><br />
        <label><input type="checkbox"
          checked={extras.weeds}
          onChange={() => setExtras({ ...extras, weeds: !extras.weeds })} />
          Weed Removal ($5)</label>
      </div>

      <button onClick={calculateQuote}>Get Quote</button>

      {quote && (
        <div>
          <h3>Estimated Total: ${quote}</h3>
        </div>
      )}
    </div>
  );
}
