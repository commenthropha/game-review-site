import React from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";

/*
 * Parses the raw hygraph content and turns it into JSX
 */
const Content = ({ content }) => {
  return (
    <div>
      <RichText
        content={content}
        renderers={{
          h1: ({ children }) => <h1 className="text-white">{children}</h1>,
          bold: ({ children }) => <strong>{children}</strong>,
          p: ({ children }) => <p className="my-4">{children}</p>,
        }}
      />
    </div>
  );
};

export default Content;
