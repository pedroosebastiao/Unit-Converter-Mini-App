import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);
  const [fromUnit, setFromUnit] = useState("km");
  const [toUnit, setToUnit] = useState("m");
  const [result, setResult] = useState(0);

  const units = {
    km: 1000, m: 1, cm: 0.01, mm: 0.001, mi: 1609.34, yd: 0.9144, 
    ft: 0.3048, in: 0.0254, kg: 1, g: 0.001, mg: 0.000001, 
    lb: 0.453592, oz: 0.0283495, TB: 1e12, GB: 1e9, MB: 1e6, 
    KB: 1e3, B: 1, bit: 0.125, h: 3600, min: 60, s: 1, ms: 0.001,
  };

  function convert() {
    const baseValue = value * units[fromUnit];
    setResult(baseValue / units[toUnit]);
  }

  return (
    <div className="bg-purple-700 text-white min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold">Unit Converter</h1>
      
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-2 rounded text-black mt-4"
        placeholder="Enter value"
      />
      
      <div className="flex space-x-2 mt-4">
        <select 
          value={fromUnit} 
          onChange={(e) => setFromUnit(e.target.value)}
          className="p-2 border rounded text-black"
        >
          {Object.keys(units).map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>

        <span className="text-lg">➡</span>

        <select 
          value={toUnit} 
          onChange={(e) => setToUnit(e.target.value)}
          className="p-2 border rounded text-black"
        >
          {Object.keys(units).map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
      </div>

      <button 
        onClick={convert} 
        className="bg-white text-purple-700 p-2 rounded mt-4 font-bold"
      >
        Convert
      </button>

      <p className="text-lg font-semibold mt-4">Result: {result} {toUnit}</p>

      <footer className="mt-8 text-sm text-gray-300">
        Made by <span className="font-bold">@pedrooberto</span> • 
        Donate: <span className="font-mono">0xYourCryptoAddressHere</span>
      </footer>
    </div>
  );
}
