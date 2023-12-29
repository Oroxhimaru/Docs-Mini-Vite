import React, { useRef, useState } from "react";
import Cards from "./Cards";

const Frontpage = () => {

 const ref = useRef(null);

  const data = [
    {
      desc: "jbasjdbas asjbfkjsfb askfnsajdas sjfabfbdj djfd sajdfbas",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true, tagTitle: "Download Now", tagColor: "green"
      },
    },
    {
      desc: "jbasjdbas asjbfkjsfb askfnsajdas sjfabfbdj djfd sajdfbas",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: false, tagTitle: "Download Now", tagColor: "green"
      },
    },
    {
      desc: "jbasjdbas asjbfkjsfb askfnsajdas sjfabfbdj djfd sajdfbas",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true, tagTitle: "Download Now", tagColor: "blue"
      },
    },
  ];
  console.log(data.map(item => item.tag.tagColor));
  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
          <Cards key={index} data={item} reference={ref} />
        ))}
      </div>
    </>
  );
};

export default Frontpage;
