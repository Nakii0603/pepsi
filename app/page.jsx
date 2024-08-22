
import React from "react";
import { getPlatform } from ".";


const AppLink = () => {
  const platform = getPlatform();
  const appStoreUrl = "https://apps.apple.com/app/your-app-id";
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
