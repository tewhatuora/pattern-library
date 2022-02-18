import React, { createContext, useState, useEffect } from "react";
const breakpoints = {
  mobile: 0,
  tablet: 740,
  desktop: 992,
  wide: 1200
};
const minWidthQuery = (breakpoint) => window.matchMedia(`(min-width: ${breakpoint}px)`);
const getCurrentBreakpoint = (tabletQuery, desktopQuery, wideQuery) => {
  if (wideQuery.matches) {
    return "wide";
  }
  if (desktopQuery.matches) {
    return "desktop";
  }
  if (tabletQuery.matches) {
    return "tablet";
  }
  return "mobile";
};
const breakpointContext = createContext(null);
function BreakpointProvider({ children }) {
  const { tablet, desktop, wide } = breakpoints;
  const [state, setState] = useState(null);
  useEffect(() => {
    let mounted = true;
    const tabletQuery = minWidthQuery(tablet);
    const desktopQuery = minWidthQuery(desktop);
    const wideQuery = minWidthQuery(wide);
    const onChange = () => {
      if (!mounted) {
        return;
      }
      const newBreakPoint = getCurrentBreakpoint(tabletQuery, desktopQuery, wideQuery);
      if (newBreakPoint !== state) {
        setState(newBreakPoint);
      }
    };
    tabletQuery.addListener(onChange);
    desktopQuery.addListener(onChange);
    wideQuery.addListener(onChange);
    onChange();
    return () => {
      mounted = false;
      tabletQuery.removeListener(onChange);
      desktopQuery.removeListener(onChange);
      wideQuery.removeListener(onChange);
    };
  }, [tablet, desktop, wide, state]);
  return /* @__PURE__ */ React.createElement(breakpointContext.Provider, {
    value: state
  }, children);
}
const ThemeContext = createContext(null);
const ThemeProvider = ({ theme, children }) => {
  return /* @__PURE__ */ React.createElement(ThemeContext.Provider, {
    value: theme
  }, /* @__PURE__ */ React.createElement("div", {
    className: theme
  }, /* @__PURE__ */ React.createElement(BreakpointProvider, null, children)));
};
export { ThemeProvider };
