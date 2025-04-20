import TextFieldCustom from "@/components/TextFieldCustom";
import MESSAGE_API from "@/constants/message";
import axiosInstance from "@/services/api-services";
import URL_PATHS from "@/services/url-path";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";

const ModalAdminChart = (props: any) => {
  const { open, handleClose, defaultValues, isView, getList } = props;
  const { handleSubmit, control } = useForm({
    defaultValues: props?.defaultValues ?? {
      name: "",
      men: "",
      women: "",
      costPerResultMen: "",
      costPerResultWomen: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: any) => {
    try {
      if (defaultValues?.id) {
        const response: any = await axiosInstance.put(URL_PATHS.UPDATE_CHART.replace(":id", defaultValues?.id), data);
        if (response?.status === 200) {
          toast.success(MESSAGE_API.updateSuccessChart, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          handleClose();
          getList();
        } else {
          toast.error(MESSAGE_API.errorApi, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      } else {
        const response: any = await axiosInstance.post(URL_PATHS.CREATE_CHART, data);
        if (response?.status === 200) {
          toast.success(MESSAGE_API.createSuccessChart, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          handleClose();
          getList();
        } else {
          toast.error(MESSAGE_API.errorApi, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      }
    } catch (error) {
      toast.error(MESSAGE_API.errorApi, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>{defaultValues?.id ? (isView ? "View Chart" : "Edit Chart") : "Add New Chart"}</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid size={12}>
              <Controller
                control={control}
                name="name"
                render={({ field }) => <TextFieldCustom {...field} label="Name" fullWidth disabled={isView} />}
              />
            </Grid>

            <Grid size={12}>
              <Controller
                control={control}
                name="men"
                render={({ field }) => <TextFieldCustom {...field} label="Men" fullWidth disabled={isView} />}
              />
            </Grid>

            <Grid size={12}>
              <Controller
                control={control}
                name="women"
                render={({ field }) => <TextFieldCustom {...field} label="Women" fullWidth disabled={isView} />}
              />
            </Grid>

            <Grid size={12}>
              <Controller
                control={control}
                name="costPerResultMen"
                render={({ field }) => (
                  <TextFieldCustom {...field} label="Cost Per Result Men" fullWidth disabled={isView} />
                )}
              />
            </Grid>

            <Grid size={12}>
              <Controller
                control={control}
                name="costPerResultWomen"
                render={({ field }) => (
                  <TextFieldCustom {...field} label="Cost Per Result Women" fullWidth disabled={isView} />
                )}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {!isView && (
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          )}
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ModalAdminChart;
