import React from "react";

const Brokerage = () => {
  return (
    <div className="container my-5">
      <h2 className="fw-semibold mb-5">Charges explained</h2>

      {/* ROW 1 */}
      <div className="row g-5">
        <div className="col-md-6">
          <h5 className="fw-semibold">Margin Trading Facility (MTF)</h5>
          <ul className="text-muted">
            <li>
              MTF Interest: 0.04% per day (₹40 per lakh) on funded amount.
            </li>
            <li>Interest applied from T+1 day until stocks are sold.</li>
            <li>
              MTF Brokerage: 0.3% or ₹20 per executed order (whichever is
              lower).
            </li>
            <li>
              MTF pledge charge: ₹15 + GST per pledge/unpledge request per ISIN.
            </li>
          </ul>
        </div>

        <div className="col-md-6">
          <h5 className="fw-semibold">
            Trading using 3-in-1 account with block functionality
          </h5>
          <ul className="text-muted">
            <li>Delivery & MTF brokerage: 0.5% per executed order.</li>
            <li>Intraday brokerage: 0.05% per executed order.</li>
          </ul>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="row g-5 mt-3">
        <div className="col-md-6">
          <h5 className="fw-semibold">Call & Trade</h5>
          <p className="text-muted">
            Additional charges of ₹50 per order for orders placed through a
            dealer, including auto square-off orders.
          </p>

          <h5 className="fw-semibold mt-4">Stamp charges</h5>
          <p className="text-muted">
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transactions on stock exchanges and depositories.
          </p>

          <h5 className="fw-semibold mt-4">NRI brokerage charges</h5>
          <ul className="text-muted">
            <li>
              Non-PIS account: 0.5% or ₹50 per executed order (whichever is
              lower).
            </li>
            <li>
              PIS account: 0.5% or ₹200 per executed order (whichever is lower).
            </li>
            <li>₹500 + GST yearly AMC charges.</li>
          </ul>
        </div>

        <div className="col-md-6">
          <h5 className="fw-semibold">Account with debit balance</h5>
          <p className="text-muted">
            If the account has a debit balance, ₹40 per executed order is
            charged instead of ₹20.
          </p>

          <h5 className="fw-semibold mt-4">
            Charges for Investor’s Protection Fund Trust (IPFT)
          </h5>
          <ul className="text-muted">
            <li>Equity & Futures: ₹10 per crore + GST.</li>
            <li>Options: ₹50 per crore + GST (premium value).</li>
            <li>
              Currency: ₹0.05 per lakh + GST (futures) and ₹2 per lakh + GST
              (options).
            </li>
          </ul>
        </div>
      </div>

      {/* ROW 3 */}
      <div className="row g-5 mt-3">
        <div className="col-md-6">
          <h5 className="fw-semibold">AMC (Account maintenance charges)</h5>
          <p className="text-muted">
            For BSDA demat accounts: Zero charges if holding value is below
            ₹4,00,000.
          </p>
          <p className="text-muted">
            For non-BSDA accounts: ₹300/year + 18% GST charged quarterly.
          </p>

          <h5 className="fw-semibold mt-4">Corporate action order charges</h5>
          <p className="text-muted">
            ₹20 + GST for OFS / buyback / takeover / delisting orders placed via
            Console.
          </p>
        </div>

        <div className="col-md-6">
          <h5 className="fw-semibold">Off-market transfer charges</h5>
          <p className="text-muted">₹25 per transaction.</p>

          <h5 className="fw-semibold mt-4">Physical CMR request</h5>
          <p className="text-muted">
            First request is free. Subsequent requests cost ₹20 + ₹100 courier
            charges + 18% GST.
          </p>

          <h5 className="fw-semibold mt-4">Payment gateway charges</h5>
          <p className="text-muted">₹9 + GST (not levied on UPI transfers).</p>

          <h5 className="fw-semibold mt-4">Delayed payment charges</h5>
          <p className="text-muted">
            Interest charged at 18% per year or 0.05% per day on the debit
            balance.
          </p>
        </div>
      </div>

      {/* FINAL SECTION */}
      <div className="row g-5 mt-5">
        <div className="col-md-6">
          <h5 className="fw-semibold">
            Securities / Commodities Transaction Tax
          </h5>
          <p className="text-muted">
            Tax charged by the government when transacting on exchanges. Charged
            on both buy and sell for equity delivery, and only on sell side for
            intraday & F&O.
          </p>
          <p className="text-muted">
            STT/CTT can sometimes be higher than brokerage itself.
          </p>

          <h5 className="fw-semibold mt-4">Transaction / Turnover charges</h5>
          <p className="text-muted">
            Charged by NSE, BSE, and MCX based on transaction value.
          </p>
          <p className="text-muted">
            BSE revised multiple group-wise transaction charges ranging from
            ₹275 to ₹1,00,000 per crore depending on scrip category.
          </p>
        </div>

        <div className="col-md-6">
          <h5 className="fw-semibold">GST</h5>
          <p className="text-muted">
            18% GST applied on brokerage + SEBI charges + transaction charges.
          </p>

          <h5 className="fw-semibold mt-4">SEBI charges</h5>
          <p className="text-muted">
            ₹10 per crore + GST charged by SEBI for regulating the markets.
          </p>

          <h5 className="fw-semibold mt-4">
            DP (Depository participant) charges
          </h5>
          <p className="text-muted">
            ₹15.34 per scrip (₹3.5 CDSL + ₹9.5 Zerodha + ₹2.34 GST) when stocks
            are sold.
          </p>

          <p className="text-muted">
            Female first holders get ₹0.25 discount per transaction.
          </p>

          <p className="text-muted">
            Mutual fund & bond debit transactions get an extra ₹0.25 discount.
          </p>

          <h5 className="fw-semibold mt-4">Pledging charges</h5>
          <p className="text-muted">₹30 + GST per pledge request per ISIN.</p>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
