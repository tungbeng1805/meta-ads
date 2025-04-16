import TooltipCustom from "@/components/TooltipCustom";
import { Box } from "@mui/material";
import React from "react";

const CampaignAction = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="0 8px"
    >
      <Box display="flex" alignItems="center" gap="8px">
        <div className="header-button btn-icon btn-hight-light">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yA/r/2M_0CXhP5Bo.png?_nc_eui2=AeHiDmTsbWD5rqhVcmGmb5aEkO_Mln0pzxiQ78yWfSnPGJmTcChrNjR9FK35n4aNK5wSDmoY8GN8WZyVpMp95-Vp)",
              maskPosition: "0px -331px",
              maskSize: "41px 489px",
              background: "#0a78be",
            }}
          />
        </div>
        <div className="divider-campaign" />
        <div className="btn-action btn-hight-light">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yb/r/ZIKOq1xjju4.png?_nc_eui2=AeEeaalNIAYlg-lDBl9x2OYFUKU2MNtz9sZQpTYw23P2xm2QjdRgMlLrT87X3w0K9zZTSxdg73Jt0dMAbTM1vt8E)",
              maskPosition: "-34px -363px",
              maskSize: "441px 397px",
              background: "#0a78be",
            }}
          />
          All Ads
        </div>
        <div className="btn-action">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yb/r/ZIKOq1xjju4.png?_nc_eui2=AeEeaalNIAYlg-lDBl9x2OYFUKU2MNtz9sZQpTYw23P2xm2QjdRgMlLrT87X3w0K9zZTSxdg73Jt0dMAbTM1vt8E)",
              maskPosition: "-17px -363px",
              maskSize: "441px 397px",
              background: "#1c2b33",
            }}
          />
          Active ads
        </div>
        <div className="btn-action">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yb/r/ZIKOq1xjju4.png?_nc_eui2=AeEeaalNIAYlg-lDBl9x2OYFUKU2MNtz9sZQpTYw23P2xm2QjdRgMlLrT87X3w0K9zZTSxdg73Jt0dMAbTM1vt8E)",
              maskPosition: "-17px -363px",
              maskSize: "441px 397px",
              background: "#1c2b33",
            }}
          />
          Had delivery
        </div>
        <div className="btn-action btn-ghost">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yY/r/vzJObRgMrT4.png?_nc_eui2=AeFOm1xgKC-fgh4gyx2pOxC8-TDo7PwfdDr5MOjs_B90Oo05NXXS_wzWY57umPopn_Qr_MF8PI0uqDp93mrsCIQL)",
              maskPosition: "-34px -169px",
              maskSize: "51px 220px",
              background: "#1c2b33",
            }}
          />
          See more
        </div>
      </Box>
      <Box display="flex" alignItems="center" gap="8px">
        <div className="header-button">Create a view</div>
        <TooltipCustom title="Settings" placement="top">
          <div className="header-button btn-icon">
            <Box
              sx={{
                width: " 16px",
                height: "16px",
                maskImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v4/yl/r/_tluDGOtAlV.png?_nc_eui2=AeFWQe1bHi04-awbDGavvrLYjXcSO7ekFu2NdxI7t6QW7RbiaBOA0xM5n7Af6QrZZmVqRWlC35ipB2hgp3IC3Tyb)",
                maskPosition: "0px -671px",
                maskSize: "25px 1271px",
                background: "#1c2b33",
              }}
            />
          </div>
        </TooltipCustom>
      </Box>
    </Box>
  );
};

export default CampaignAction;
