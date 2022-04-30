import React from "react";

const Faq = () => {
  return (
    <div>
      <section className="text-gray-700">
        <div className="container px-5 py-14 mt-14 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl sm:text-5xl text-center font-bold font-mono mt-5">
              Frequently Asked Question
            </h1>
            <p className="leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-700 font-sans text-xl mt-2">
              The most common questions about how our business works and what
              can do for you.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold cursor-pointer   bg-gray-200 rounded-md py-2 px-4">
                  How we run our business?
                </summary>

                <span>
                  We don't ignore our competition. We do as much research as we
                  can about our competition. We do not copy them, but we don't
                  afraid to learn from them either.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold cursor-pointer  bg-gray-200 rounded-md py-2 px-4">
                  What industries do you specialize in?
                </summary>

                <span>
                  We don’t limit ourselves to any one specific industry. We are
                  a very flexible warehouse and are open to offering our
                  services to pretty much any industry.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold cursor-pointer   bg-gray-200 rounded-md py-2 px-4">
                  How are warehouse rates determined?
                </summary>

                <span>
                  Warehouse rates are determined by the warehouse footprint of
                  the product, how quickly the product will be moving in and out
                  of the warehouse as well as any specific handling and shipping
                  requirements that are required of an individual product. We
                  believe that there is no one price fits all when it comes to
                  warehousing products and we will structure our pricing to be
                  competitive and meet the needs of our customers.
                </span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold cursor-pointer   bg-gray-200 rounded-md py-2 px-4">
                  Do you store hazardous materials?
                </summary>

                <span className="px-4 py-2">
                  We can store hazardous materials on a case by case basis
                  depending on the product. Please contact us about your hazmat
                  goods.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold cursor-pointer   bg-gray-200 rounded-md py-2 px-4">
                  How long does transloading take?
                </summary>

                <span className="px-4 py-2">
                  Transloading can take anywhere from 30 minutes to 5 hours
                  depending on how the product is received, and the services
                  that our customer is looking for. If the product arrives
                  palletized or in crates, then the process is usually very
                  quick, but if the product arrives loose and needs to be
                  individually unloaded, sorted and segregated and palletized
                  for shipment out, then it can often take hours.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold cursor-pointer   bg-gray-200 rounded-md py-2 px-4">
                  How do you ship individual orders?
                </summary>

                <span className="px-4 py-2">
                  Individual orders are shipped via USPS, FEDEX, FTL or by local
                  LTL carriers per the customers requirements.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
