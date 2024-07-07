import React from "react";

const HeaderBox = ({
  type = "title",
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  return (
    <header>
      <h1 className="text-3xl font-inter font-semibold text-[#101828]">
        {title}
        {type === "greeting" && (
          <span className="text-transparent bg-gradient-to-r from-[#0179FE] to-[#4893FF] bg-clip-text">
            &nbsp;{user}
          </span>
        )}
      </h1>
      <p className=" font-normal text-base text-[#475467]">{subtext}</p>
    </header>
  );
};

export default HeaderBox;
