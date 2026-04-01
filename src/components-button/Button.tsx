import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

export default function Button({ children }: Props) {
  return (
    <button className="flex gap-4 text-white px-4 py-3 rounded-[5px] bg-[#ee5e7f]">
      {children}
    </button>
  );
}
