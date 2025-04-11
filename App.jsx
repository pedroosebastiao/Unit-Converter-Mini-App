import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);
  const [fromUnit, setFromUnit] = useState("km");
  const [toUnit, setToUnit] = useState("m");
  const [result, setResult] = useState(0);

  const units = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
    kg: 1,
    g: 0.001,
    mg: 0.000001,
    lb: 0.453592,
    oz: 0.0283495,
    TB: 1e12,
    GB: 1e9,
    MB: 1e6,
    KB: 1e3,
    B: 1,
    bit: 0.125,
    h: 3600,
    min: 60,
    s: 1,
    ms: 0.001,
  };

  function convert() {
    const baseValue = value * units[fromUnit];
    setResult(baseValue / units[toUnit]);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-700 text-white p-6">
      <div className="bg-purple-800 p-6 rounded-lg shadow-lg text-center w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Unit Converter</h1>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border p-2 rounded text-black w-full mb-4"
          placeholder="Enter value"
        />
        <div className="flex justify-center space-x-2 mb-4">
          <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} className="text-black p-2 rounded">
            {Object.keys(units).map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
          <span className="text-lg">➡</span>
          <select value={toUnit} onChange={(e) => setToUnit(e.target.value)} className="text-black p-2 rounded">
            {Object.keys(units).map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </div>
        <button onClick={convert} className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600">
          Convert
        </button>
        <p className="text-lg font-semibold mt-4">Result: {result} {toUnit}</p>
      </div>
      
      {/* Footer */}
      <footer className="mt-6 text-sm text-center">
        <p>Created by <a href="https://warpcast.com/pedrooberto" className="underline">@pedrooberto</a></p>
        <p>Support me: <span className="font-bold">0x940AcC6711c0BBdEA0eC41db56C0c0D37563A7A7</span></p>
      </footer>
    </div>
  );
}
