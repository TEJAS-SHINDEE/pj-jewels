// import { useState } from "react";
// import { Icon } from "../../data/Icon";

// export function OrderTracking() {
//   const [orderId, setOrderId] = useState("");
//   const [showResult, setShowResult] = useState(false);

//   const handleTrack = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!orderId.trim()) return;

//     // For now, orders are handled manually through WhatsApp.
//     setShowResult(true);
//   };

//   return (
//     <section className="min-h-[calc(100vh-64px)] border-b border-[#dfccb0] bg-[#fffdf9]">

//       {/* =====================================================
//           PAGE HEADER
//          ===================================================== */}

//       <div className="border-b border-[#e5d7c2] bg-[#faf5ed] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
//         <div className="mx-auto max-w-[1100px] text-center">

//           <p className="text-[8px] font-medium tracking-[0.25em] text-[#9a8060] sm:text-[9px]">
//             PJ JEWELS
//           </p>

//           <h1
//             className="mt-2 text-[28px] text-[#5b4630] sm:text-[34px] lg:text-[38px]"
//             style={{ fontFamily: "Georgia, serif" }}
//           >
//             Track Your Order
//           </h1>

//           <div className="mx-auto mt-3 flex max-w-[170px] items-center gap-2">
//             <span className="h-px flex-1 bg-[#c9a768]" />
//             <span className="h-1 w-1 shrink-0 rounded-full bg-[#c9a768]" />
//             <span className="h-px flex-1 bg-[#c9a768]" />
//           </div>

//           <p className="mx-auto mt-4 max-w-[500px] text-[10px] leading-5 text-[#806d56] sm:text-[11px]">
//             Track the status of your PJ Jewels order. Since our orders are
//             currently processed personally through WhatsApp, we keep you
//             updated at every important step.
//           </p>

//         </div>
//       </div>


//       {/* =====================================================
//           TRACK ORDER
//          ===================================================== */}

//       <div className="px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">

//         <div className="mx-auto max-w-[900px]">

//           <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.85fr]">

//             {/* =================================================
//                 LEFT - TRACKING FORM
//                ================================================= */}

//             <div className="border border-[#e3cfad] bg-[#fffdfa] p-6 sm:p-8">

//               <div className="flex items-center gap-3">

//                 <div className="flex h-9 w-9 items-center justify-center border border-[#d8bd8d] bg-[#faf3e8] text-[#9b702d]">
//                   <Icon name="search" size={17} />
//                 </div>

//                 <div>
//                   <h2
//                     className="text-[17px] text-[#5b4630]"
//                     style={{ fontFamily: "Georgia, serif" }}
//                   >
//                     Find Your Order
//                   </h2>

//                   <p className="mt-1 text-[8px] text-[#907a5e]">
//                     Enter the order reference shared with you.
//                   </p>
//                 </div>

//               </div>


//               <form
//                 onSubmit={handleTrack}
//                 className="mt-7"
//               >

//                 <label
//                   htmlFor="orderId"
//                   className="mb-2 block text-[8px] tracking-[0.12em] text-[#806d56]"
//                 >
//                   ORDER ID / REFERENCE
//                 </label>

//                 <div className="flex flex-col gap-2 sm:flex-row">

//                   <input
//                     id="orderId"
//                     type="text"
//                     value={orderId}
//                     onChange={(e) => {
//                       setOrderId(e.target.value);
//                       setShowResult(false);
//                     }}
//                     placeholder="Example: PJ1024"
//                     className="
//                       h-11
//                       w-full
//                       border
//                       border-[#d8bd8d]
//                       bg-[#fffdf9]
//                       px-4
//                       text-[10px]
//                       text-[#514435]
//                       outline-none
//                       transition
//                       placeholder:text-[#ad9a80]
//                       focus:border-[#a77b35]
//                     "
//                   />

//                   <button
//                     type="submit"
//                     className="
//                       h-11
//                       shrink-0
//                       border
//                       border-[#b98a47]
//                       bg-[#b18442]
//                       px-7
//                       text-[9px]
//                       tracking-[0.12em]
//                       text-white
//                       transition
//                       duration-300
//                       hover:bg-[#8e682f]
//                     "
//                   >
//                     TRACK ORDER
//                   </button>

//                 </div>

//                 <p className="mt-3 text-[8px] leading-4 text-[#9a8060]">
//                   Your order reference is normally shared with you on
//                   WhatsApp after your order is confirmed.
//                 </p>

//               </form>


//               {/* =================================================
//                   TEMPORARY RESULT
//                  ================================================= */}

//               {showResult && (
//                 <div className="mt-7 border-t border-[#e5d7c2] pt-6">

//                   <div className="flex items-start gap-3">

//                     <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#faf3e8] text-[#a77b35]">
//                       <Icon name="phone" size={15} />
//                     </div>

//                     <div>

//                       <p
//                         className="text-[13px] text-[#5b4630]"
//                         style={{ fontFamily: "Georgia, serif" }}
//                       >
//                         Your order is being handled personally.
//                       </p>

//                       <p className="mt-2 text-[9px] leading-5 text-[#806d56]">
//                         Our current order system is managed through WhatsApp.
//                         For the latest status, please message us with your
//                         order reference.
//                       </p>

//                     </div>

//                   </div>


//                   <a
//                     href="https://wa.me/+919005313005"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="
//                       mt-5
//                       inline-flex
//                       items-center
//                       gap-2
//                       border
//                       border-[#b98a47]
//                       px-5
//                       py-2.5
//                       text-[8px]
//                       tracking-[0.1em]
//                       text-[#73562f]
//                       transition
//                       duration-300
//                       hover:bg-[#a77b35]
//                       hover:text-white
//                     "
//                   >
//                     CONTACT US ON WHATSAPP
//                     <span>→</span>
//                   </a>

//                 </div>
//               )}

//             </div>


//             {/* =================================================
//                 RIGHT - HOW IT WORKS
//                ================================================= */}

//             <div className="border border-[#e3cfad] bg-[#faf5ed] p-6 sm:p-8">

//               <p className="text-[8px] font-medium tracking-[0.2em] text-[#a0835d]">
//                 HOW IT WORKS
//               </p>

//               <h2
//                 className="mt-2 text-[20px] text-[#5b4630]"
//                 style={{ fontFamily: "Georgia, serif" }}
//               >
//                 Your Order Journey
//               </h2>

//               <p className="mt-2 text-[9px] leading-5 text-[#806d56]">
//                 Every PJ Jewels order is personally handled and verified
//                 before it reaches you.
//               </p>


//               {/* STEPS */}

//               <div className="mt-7">

//                 {/* Step 1 */}
//                 <div className="relative flex gap-4 pb-7">

//                   <div className="relative flex shrink-0 flex-col items-center">

//                     <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c9a768] bg-[#fffdf9] text-[9px] text-[#9b702d]">
//                       01
//                     </div>

//                     <span className="absolute top-8 h-full w-px bg-[#dfccb0]" />

//                   </div>

//                   <div>
//                     <h3
//                       className="text-[12px] text-[#5b4630]"
//                       style={{ fontFamily: "Georgia, serif" }}
//                     >
//                       Choose Your Jewellery
//                     </h3>

//                     <p className="mt-1 text-[8px] leading-4 text-[#806d56]">
//                       Send us the image or product you are interested in
//                       through WhatsApp.
//                     </p>
//                   </div>

//                 </div>


//                 {/* Step 2 */}
//                 <div className="relative flex gap-4 pb-7">

//                   <div className="relative flex shrink-0 flex-col items-center">

//                     <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c9a768] bg-[#fffdf9] text-[9px] text-[#9b702d]">
//                       02
//                     </div>

//                     <span className="absolute top-8 h-full w-px bg-[#dfccb0]" />

//                   </div>

//                   <div>
//                     <h3
//                       className="text-[12px] text-[#5b4630]"
//                       style={{ fontFamily: "Georgia, serif" }}
//                     >
//                       Receive Product Details
//                     </h3>

//                     <p className="mt-1 text-[8px] leading-4 text-[#806d56]">
//                       We personally share the product details, price and
//                       availability with you.
//                     </p>
//                   </div>

//                 </div>


//                 {/* Step 3 */}
//                 <div className="relative flex gap-4 pb-7">

//                   <div className="relative flex shrink-0 flex-col items-center">

//                     <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c9a768] bg-[#fffdf9] text-[9px] text-[#9b702d]">
//                       03
//                     </div>

//                     <span className="absolute top-8 h-full w-px bg-[#dfccb0]" />

//                   </div>

//                   <div>
//                     <h3
//                       className="text-[12px] text-[#5b4630]"
//                       style={{ fontFamily: "Georgia, serif" }}
//                     >
//                       Make Payment
//                     </h3>

//                     <p className="mt-1 text-[8px] leading-4 text-[#806d56]">
//                       After confirming your order, complete the payment and
//                       send the payment screenshot to us on WhatsApp.
//                     </p>
//                   </div>

//                 </div>


//                 {/* Step 4 */}
//                 <div className="relative flex gap-4 pb-7">

//                   <div className="relative flex shrink-0 flex-col items-center">

//                     <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c9a768] bg-[#fffdf9] text-[9px] text-[#9b702d]">
//                       04
//                     </div>

//                     <span className="absolute top-8 h-full w-px bg-[#dfccb0]" />

//                   </div>

//                   <div>
//                     <h3
//                       className="text-[12px] text-[#5b4630]"
//                       style={{ fontFamily: "Georgia, serif" }}
//                     >
//                       Payment Verification
//                     </h3>

//                     <p className="mt-1 text-[8px] leading-4 text-[#806d56]">
//                       Our team manually verifies that the payment has been
//                       successfully credited.
//                     </p>
//                   </div>

//                 </div>


//                 {/* Step 5 */}
//                 <div className="flex gap-4">

//                   <div className="flex shrink-0 items-start">

//                     <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c9a768] bg-[#fffdf9] text-[9px] text-[#9b702d]">
//                       05
//                     </div>

//                   </div>

//                   <div>
//                     <h3
//                       className="text-[12px] text-[#5b4630]"
//                       style={{ fontFamily: "Georgia, serif" }}
//                     >
//                       Dispatched & Tracked
//                     </h3>

//                     <p className="mt-1 text-[8px] leading-4 text-[#806d56]">
//                       Once dispatched, we send the courier name, tracking
//                       ID and delivery details to you through WhatsApp.
//                     </p>
//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>


//           {/* =================================================
//               WHATSAPP CTA
//              ================================================= */}

//           <div className="mt-8 border border-[#dfccb0] bg-[#fffdfa] px-5 py-6 text-center sm:px-8">

//             <p className="text-[8px] tracking-[0.15em] text-[#9a8060]">
//               NEED HELP WITH YOUR ORDER?
//             </p>

//             <h2
//               className="mt-2 text-[18px] text-[#5b4630]"
//               style={{ fontFamily: "Georgia, serif" }}
//             >
//               We are just a message away.
//             </h2>

//             <p className="mx-auto mt-2 max-w-[450px] text-[9px] leading-5 text-[#806d56]">
//               For order updates, payment confirmation or courier details,
//               simply send us a message on WhatsApp.
//             </p>

//             <a
//               href="https://wa.me/+919005313005"
//               target="_blank"
//               rel="noreferrer"
//               className="
//                 mt-4
//                 inline-flex
//                 items-center
//                 gap-2
//                 bg-[#b18442]
//                 px-6
//                 py-2.5
//                 text-[8px]
//                 tracking-[0.12em]
//                 text-white
//                 transition
//                 duration-300
//                 hover:bg-[#8e682f]
//               "
//             >
//               MESSAGE US ON WHATSAPP
//               <span>→</span>
//             </a>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }


import { useState } from "react";
import { Icon } from "../../data/Icon";

export function OrderTracking() {
  const [orderId, setOrderId] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleTrack = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!orderId.trim()) return;

    /*
      FUTURE:
      Replace this with an API call.

      Example:
      const response = await fetch(`/api/orders/${orderId}`);
      const order = await response.json();

      For now, we only show WhatsApp support.
    */

    setShowResult(true);
  };

  return (
    <section className="min-h-[calc(100vh-64px)] border-b border-[#dfccb0] bg-[#fffdf9]">

      {/* =====================================================
          PAGE HEADER
         ===================================================== */}

      <div className="border-b border-[#e5d7c2] bg-[#faf5ed] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-[1100px] text-center">

          <p className="text-[8px] font-medium tracking-[0.25em] text-[#9a8060] sm:text-[9px]">
            PJ JEWELS
          </p>

          <h1
            className="mt-2 text-[28px] text-[#5b4630] sm:text-[34px] lg:text-[38px]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Track Your Order
          </h1>

          <div className="mx-auto mt-3 flex max-w-[170px] items-center gap-2">
            <span className="h-px flex-1 bg-[#c9a768]" />
            <span className="h-1 w-1 shrink-0 rounded-full bg-[#c9a768]" />
            <span className="h-px flex-1 bg-[#c9a768]" />
          </div>

          <p className="mx-auto mt-4 max-w-[520px] text-[10px] leading-5 text-[#806d56] sm:text-[11px]">
            Check your order status using your order reference. Our current
            orders are personally managed through WhatsApp.
          </p>

        </div>
      </div>


      {/* =====================================================
          MAIN CONTENT
         ===================================================== */}

      <div className="px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">

        <div className="mx-auto max-w-[1000px]">

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1fr_0.9fr]">


            {/* =================================================
                LEFT — TRACK ORDER
               ================================================= */}

            <div className="border border-[#e3cfad] bg-[#fffdfa] p-6 sm:p-8">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#d8bd8d] bg-[#faf3e8] text-[#9b702d]">
                  <Icon name="search" size={17} />
                </div>

                <div>

                  <p className="text-[8px] tracking-[0.18em] text-[#a0835d]">
                    ORDER STATUS
                  </p>

                  <h2
                    className="mt-1 text-[19px] text-[#5b4630]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Find Your Order
                  </h2>

                </div>

              </div>


              <p className="mt-5 text-[9px] leading-5 text-[#806d56]">
                Enter the order reference shared with you by PJ Jewels.
                This section is ready to connect with our future order
                tracking system.
              </p>


              {/* =================================================
                  TRACKING FORM
                 ================================================= */}

              <form
                onSubmit={handleTrack}
                className="mt-7"
              >

                <label
                  htmlFor="orderId"
                  className="mb-2 block text-[8px] tracking-[0.12em] text-[#806d56]"
                >
                  ORDER ID / REFERENCE
                </label>

                <div className="flex flex-col gap-2 sm:flex-row">

                  <input
                    id="orderId"
                    type="text"
                    value={orderId}
                    onChange={(e) => {
                      setOrderId(e.target.value);
                      setShowResult(false);
                    }}
                    placeholder="Example: PJ1024"
                    className="
                      h-11
                      w-full
                      border
                      border-[#d8bd8d]
                      bg-[#fffdf9]
                      px-4
                      text-[10px]
                      text-[#514435]
                      outline-none
                      transition
                      placeholder:text-[#ad9a80]
                      focus:border-[#a77b35]
                    "
                  />

                  <button
                    type="submit"
                    className="
                      h-11
                      shrink-0
                      border
                      border-[#b98a47]
                      bg-[#b18442]
                      px-7
                      text-[9px]
                      tracking-[0.12em]
                      text-white
                      transition
                      duration-300
                      hover:bg-[#8e682f]
                    "
                  >
                    TRACK ORDER
                  </button>

                </div>

                <p className="mt-3 text-[8px] leading-4 text-[#9a8060]">
                  Your order reference is shared with you after your order
                  is confirmed.
                </p>

              </form>


              {/* =================================================
                  CURRENT SYSTEM MESSAGE
                 ================================================= */}

              {showResult && (
                <div className="mt-7 border-t border-[#e5d7c2] pt-6">

                  <div className="flex items-start gap-3">

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#faf3e8] text-[#a77b35]">
                      <Icon name="phone" size={15} />
                    </div>

                    <div>

                      <h3
                        className="text-[14px] text-[#5b4630]"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        Tracking is currently handled through WhatsApp
                      </h3>

                      <p className="mt-2 text-[9px] leading-5 text-[#806d56]">
                        Our online tracking API is being prepared. For the
                        latest update on your order, send your order reference
                        to us on WhatsApp.
                      </p>

                    </div>

                  </div>

                  <a
                    href="https://wa.me/919005313005"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      border
                      border-[#b98a47]
                      px-5
                      py-2.5
                      text-[8px]
                      tracking-[0.1em]
                      text-[#73562f]
                      transition
                      duration-300
                      hover:bg-[#a77b35]
                      hover:text-white
                    "
                  >
                    CHECK STATUS ON WHATSAPP
                    <span>→</span>
                  </a>

                </div>
              )}

            </div>


            {/* =================================================
                RIGHT — HOW ORDER TRACKING WORKS
               ================================================= */}

            <div className="border border-[#e3cfad] bg-[#faf5ed] p-6 sm:p-8">

              <p className="text-[8px] font-medium tracking-[0.2em] text-[#a0835d]">
                YOUR ORDER JOURNEY
              </p>

              <h2
                className="mt-2 text-[20px] text-[#5b4630]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                From Selection to Delivery
              </h2>

              <p className="mt-2 text-[9px] leading-5 text-[#806d56]">
                Every order is carefully checked before it is dispatched.
              </p>


              {/* =================================================
                  STEPS
                 ================================================= */}

              <div className="mt-7">

                {/* STEP 01 */}
                <div className="relative flex gap-4 pb-7">

                  <div className="relative flex shrink-0 flex-col items-center">

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c9a768] bg-[#fffdf9] text-[9px] text-[#9b702d]">
                      01
                    </div>

                    <span className="absolute top-8 h-full w-px bg-[#dfccb0]" />

                  </div>

                  <div>

                    <h3
                      className="text-[12px] text-[#5b4630]"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      Select Your Jewellery
                    </h3>

                    <p className="mt-1 text-[8px] leading-4 text-[#806d56]">
                      Send us the jewellery image or product you are
                      interested in through WhatsApp.
                    </p>

                  </div>

                </div>


                {/* STEP 02 */}
                <div className="relative flex gap-4 pb-7">

                  <div className="relative flex shrink-0 flex-col items-center">

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c9a768] bg-[#fffdf9] text-[9px] text-[#9b702d]">
                      02
                    </div>

                    <span className="absolute top-8 h-full w-px bg-[#dfccb0]" />

                  </div>

                  <div>

                    <h3
                      className="text-[12px] text-[#5b4630]"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      Receive Product Details
                    </h3>

                    <p className="mt-1 text-[8px] leading-4 text-[#806d56]">
                      We share the price, availability and product details
                      with you personally.
                    </p>

                  </div>

                </div>


                {/* STEP 03 */}
                <div className="relative flex gap-4 pb-7">

                  <div className="relative flex shrink-0 flex-col items-center">

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c9a768] bg-[#fffdf9] text-[9px] text-[#9b702d]">
                      03
                    </div>

                    <span className="absolute top-8 h-full w-px bg-[#dfccb0]" />

                  </div>

                  <div>

                    <h3
                      className="text-[12px] text-[#5b4630]"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      Complete Payment
                    </h3>

                    <p className="mt-1 text-[8px] leading-4 text-[#806d56]">
                      After confirming the order, complete the payment and
                      send the payment screenshot through WhatsApp.
                    </p>

                  </div>

                </div>


                {/* STEP 04 */}
                <div className="relative flex gap-4 pb-7">

                  <div className="relative flex shrink-0 flex-col items-center">

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c9a768] bg-[#fffdf9] text-[9px] text-[#9b702d]">
                      04
                    </div>

                    <span className="absolute top-8 h-full w-px bg-[#dfccb0]" />

                  </div>

                  <div>

                    <h3
                      className="text-[12px] text-[#5b4630]"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      Payment Verification
                    </h3>

                    <p className="mt-1 text-[8px] leading-4 text-[#806d56]">
                      Our team manually verifies that the payment has been
                      successfully credited.
                    </p>

                  </div>

                </div>


                {/* STEP 05 */}
                <div className="flex gap-4">

                  <div className="flex shrink-0 items-start">

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c9a768] bg-[#fffdf9] text-[9px] text-[#9b702d]">
                      05
                    </div>

                  </div>

                  <div>

                    <h3
                      className="text-[12px] text-[#5b4630]"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      Dispatch & Tracking
                    </h3>

                    <p className="mt-1 text-[8px] leading-4 text-[#806d56]">
                      Once your order is dispatched, we send the courier
                      name, tracking ID and delivery details through WhatsApp.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* =====================================================
              WHATSAPP SUPPORT
             ===================================================== */}

          <div className="mt-8 border border-[#dfccb0] bg-[#fffdfa] px-5 py-7 text-center sm:px-8">

            <p className="text-[8px] tracking-[0.15em] text-[#9a8060]">
              NEED AN ORDER UPDATE?
            </p>

            <h2
              className="mt-2 text-[19px] text-[#5b4630]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              We are just a message away.
            </h2>

            <p className="mx-auto mt-2 max-w-[500px] text-[9px] leading-5 text-[#806d56]">
              Until our online tracking system is connected, you can
              contact us directly on WhatsApp for payment confirmation,
              dispatch updates and courier tracking details.
            </p>

            <a
              href="https://wa.me/919005313005"
              target="_blank"
              rel="noreferrer"
              className="
                mt-4
                inline-flex
                items-center
                gap-2
                bg-[#b18442]
                px-7
                py-2.5
                text-[8px]
                tracking-[0.12em]
                text-white
                transition
                duration-300
                hover:bg-[#8e682f]
              "
            >
              MESSAGE US ON WHATSAPP
              <span>→</span>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}