import React from "react";
import RightSideBar from "@/layouts/RightSidBar";
import BotChart from "@/pages/Chart/BotChart";
import TopChart from "@/pages/Chart/TopChart";
import { Box, Divider, Drawer, InputAdornment, TextField } from "@mui/material";
import CampaignIcon from "@/components/SvgIcons/CampainIcon";
import AdSetIcon from "@/components/SvgIcons/AdSetIcon";
import AdsIcon from "@/components/SvgIcons/AdsIcon";
import FolderIcon from "@/components/SvgIcons/FolderIcon";
import FolderActive from "@/assets/folder_active.svg";
import Folder from "@/assets/folder.svg";
import MenuCategoryActive from "@/assets/menu-category-active.svg";
import MenuCategory from "@/assets/menu-category.svg";
import MenuTabletActive from "@/assets/menu-tablet-active.svg";
import MenuTablet from "@/assets/menu-tablet.svg";

interface ViewChartProps {
  open: boolean;
  onToggleChart: (show: boolean) => void;
}

interface IMenuItem {
  id: number;
  name: string;
  groups?: IMenuItem[];
}

const ViewChart = (props: ViewChartProps) => {
  const { open, onToggleChart } = props;
  const [activeMenu, setActiveMenu] = React.useState<number | null>(null);

  const listMenu = [
    {
      id: 1,
      name: "Huy- 2250k Mess gym - Bản sao",
      groups: [
        {
          id: 11,
          name: "Nhóm quảng cáo Lượt tương tác mới - Bản sao",
          groups: [
            {
              id: 111,
              name: "Quảng cáo Lượt tương tác mới",
            },
          ],
        },
        {
          id: 12,
          name: "Nhóm quảng cáo Lượt tương tác mới - Bản sao",
          groups: [
            {
              id: 121,
              name: "Quảng cáo Lượt tương tác mới",
            },
          ],
        },
        {
          id: 13,
          name: "Nhóm quảng cáo Lượt tương tác mới - Bản sao",
          groups: [
            {
              id: 131,
              name: "Quảng cáo Lượt tương tác mới",
            },
          ],
        },
      ],
    },
  ];

  const renderIconByDeep = (deep: number, active: boolean) => {
    switch (deep) {
      case 1:
        return <img src={active ? FolderActive : Folder} />;
      case 2:
        return (
          <img
            style={{ paddingLeft: 16 }}
            src={active ? MenuCategoryActive : MenuCategory}
          />
        );
      case 3:
        return (
          <img
            style={{ paddingLeft: 32 }}
            src={active ? MenuTabletActive : MenuTablet}
          />
        );
      default:
        return;
    }
  };

  const handleClickMenu = (menu: IMenuItem) => {
    setActiveMenu(menu?.id);
  };

  const renderMenu = (menu: IMenuItem, index: number, depth: number = 1) => {
    const active = menu?.id === activeMenu;

    return (
      <div key={menu?.id}>
        <div
          className={`menu-btn ${active && "active-menu"}`}
          onClick={() => {
            handleClickMenu(menu);
          }}
        >
          <div className={`menu-label`}>
            {renderIconByDeep(depth, active)}
            <p className={`menu-name`}>{menu?.name}</p>
          </div>
        </div>
        {menu?.groups?.map((group, i) => renderMenu(group, i, depth + 1))}
      </div>
    );
  };

  return (
    <Drawer
      open={open}
      onClose={() => onToggleChart(false)}
      anchor="right"
      hideBackdrop
    >
      <div className="view-chart-container">
        <RightSideBar side="left" onCloseChart={() => onToggleChart(false)} />
        <div className="view-chart-wrapper">
          <div className="view-chart-menu">
            <Box padding="6px 12px">
              <TextField
                label=""
                variant="outlined"
                size="small"
                placeholder="Search"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-input": {
                    padding: "8px 10px 8px 0px",
                    fontSize: "14px",
                    "&::placeholder": {
                      color: "rgba(28, 43, 51, 0.6)",
                      opacity: 1,
                    },
                  },
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Box
                          sx={{
                            width: "12px",
                            height: "12px",
                            maskImage:
                              "url(https://static.xx.fbcdn.net/rsrc.php/v4/yG/r/sG3ZUjuDhT5.png)",
                            maskPosition: "-195px -251px",
                            background: "#1c2b33",
                          }}
                        />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>
            <Divider />
            <div className="list-menu">
              {listMenu?.map((menu, index) => renderMenu(menu, index))}
            </div>
          </div>
          <TopChart />
          <BotChart />
        </div>
      </div>
    </Drawer>
  );
};

export default ViewChart;
