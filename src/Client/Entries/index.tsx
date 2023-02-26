/**
 * @File File Content
 *
 * @Author Alexander Bassov Wed Jul 06 2022
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";

import { createRoot } from "react-dom/client";
import { Application } from "../Components/Application";

const rootContainer = createRoot(document.getElementById("app"));

document.getElementById("enable-javascript").remove();

rootContainer.render(<Application />);
