import React, { useEffect, useState, useRef } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { FiBell } from "react-icons/fi";
// import { useTheme } from "../../src/Context/ThemeContext";

export default function Navbar({ sidebarOpen }) {
  //   const { theme, toggleTheme } = useTheme();
  const [hidden, setHidden] = useState(false);
  const lastYRef = useRef(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      const currentY = window.scrollY || 0;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setHidden(currentY > lastYRef.current && currentY > 50);
          lastYRef.current = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={1}
      className={`transition-all duration-300 ${
        sidebarOpen ? "ml-64" : "ml-16"
      } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
      sx={{
        background: "var(--navbar-bg)",
        color: "var(--navbar-text)",
        width: `calc(100% - ${sidebarOpen ? "16rem" : "4rem"})`,
        transition: "margin-left 0.3s ease, width 0.3s ease",
        zIndex: 7,
      }}
    >
      <Toolbar className="flex justify-between">
        {/* LEFT SIDE */}
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: "var(--navbar-text)" }}
        >
          Listing Automation
        </Typography>

        {/* RIGHT SIDE — Only Bell Icon */}
        <div className="flex items-center gap-2">
          {/* Notification Icon (Static) */}
          <IconButton
            aria-label="Notifications"
            sx={{ color: "var(--navbar-icon)", p: 1.25 }}
          >
            <FiBell size={20} />
          </IconButton>

          {/* 
          // Theme Toggle Icon (Commented Out)
          <IconButton
            aria-label="Toggle theme"
            onClick={toggleTheme}
            sx={{ color: "var(--navbar-icon)", p: 1.25 }}
          >
            {theme === "light" ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
          */}
        </div>
      </Toolbar>
    </AppBar>
  );
}
