import React from "react";
import Articles from "./components/Articles";
import User from "./components/User";

export default function App() {
  return (
    <div className="">
      <header>
        <h1>React Skeleton</h1>
      </header>

      <div className="content">
        <div className="Articles">
          <Articles />
        </div>

        <div className="User">
          <User />
        </div>
      </div>
    </div>
  );
}
