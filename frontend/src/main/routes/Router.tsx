import { Routes, Route } from "react-router-dom";
import { Layout } from "@main/factories/pages/layout";

import { Home } from "@main/factories/pages/Home";
import { Query } from "@main/factories/pages/Query";
import { Register } from "@main/factories/pages/Register";
import { Sellers } from "@main/factories/pages/Sellers";
import { Fiis } from "@main/factories/pages/Fiis";
import { Mint } from "@main/factories/pages/Mint";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/query" element={<Query />} />
        <Route path="/sale-and-assignment" element={<Sellers />} />
        <Route path="/fiis" element={<Fiis />} />
        <Route path="/mint" element={<Mint />} />
      </Route>
    </Routes>
  );
}
