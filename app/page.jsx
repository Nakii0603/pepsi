import React from "react";
import { getPlatform } from ".";

const AppLink = () => {
  const platform = getPlatform();
  const appStoreUrl ="https://duncan-mcardle.medium.com/leetcode-problem-13-roman-to-integer-javascript-1105d46335f8";
  const playStoreUrl ="https://play.google.com/store/apps/details?id=your.app.package";

  let storeUrl = "#";

  if (platform === "android") {
    storeUrl = playStoreUrl;
  } else if (platform === "ios") {
    storeUrl = appStoreUrl;
  }

  return (
    <div>
      <a href={storeUrl} target="_blank" rel="noopener noreferrer">
        Download our app
      </a>
    </div>
  );
};

export default AppLink;
