import React from "react";

const SEOContent = () => {
  return (
    <article id="guide" className="prose prose-slate max-w-none">
      <section className="space-y-4">
        <h2>How to Calculate CBM? (Formula)</h2>
        <p>
          If you are looking for a precise formula, the standard cbm calculation is:
          Length x Width x Height / 1,000,000. This formula converts cubic centimeters
          to cubic meters and is the most common method used by freight forwarders. It is
          the simplest way to calculate CBM and is widely used in a cbm calculator in cm
          for sea shipment and air freight quotes.
        </p>
        <p>
          Example: 50 cm x 40 cm x 30 cm = 60,000 cm³. 60,000 / 1,000,000 = 0.06 CBM.
          If you ship 100 cartons, the total CBM is 6.00. This how to calculate cbm method
          is globally accepted for shipping documents and rate cards.
        </p>
      </section>

      <section className="space-y-4">
        <h2>CBM Calculator in Inches</h2>
        <p>
          A cbm calculator in inches is common for US suppliers. The correct process is
          to convert inches to cubic feet, then convert cubic feet to CBM. This inches
          workflow prevents rounding errors and aligns with carrier quoting systems.
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
          A cbm to kg calculator compares actual weight with volumetric weight to determine
          chargeable weight. Sea freight typically uses a 1:1000 rule, while air freight
          uses a volumetric weight divisor such as /6000. This divisor determines the
          volumetric weight in kg and impacts your final invoice.
        </p>
        <ul>
          <li>Sea freight: 1 CBM = 1,000 KG chargeable</li>
          <li>Air freight: volumetric weight = L x W x H (cm) / 6,000</li>
        </ul>
        <p>
          If volumetric weight exceeds gross weight, the carrier bills the higher value.
          This is why volumetric weight is critical for lightweight but bulky cargo.
        </p>
      </section>

      <section className="space-y-4">
        <h2>CBM for Sea Shipment: 20ft & 40ft Containers</h2>
        <p>
          To calculate CBM for sea shipment accurately, you must consider container limits.
          Standard 20ft container capacity is around 33.2 m³, while a 40ft container is
          roughly 67.7 m³ and a 40HQ is about 76.3 m³. We recommend planning with 90% Load
          Efficiency to allow for pallets, gaps, and carton deformation.
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
