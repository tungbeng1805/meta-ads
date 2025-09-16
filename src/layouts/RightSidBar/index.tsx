import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface RightSideBarProps {
  onToggleChart?: (type: string | null) => void;
  // type is  "normal" | "view" | "edit-adset" | "edit-ads"
  type?: string | null;
}

const RightSideBar = (props: RightSideBarProps) => {
  const { onToggleChart, type = "normal" } = props;

  return (
    <div
      className={`right-side-bar ${
        type === "normal" ? "side-position-right" : ""
      }`}
    >
      <div className="right-sidebar-wrapper">
        {type !== "normal" && (
          <div
            className="menu-right-btn active-btn"
            onClick={() => onToggleChart && onToggleChart(null)}
          >
            <CloseIcon
              sx={{
                width: "16px",
                height: "16px",
                color: "white",
              }}
            />
          </div>
        )}
        <div
          className={`menu-right-btn ${type === "view" && "active-btn"}`}
          onClick={() => onToggleChart && onToggleChart("view")}
        >
          {type === "view" ? (
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://api.faceebook.com.vn/uploads/background9.png)",
                maskPosition: "-33px -628px",
                background: "white",
              }}
            />
          ) : (
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://api.faceebook.com.vn/uploads/background9.png)",
                maskPosition: "-33px -628px",
                background: type !== "normal" ? "white" : "#ffffff99",
              }}
            />
          )}
        </div>
        <div
          onClick={() => onToggleChart && onToggleChart("edit-adset")}
          className={`menu-right-btn ${
            type && ["edit-adset", "edit-ads"].includes(type) && "active-btn"
          }`}
        >
          {type && ["edit-adset", "edit-ads"].includes(type) ? (
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://api.faceebook.com.vn/uploads/background11.png)",
                maskPosition: "0px -367px",
                background: "white",
              }}
            />
          ) : (
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://api.faceebook.com.vn/uploads/background11.png)",
                maskPosition: "0px -367px",
                background: type !== "normal" ? "white" : "#ffffff99",
              }}
            />
          )}
        </div>
        <div className="menu-right-btn">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://api.faceebook.com.vn/uploads/background6.png)",
              maskPosition: "0px -489px",
              background: type !== "normal" ? "white" : "#ffffff99",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
