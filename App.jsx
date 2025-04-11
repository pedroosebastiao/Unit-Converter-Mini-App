import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);
  const [fromUnit, setFromUnit] = useState("km");
  const [toUnit, setToUnit] = useState("m");
  const [result, setResult] = useState(0);

  const units = {
    // Length
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34, // Mile
    yd: 0.9144, // Yard
    ft: 0.3048, // Foot
    in: 0.0254, // Inch

    // Mass
    kg: 1,
    g: 0.001,
    mg: 0.000001,
    lb: 0.453592, // Pound
    oz: 0.0283495, // Ounce

    // Digital Storage
    TB: 1e12,
    GB: 1e9,
    MB: 1e6,
    KB: 1e3,
    B: 1,
    bit: 0.125,

    // Time
    h: 3600, // Hour
    min: 60, // Minute
    s: 1, // Second
    ms: 0.001, // Millisecond
  };

  function convert() {
    const baseValue = value * units[fromUnit];
    setResult(baseValue / units[toUnit]);
  }

  return (
    <div className="flex flex-col items-center p-4 space-y-4 bg-purple-700 min-h-screen text-white">
      <h1 className="text-2xl font-bold">Unit Converter</h1>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-2 rounded text-black"
        placeholder="Enter value"
      />
      <div className="flex space-x-2">
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} className="text-black">
          {Object.keys(units).map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
        <span className="text-lg">➡</span>
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)} className="text-black">
          {Object.keys(units).map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
      </div>
      <button onClick={convert} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Convert
      </button>
      <p className="text-lg font-semibold">Result: {result} {toUnit}</p>
      
      {/* Footer */}
      <footer className="mt-8 text-sm text-center">
        <p>Created by <a href="https://warpcast.com/pedrooberto" className="underline">@pedrooberto</a></p>
        <p>Support me: <span className="font-bold">0x940AcC6711c0BBdEA0eC41db56C0c0D37563A7A7</span></p>
      </footer>
    </div>
  );
}
