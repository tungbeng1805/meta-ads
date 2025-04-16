import TooltipCustom from "@/components/TooltipCustom";
import { Box } from "@mui/material";
import React from "react";

const TableHeaderAction = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="8px"
      bgcolor="white"
      borderRadius="8px 8px 0 0"
    >
      <Box display="flex" alignItems="center" gap="8px">
        <div className="btn-action btn-create">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yY/r/vzJObRgMrT4.png?_nc_eui2=AeFOm1xgKC-fgh4gyx2pOxC8-TDo7PwfdDr5MOjs_B90Oo05NXXS_wzWY57umPopn_Qr_MF8PI0uqDp93mrsCIQL)",
              maskPosition: "-34px -169px",
              maskSize: "51px 220px",
              background: "white",
            }}
          />
          Create
        </div>
        <div className="header-button disable-btn">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yb/r/ZIKOq1xjju4.png?_nc_eui2=AeEeaalNIAYlg-lDBl9x2OYFUKU2MNtz9sZQpTYw23P2xm2QjdRgMlLrT87X3w0K9zZTSxdg73Jt0dMAbTM1vt8E)",
              maskPosition: "-255px -346px",
              maskSize: "441px 397px",
              background: "#1c2b3399",
            }}
          />
          Duplicate
        </div>
        <div className="header-button disable-btn">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yl/r/_tluDGOtAlV.png?_nc_eui2=AeFWQe1bHi04-awbDGavvrLYjXcSO7ekFu2NdxI7t6QW7RbiaBOA0xM5n7Af6QrZZmVqRWlC35ipB2hgp3IC3Tyb)",
              maskPosition: "0px -807px",
              maskSize: "25px 1271px",
              background: "#1c2b3399",
            }}
          />
          Edit
        </div>
        <div className="divider-button-action" />
        <div className="header-button">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yI/r/gUZYer0ynAt.png?_nc_eui2=AeH9p-fD6VJmdOzhES9f6unmZM_K53s0Wo9kz8rnezRaj-4R1LNIMqs6-wYy9zohQYS9OuB8nIiu_7jlo2U6wQrM)",
              maskPosition: "-34px -402px",
              maskSize: "71px 551px",
              background: "#1c2b33",
            }}
          />
          A/B test
        </div>
        <div className="btn-action btn-ghost">
          More
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yB/r/WmPEZuoD7_w.png?_nc_eui2=AeHFiWtGPUmEv2NcPaSW3mWPze37yCl6tkLN7fvIKXq2QriWP8T4yTjeEFk3CbINy37gxKs6Wu4aZ-ig98dAMfsf)",
              maskPosition: "-221px -1118px",
              maskSize: "325px 1135px",
              background: "#1c2b33",
            }}
          />
        </div>
      </Box>
      <Box display="flex" alignItems="center" gap="8px">
        <div className="header-button">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yb/r/ZIKOq1xjju4.png?_nc_eui2=AeEeaalNIAYlg-lDBl9x2OYFUKU2MNtz9sZQpTYw23P2xm2QjdRgMlLrT87X3w0K9zZTSxdg73Jt0dMAbTM1vt8E)",
              maskPosition: "-238px -346px",
              maskSize: "441px 397px",
              background: "#1c2b33",
            }}
          />
          Columns: Performance
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yB/r/WmPEZuoD7_w.png?_nc_eui2=AeHFiWtGPUmEv2NcPaSW3mWPze37yCl6tkLN7fvIKXq2QriWP8T4yTjeEFk3CbINy37gxKs6Wu4aZ-ig98dAMfsf)",
              maskPosition: "-221px -1118px",
              maskSize: "325px 1135px",
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
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yb/r/ZIKOq1xjju4.png?_nc_eui2=AeEeaalNIAYlg-lDBl9x2OYFUKU2MNtz9sZQpTYw23P2xm2QjdRgMlLrT87X3w0K9zZTSxdg73Jt0dMAbTM1vt8E)",
              maskPosition: "-292px -325px",
              maskSize: "441px 397px",
              background: "#1c2b3399",
            }}
          />
          Breakdown
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yB/r/WmPEZuoD7_w.png?_nc_eui2=AeHFiWtGPUmEv2NcPaSW3mWPze37yCl6tkLN7fvIKXq2QriWP8T4yTjeEFk3CbINy37gxKs6Wu4aZ-ig98dAMfsf)",
              maskPosition: "-221px -1118px",
              maskSize: "325px 1135px",
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
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yb/r/ZIKOq1xjju4.png?_nc_eui2=AeEeaalNIAYlg-lDBl9x2OYFUKU2MNtz9sZQpTYw23P2xm2QjdRgMlLrT87X3w0K9zZTSxdg73Jt0dMAbTM1vt8E)",
              maskPosition: "-119px -363px",
              maskSize: "441px 397px",
              background: "#1c2b33",
            }}
          />
          Reports
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yB/r/WmPEZuoD7_w.png?_nc_eui2=AeHFiWtGPUmEv2NcPaSW3mWPze37yCl6tkLN7fvIKXq2QriWP8T4yTjeEFk3CbINy37gxKs6Wu4aZ-ig98dAMfsf)",
              maskPosition: "-221px -1118px",
              maskSize: "325px 1135px",
              background: "#1c2b33",
            }}
          />
        </div>
        <Box display="flex" alignItems="center">
          <div className="header-button export-btn">
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v4/yb/r/ZIKOq1xjju4.png?_nc_eui2=AeEeaalNIAYlg-lDBl9x2OYFUKU2MNtz9sZQpTYw23P2xm2QjdRgMlLrT87X3w0K9zZTSxdg73Jt0dMAbTM1vt8E)",
                maskPosition: "-119px -363px",
                maskSize: "441px 397px",
                background: "#1c2b33",
              }}
            />
            Export
          </div>
          <div className="header-button btn-icon export-more-btn">
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v4/yB/r/WmPEZuoD7_w.png?_nc_eui2=AeHFiWtGPUmEv2NcPaSW3mWPze37yCl6tkLN7fvIKXq2QriWP8T4yTjeEFk3CbINy37gxKs6Wu4aZ-ig98dAMfsf)",
                maskPosition: "-221px -1118px",
                maskSize: "325px 1135px",
                background: "#1c2b33",
              }}
            />
          </div>
        </Box>

        <div className="header-button">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yb/r/ZIKOq1xjju4.png?_nc_eui2=AeEeaalNIAYlg-lDBl9x2OYFUKU2MNtz9sZQpTYw23P2xm2QjdRgMlLrT87X3w0K9zZTSxdg73Jt0dMAbTM1vt8E)",
              maskPosition: "-17px -380px",
              maskSize: "441px 397px",
              background: "#1c2b33",
            }}
          />
          Charts
        </div>
      </Box>
    </Box>
  );
};

export default TableHeaderAction;
