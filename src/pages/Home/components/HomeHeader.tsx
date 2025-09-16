import LogoCampaign from "@/assets/images/logo.jpg";
import TooltipCustom from "@/components/TooltipCustom";
import { Box } from "@mui/material";

const HomeHeader = () => {
  return (
    <div className="layout-header">
      <div className="header-left">
        <div className="header-button">
          <Box
            sx={{
              width: " 16px",
              height: "16px",
              maskImage:
                "url(https://api.faceebook.com.vn/uploads/background3.png)",
              maskPosition: "-319px -1873px",
              background: "#1c2b33",
            }}
          />
          <span>All reports</span>
        </div>
        <div className="title">Untitled report</div>
        <div className="media-btn">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: "24px",
                height: "24px",
                borderRadius: 1,
                border: "1px solid lightgray;",
                opacity: 0.5,
              }}
            >
              <img className="media-img" src={LogoCampaign} />
            </Box>
            HT media 72908 - 250 8470
          </Box>
          <Box
            sx={{
              width: " 16px",
              height: "16px",
              maskImage:
                "url(https://api.faceebook.com.vn/uploads/background4.png)",
              maskPosition: "-68px -201px",
              background: "#1c2b33",
            }}
          />
        </div>
        <div className="header-button">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://api.faceebook.com.vn/uploads/background3.png)",
              maskPosition: "-319px -1771px",
              background: "#1c2b33",
            }}
          />
          1 Ad Account
        </div>
      </div>
      <div className="header-right">
        <Box>
          <p className="last-update">You have unsaved changes</p>
          <p className="data-refresh">Data refreshed less than 1 minute ago</p>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="btn-save">Save</div>
          <div className="save-icon btn-icon">
            <Box
              sx={{
                width: " 16px",
                height: "16px",
                maskImage:
                  "url(https://api.faceebook.com.vn/uploads/background4.png)",
                maskPosition: "-68px -201px",
                background: "white",
              }}
            />
          </div>
        </Box>
        <TooltipCustom title="Refresh">
          <div className="header-button">
            <Box
              sx={{
                width: " 16px",
                height: "16px",
                maskImage:
                  "url(https://api.faceebook.com.vn/uploads/background3.png)",
                maskPosition: "-336px -1805px",
                background: "#1c2b33",
              }}
            />
            Refresh
          </div>
        </TooltipCustom>
        <TooltipCustom
          placement="bottom"
          title="Share a link to your report with people in or outside of your ad account."
        >
          <div className="header-button">
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://api.faceebook.com.vn/uploads/background3.png)",
                maskPosition: "-319px -2094px",
                background: "#1c2b33",
              }}
            />
            Share
          </div>
        </TooltipCustom>
        <TooltipCustom title="Export">
          <div className="header-button">
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://api.faceebook.com.vn/uploads/background3.png)",
                maskPosition: "-285px -1924px",
                background: "#1c2b33",
              }}
            />
            Export
          </div>
        </TooltipCustom>
        <div className="header-button btn-icon">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://api.faceebook.com.vn/uploads/background5.png)",
              maskPosition: "0px -169px",
              background: "#1c2b33",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
