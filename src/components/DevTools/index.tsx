import React from "react";
import { createDevTools } from "@redux-devtools/core";
// @ts-ignore
import LogMonitor from "@redux-devtools/log-monitor";
// @ts-ignore
// import DockMonitor from "@redux-devtools/dock-monitor";
// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(<></>);

export default DevTools;
