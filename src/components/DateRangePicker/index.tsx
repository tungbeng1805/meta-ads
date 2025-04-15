import React, { useMemo, useState } from "react";
import "react-date-range/dist/theme/default.css"; // theme css file
import "react-date-range/dist/styles.css"; // main css file
import { Box, Button, Popover } from "@mui/material";
import { makeStyles } from "@mui/styles";
import moment from "moment";
import {
  DateRangePicker,
  Range,
  RangeKeyDict,
  StaticRange,
} from "react-date-range";
import clsx from "clsx";
import { DATE_FORMAT } from "@/constants/common";
import CustomRadio from "../RadioCustom";

const useStyles = makeStyles(() => ({
  dateRangeContainer: {
    position: "relative",
    padding: "0px",
    "& span.rdrDayNumber": {
      position: "absolute",
      display: "flex",
    },
    "& button.rdrStaticRange.rdrStaticRangeSelected": {
      color: "#849095",
    },
    "& span.rdrStaticRangeLabel": {
      padding: "5px 12px",
    },
    "& button.rdrStaticRange": {
      border: "none",
    },
    "& div.rdrDefinedRangesWrapper": {
      fontSize: "14px",
      color: "#1c2b33",
      marginTop: "12px",
      width: "160px",
      maxHeight: "408px",
      overflowY: "auto",
    },
  },
  btnOKDate: {
    height: "35px",
    width: "40px",
  },
  btnClear: { height: "35px", width: "40px" },
}));

const KEY_NAME = "selection";

interface IDateRange {
  startDate: string | null | Date | undefined;
  endDate: string | null | Date | undefined;
  key?: string;
}
interface IReactDateRangePickerCustom {
  initialDateRange: IDateRange;
  onChange: (dateRange: IDateRange) => void;
}

export const ReactDateRangePickerCustom = (
  props: IReactDateRangePickerCustom
) => {
  const { initialDateRange, onChange } = props;
  const classes = useStyles();

  const convertInitialDateRange =
    initialDateRange.startDate || initialDateRange.endDate
      ? {
          startDate: initialDateRange.startDate
            ? new Date(moment(initialDateRange.startDate).format())
            : new Date(),
          endDate: initialDateRange.endDate
            ? new Date(moment(initialDateRange.endDate).format())
            : new Date(),
          key: KEY_NAME,
        }
      : { startDate: new Date(), endDate: new Date(), key: KEY_NAME };

  const [initialDateRangeState] = useState<Range>(convertInitialDateRange);
  //--- State
  const [anchorElDate, setAnchorElDate] = useState<any>(null);
  const [dateRange, setDateRange] = useState<Range>(
    convertInitialDateRange as Range
  );
  const [selectedStaticRange, setSelectedStaticRange] = useState<string | null>(
    null
  );

  //--- Live date
  const openLiveDate = Boolean(anchorElDate);
  const idLiveDate = openLiveDate ? "live-date-popover" : undefined;

  const handleClickSelectDate = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setAnchorElDate(event.target);
  };

  const handleCloseSelectDate = () => {
    setDateRange(convertInitialDateRange as Range);
    setAnchorElDate(null);
  };

  const handleChangeModifiedDateRange = (dataRange: RangeKeyDict) => {
    setSelectedStaticRange(null);
    setDateRange(dataRange[KEY_NAME] as Range);
  };

  const displayValue = useMemo(() => {
    let result = "";
    if (initialDateRange?.startDate || initialDateRange?.endDate) {
      const _startDate = initialDateRange?.startDate
        ? moment(initialDateRange?.startDate).format(DATE_FORMAT.dmy)
        : "";
      const _endDate = initialDateRange?.endDate
        ? moment(initialDateRange?.endDate).format(DATE_FORMAT.dmy)
        : "";
      result = `${_startDate} - ${_endDate}`;
    }
    return result;
  }, [initialDateRange]);

  const defaultStaticRanges = [
    {
      label: "Today",
      range: () => ({
        startDate: moment().startOf("day").toDate(),
        endDate: moment().endOf("day").toDate(),
      }),
      hasCustomRendering: true,
      isSelected() {
        return false;
      },
    },
    {
      label: "Yesterday",
      range: () => ({
        startDate: moment().subtract(1, "day").startOf("day").toDate(),
        endDate: moment().subtract(1, "day").endOf("day").toDate(),
      }),
      hasCustomRendering: true,
      isSelected() {
        return false;
      },
    },
    {
      label: "Last 7 days",
      range: () => ({
        startDate: moment().subtract(6, "days").startOf("day").toDate(),
        endDate: moment().endOf("day").toDate(),
      }),
      hasCustomRendering: true,
      isSelected() {
        return false;
      },
    },
    {
      label: "Last 14 days",
      range: () => ({
        startDate: moment().subtract(13, "days").startOf("day").toDate(),
        endDate: moment().endOf("day").toDate(),
      }),
      hasCustomRendering: true,
      isSelected() {
        return false;
      },
    },
    {
      label: "This week",
      range: () => ({
        startDate: moment().startOf("week").toDate(), // Mặc định startOf('week') là Chủ nhật, cần cấu hình locale nếu cần bắt đầu từ Thứ 2
        endDate: moment().endOf("week").toDate(),
      }),
      hasCustomRendering: true,
      isSelected() {
        return false;
      },
    },
    {
      label: "Last week",
      range: () => ({
        startDate: moment().subtract(1, "week").startOf("week").toDate(),
        endDate: moment().subtract(1, "week").endOf("week").toDate(),
      }),
      hasCustomRendering: true,
      isSelected() {
        return false;
      },
    },
    {
      label: "This month",
      range: () => ({
        startDate: moment().startOf("month").toDate(),
        endDate: moment().endOf("month").toDate(),
      }),
      hasCustomRendering: true,
      isSelected() {
        return false;
      },
    },
    {
      label: "Last month",
      range: () => ({
        startDate: moment().subtract(1, "month").startOf("month").toDate(),
        endDate: moment().subtract(1, "month").endOf("month").toDate(),
      }),
      hasCustomRendering: true,
      isSelected() {
        return false;
      },
    },
    {
      label: "This quarter",
      range: () => ({
        startDate: moment().startOf("quarter").toDate(),
        endDate: moment().endOf("quarter").toDate(),
      }),
      hasCustomRendering: true,
      isSelected() {
        return false;
      },
    },
    {
      label: "Last quarter",
      range: () => ({
        startDate: moment().subtract(1, "quarter").startOf("quarter").toDate(),
        endDate: moment().subtract(1, "quarter").endOf("quarter").toDate(),
      }),
      hasCustomRendering: true,
      isSelected() {
        return false;
      },
    },
    {
      label: "This year",
      range: () => ({
        startDate: moment().startOf("year").toDate(),
        endDate: moment().endOf("year").toDate(),
      }),
      hasCustomRendering: true,
      isSelected() {
        return false;
      },
    },
    {
      label: "Last year",
      range: () => ({
        startDate: moment().subtract(1, "year").startOf("year").toDate(),
        endDate: moment().subtract(1, "year").endOf("year").toDate(),
      }),
      hasCustomRendering: true,
      isSelected() {
        return false;
      },
    },
    {
      label: "Custom",
      range: () => ({
        startDate: moment().subtract(1, "day").startOf("day").toDate(),
        endDate: moment().toDate(),
      }),
      hasCustomRendering: true,
      isSelected() {
        return false;
      },
    },
  ];

  const renderStaticRangeLabel = (staticRange: StaticRange) => (
    <Box
      display="flex"
      alignItems="center"
      gap="8px"
      fontFamily="Optimistic Display, system-ui, sans-serif !important"
      onClick={() => {
        setTimeout(() => {
          setSelectedStaticRange(staticRange.label as string);
        }, 100);
        const staticRangeDate = {
          endDate: staticRange.range().endDate,
          startDate: staticRange.range().startDate,
          key: "selection",
        };
        onChange(staticRangeDate as IDateRange);
        setAnchorElDate(null);
      }}
    >
      <CustomRadio checked={staticRange.label === selectedStaticRange} />
      {staticRange.label}
    </Box>
  );

  const onOK = () => {
    if (dateRange !== initialDateRangeState) onChange(dateRange as IDateRange);
    setAnchorElDate(null);
  };

  const onClear = () => {
    onChange({ startDate: "", endDate: "", key: KEY_NAME });
    setDateRange(initialDateRangeState);
  };

  return (
    <>
      <div className="date-range-field" onClick={handleClickSelectDate}>
        <Box
          sx={{
            width: "16px",
            height: "16px",
            maskImage:
              "url(https://static.xx.fbcdn.net/rsrc.php/v4/yw/r/9hdI2sYqsZC.png)",
            maskPosition: "-305px -867px",
            maskSize: "325px 1111px",
            background: "#1c2b33",
          }}
        />
        {displayValue}
        <Box
          sx={{
            width: "16px",
            height: "16px",
            maskImage:
              "url(https://static.xx.fbcdn.net/rsrc.php/v4/y-/r/pqHpzOoq1-k.png)",
            maskPosition: "-170px -1094px",
            background: "#1c2b33",
          }}
        />
      </div>
      <Popover
        id={idLiveDate}
        open={openLiveDate}
        anchorEl={anchorElDate}
        onClose={handleCloseSelectDate}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div className={classes.dateRangeContainer}>
          <DateRangePicker
            months={2}
            direction="horizontal"
            onChange={(item) => handleChangeModifiedDateRange(item)}
            ranges={[dateRange]}
            staticRanges={defaultStaticRanges}
            inputRanges={[]}
            showDateDisplay={false}
            renderStaticRangeLabel={renderStaticRangeLabel}
            minDate={new Date("1990-01-01")}
          />
        </div>
        <Box
          padding="0 20px 5px 5px"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          position="absolute"
          right={0}
          bottom={0}
        >
          <Button className={classes.btnOKDate} onClick={onClear}>
            Cancel
          </Button>
          <Button onClick={onOK} className={classes.btnOKDate}>
            Update
          </Button>
        </Box>
      </Popover>
    </>
  );
};

export default ReactDateRangePickerCustom;
