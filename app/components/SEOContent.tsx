import React from "react";

const SEOContent = () => {
  return (
    <article id="guide" className="prose prose-slate max-w-none">
      <section className="space-y-4">
        <h2>How to Calculate CBM? (Formula)</h2>
        <p>
          If you are searching for how to calculate CBM, the most common method is to
          calculate cbm formula in centimeters. The standard formula is:
          Length (cm) x Width (cm) x Height (cm) / 1,000,000. This cbm calculator in cm
          approach converts cubic centimeters into cubic meters for international freight.
        </p>
        <p>
          Example: 50 cm x 40 cm x 30 cm = 60,000 cm³. 60,000 / 1,000,000 = 0.06 CBM.
          If you ship 100 cartons, total volume is 6.00 CBM. This is the industry standard
          for how to calculate cbm across sea and air freight.
        </p>
      </section>

      <section className="space-y-4">
        <h2>CBM Calculator in Inches</h2>
        <p>
          Many US suppliers provide dimensions in inches, so a cbm calculator in inches
          must convert to cubic feet first, then to CBM. The process is: inches to cubic
          feet (CFT), then cubic feet to cbm. This is the most accurate cubic feet to cbm
          workflow for freight quotes.
        </p>
        <ul>
          <li>Step 1: L x W x H (inches) / 1,728 = CFT</li>
          <li>Step 2: CFT / 35.315 = CBM</li>
        </ul>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Unit</th>
                <th>Equivalent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 CBM</td>
                <td>35.315 CFT</td>
              </tr>
              <tr>
                <td>1 CBM</td>
                <td>61,023 cubic inches</td>
              </tr>
              <tr>
                <td>1 CFT</td>
                <td>0.0283 CBM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2>CBM to KG Calculator: Chargeable Weight</h2>
        <p>
          A cbm to kg calculator compares actual weight to volumetric weight to determine
          chargeable weight. Sea freight typically uses a 1:1000 rule, while air freight
          uses a volumetric weight divisor (often 1:167). Understanding volumetric weight
          and the air freight divisor avoids surprise charges.
        </p>
        <ul>
          <li>Sea freight: 1 CBM = 1,000 KG for chargeable weight</li>
          <li>Air freight: volumetric weight = L x W x H (cm) / 6,000 (1:167 rule)</li>
        </ul>
        <p>
          If the volumetric weight exceeds the gross weight, the carrier bills the higher
          value. This rule is central to air freight pricing and volumetric weight planning.
        </p>
      </section>

      <section className="space-y-4">
        <h2>CBM for Sea Shipment: 20ft & 40ft Containers</h2>
        <p>
          For how to calculate cbm for sea shipment, container limits matter. Standard
          capacities include 20ft container capacity, 40ft, and 40HQ. Our calculator applies
          a 90% Load Efficiency rule to account for pallets, gaps, and box deformation.
        </p>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Container</th>
                <th>Theoretical CBM</th>
                <th>Recommended (90%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>20GP</td>
                <td>33.2 m³</td>
                <td>28 m³</td>
              </tr>
              <tr>
                <td>40GP</td>
                <td>67.7 m³</td>
                <td>58 m³</td>
              </tr>
              <tr>
                <td>40HQ</td>
                <td>76.3 m³</td>
                <td>68 m³</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2>Shipping to Amazon FBA from China</h2>
        <p>
          Shipping from china to usa for Amazon FBA requires accurate carton labels,
          palletization rules, and appointment scheduling. Always match the CBM with the
          declared weight to avoid rework at the receiving dock.
        </p>
        <p>
          Freight class is used for LTL shipments in the USA. Lower density means higher
          freight class and higher cost. Use correct measurements to avoid reclassification
          fees and delays.
        </p>
      </section>
    </article>
  );
};

export default SEOContent;
