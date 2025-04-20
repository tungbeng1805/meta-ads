import { Switch } from "@mui/material";
import { styled } from "@mui/system";

const IOSSwitch = styled((props: any) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#0a78be',
        opacity: 1,
        border: 0,
        ...theme.applyStyles('dark', {
          backgroundColor: '#0a78be',
        }),
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#0a78be',
      border: '6px solid #fff',
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
      ...theme.applyStyles('dark', {
        opacity: 0.3,
      }),
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E9E9EA',
    opacity: 1,
    transition: theme?.transitions?.create(['background-color'], {
      duration: 500,
    }),
    ...theme.applyStyles('dark', {
      backgroundColor: '#39393D',
    }),
  },
}));

const CustomSwitch = () => {
  return (
    <IOSSwitch
      sx={{
        padding: "8px",
        ".MuiSwitch-root": {
          display: "none",
        },
        "& span.MuiSwitch-track": {
          borderRadius: "20px",
          background: "white",
          border: "1px solid #cbd2d9",
        },
        "& span.MuiSwitch-thumb": {
          height: "22px",
          width: "22px",
        },
        "& span.MuiSwitch-switchBase": {
          color: "#283943",
          "&.Mui-checked": {
            color: "#0a78be",
          },
          "&.Mui-checked+.MuiSwitch-track": {
            background: "#e1edf7",
          },
        },
      }}
    />
  )
}

export default CustomSwitch