import React from "react";

const SEOContent = () => {
  return (
    <article id="guide" className="prose prose-slate max-w-none">
      <section className="space-y-4">
        <h2>How to Calculate CBM? (Formula)</h2>
        <p>
          The standard calculate cbm formula in cm is: L x W x H / 1,000,000. This in cm
          method converts cubic centimeters into cubic meters and is the baseline for
          freight quotes across sea and air.
        </p>
        <p>
          Example: 50 cm x 40 cm x 30 cm = 60,000 cm³. 60,000 / 1,000,000 = 0.06 CBM.
          Multiply by quantity to get the shipment total.
        </p>
      </section>

      <section className="space-y-4">
        <h2>CBM Calculator in Inches</h2>
        <p>
          A cbm calculator in inches should convert inches to cubic feet first, then
          convert cubic feet to cbm. This inches workflow matches carrier systems and
          reduces rounding errors.
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
        <p>
          Use this cubic feet to cbm conversion whenever your supplier provides inches.
        </p>
      </section>

      <section className="space-y-4">
        <h2>CBM to KG & Volumetric Weight</h2>
        <p>
          A cbm to kg estimate compares actual weight with volumetric weight to determine
          chargeable weight. Air freight commonly uses /6000, so volumetric weight (kg) is
          L x W x H (cm) / 6,000.
        </p>
        <ul>
          <li>Sea freight: 1 CBM = 1,000 KG chargeable weight</li>
          <li>Air freight: volumetric weight = L x W x H (cm) / 6,000</li>
        </ul>
        <p>
          If volumetric weight exceeds gross weight, the higher value applies to chargeable
          weight on the invoice.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Container Capacity: 20ft vs 40ft</h2>
        <p>
          For sea shipment planning, container capacity matters. A 20ft container capacity
          is around 33.2 m³, while a 40ft container is about 67.7 m³ and a 40HQ is 76.3 m³.
          We recommend a 90% Load Efficiency rule to allow for pallets, gaps, and carton
          deformation.
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
        <h2>Shipping to Amazon FBA</h2>
        <p>
          Shipping from china to usa for Amazon FBA requires accurate carton labels,
          palletization, and appointment scheduling. Align the declared CBM and weights
          with your booking to avoid rework at the receiving dock.
        </p>
        <p>
          Freight class is used for LTL shipments in the USA. Lower density means higher
          freight class and higher cost, so accurate measurements help avoid reclassification
          fees and delays.
        </p>
      </section>
    </article>
  );
};

export default SEOContent;
