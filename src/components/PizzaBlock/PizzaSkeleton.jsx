import React from "react";
import ContentLoader from "react-content-loader";

const PizzaSkeleton = () => (
   <div className="block-wrap">
      <ContentLoader
         className="pizza_block"
         speed={2}
         width={300}
         height={465}
         viewBox="0 0 280 465"
         backgroundColor="#ededed"
         foregroundColor="#ecebeb"
      >
         <circle x="40" cx="140" cy="130" r="130" />
         <rect x="0" y="280" rx="5" ry="5" width="280" height="24" />
         <rect x="0" y="320" rx="10" ry="10" width="280" height="74" />
         <rect x="0" y="420" rx="5" ry="5" width="96" height="27" />
         <rect x="141" y="412" rx="20" ry="20" width="137" height="39" />
      </ContentLoader>
   </div>
);

export default PizzaSkeleton;
