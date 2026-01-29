import React from 'react';

const SEOContent = () => {
  return (
    <div className="space-y-12">
      <article className="prose prose-slate max-w-none bg-white p-8 rounded-lg shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">How to Calculate CBM (Cubic Meter)?</h2>
        <p>
          CBM (Cubic Meter) is the standard unit of volume used in international freight to determine shipping charges. 
          Knowing how to calculate CBM accurately is crucial for optimizing your shipping costs.
        </p>
        <h3 className="text-lg font-semibold text-slate-700 mt-4 mb-2">CBM Formula</h3>
        <p>
          The basic formula for calculating CBM is:
        </p>
        <div className="bg-slate-50 p-4 rounded-md font-mono text-sm border border-slate-200 my-4">
          Length (cm) × Width (cm) × Height (cm) / 1,000,000 = CBM
        </div>
        <p>
          <strong>Example Calculation:</strong><br />
          If you have a carton with dimensions 50cm × 40cm × 30cm:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>50 × 40 × 30 = 60,000 cubic centimeters</li>
          <li>60,000 / 1,000,000 = 0.06 CBM</li>
        </ul>
        <p>
          If you are shipping 100 such cartons, the total volume would be 0.06 × 100 = 6.00 CBM.
        </p>
      </article>

      <article className="prose prose-slate max-w-none bg-white p-8 rounded-lg shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">How to Calculate CBM from Inches?</h2>
        <p>
          Many suppliers, especially in the US, provide dimensions in inches. To calculate CBM from inches, 
          you first calculate Cubic Feet (CFT) and then convert to Cubic Meters.
        </p>
        <h3 className="text-lg font-semibold text-slate-700 mt-4 mb-2">Conversion Steps</h3>
        <ol className="list-decimal pl-5 space-y-1">
          <li><strong>Calculate CFT:</strong> Length (in) × Width (in) × Height (in) / 1,728 = Cubic Feet</li>
          <li><strong>Convert to CBM:</strong> Cubic Feet / 35.315 = Cubic Meters</li>
        </ol>
        
        <h3 className="text-lg font-semibold text-slate-700 mt-4 mb-2">Quick Conversion Table</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-700 font-semibold">
              <tr>
                <th className="px-4 py-2 border">Unit</th>
                <th className="px-4 py-2 border">Equivalent</th>
                <th className="px-4 py-2 border">Common Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">1 CBM</td>
                <td className="px-4 py-2 border">35.315 Cubic Feet</td>
                <td className="px-4 py-2 border">Standard Sea Freight</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">1 CBM</td>
                <td className="px-4 py-2 border">61,023 Cubic Inches</td>
                <td className="px-4 py-2 border">Small Parcel</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">1 Cubic Foot</td>
                <td className="px-4 py-2 border">0.0283 CBM</td>
                <td className="px-4 py-2 border">US Domestic</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>

      <article className="prose prose-slate max-w-none bg-white p-8 rounded-lg shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">CBM to KG: Understanding Chargeable Weight</h2>
        <p>
          In freight shipping, you pay for either the actual weight (Gross Weight) or the volumetric weight, 
          whichever is greater. This is known as the "Chargeable Weight".
        </p>
        
        <h3 className="text-lg font-semibold text-slate-700 mt-4 mb-2">Sea Freight Logic (LCL)</h3>
        <p>
          The standard ratio for sea freight is <strong>1 CBM = 1,000 KG</strong>.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>If your cargo is 1 CBM but weighs 500 KG, you are charged for 1 CBM (Volume).</li>
          <li>If your cargo is 1 CBM but weighs 1,200 KG, you are charged for 1.2 CBM equivalent (Weight).</li>
        </ul>

        <h3 className="text-lg font-semibold text-slate-700 mt-4 mb-2">Air Freight Logic</h3>
        <p>
          Air freight uses a different volumetric divisor, typically <strong>6000</strong>.
        </p>
        <div className="bg-slate-50 p-4 rounded-md font-mono text-sm border border-slate-200 my-4">
          Volumetric Weight (kg) = Length (cm) × Width (cm) × Height (cm) / 6000
        </div>
        <p>
          For express couriers like DHL/FedEx/UPS, the divisor is often <strong>5000</strong>. Always check with your forwarder.
        </p>
      </article>

      <article className="prose prose-slate max-w-none bg-white p-8 rounded-lg shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Container CBM Capacity: 20ft vs 40ft vs 40HQ</h2>
        <p>
          Knowing the capacity of standard shipping containers helps you plan your shipment and avoid paying for "dead air". 
          Although containers have a theoretical max volume, you can never fill them 100% due to carton shapes and packing inefficiencies.
        </p>
        
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-700 font-semibold">
              <tr>
                <th className="px-4 py-2 border">Container Type</th>
                <th className="px-4 py-2 border">Theoretical Volume</th>
                <th className="px-4 py-2 border">Practical Volume (Rec.)</th>
                <th className="px-4 py-2 border">Max Payload</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border font-medium">20' GP (General Purpose)</td>
                <td className="px-4 py-2 border">33.2 m³</td>
                <td className="px-4 py-2 border text-emerald-600 font-bold">28 m³</td>
                <td className="px-4 py-2 border">25,000 kg</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border font-medium">40' GP</td>
                <td className="px-4 py-2 border">67.7 m³</td>
                <td className="px-4 py-2 border text-emerald-600 font-bold">58 m³</td>
                <td className="px-4 py-2 border">27,600 kg</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border font-medium">40' HQ (High Cube)</td>
                <td className="px-4 py-2 border">76.3 m³</td>
                <td className="px-4 py-2 border text-emerald-600 font-bold">68 m³</td>
                <td className="px-4 py-2 border">28,500 kg</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-500 mt-2">
          * Note: We recommend planning for ~90% efficiency (Load Efficiency) to account for pallets, stacking gaps, and packaging expansion.
        </p>
      </article>

      <article className="prose prose-slate max-w-none bg-white p-8 rounded-lg shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Shipping to Amazon FBA & Freight Class</h2>
        <p>
          When shipping from China to Amazon FBA (Fulfillment by Amazon) centers in the US, precise CBM and weight calculations are mandatory.
        </p>
        
        <h3 className="text-lg font-semibold text-slate-700 mt-4 mb-2">FBA Requirements</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Palletization:</strong> FBA shipments often require palletization. A standard US pallet (48"x40") adds weight and reduces usable volume.</li>
          <li><strong>Labeling:</strong> Every carton must have FBA shipment labels with correct weight and dimensions.</li>
        </ul>

        <h3 className="text-lg font-semibold text-slate-700 mt-4 mb-2">Understanding Freight Class (LTL)</h3>
        <p>
          For Less Than Truckload (LTL) shipping within the US, carriers use <strong>Freight Class</strong> codes (NMFC).
        </p>
        <p>
          Freight class is based on density (lbs per cubic foot). 
          <span className="block mt-2 bg-yellow-50 p-2 border-l-4 border-yellow-400">
            <strong>Rule of thumb:</strong> Lower density = Higher Freight Class = Higher Rate.
          </span>
        </p>
        <p>
          Heavy, dense items (like bricks) have low classes (e.g., Class 50) and are cheaper to ship. 
          Light, bulky items (like ping pong balls) have high classes (e.g., Class 500) and are expensive to ship.
        </p>
      </article>
    </div>
  );
};

export default SEOContent;
