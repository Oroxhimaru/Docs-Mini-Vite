import React, { useState } from "react";
import Cards from "./Cards";

const Frontpage = () => {
  const data = [
    {
      desc: "jbasjdbas asjbfkjsfb askfnsajdas sjfabfbdj djfd sajdfbas",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true, tagTitle: "Download Now", tagColor: "green"
      },
    },
  ];
  return (
    <>
      <div className="fixed top-0 left-0 z-[3] w-full h-full">
      {data.map((item, index) => (
          <Cards key={index} data={item} />
        ))}
      </div>
    </>
  );
};

export default Frontpage;
