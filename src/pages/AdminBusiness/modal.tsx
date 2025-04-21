import MESSAGE_API from "@/constants/message";
import axiosInstance from "@/services/api-services";
import URL_PATHS from "@/services/url-path";
import IconClose from "@/assets/close.svg";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  styled,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";
import { useLoading } from "@/stores/loadingStore";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const ModalAdminBusiness = (props: any) => {
  const { showLoading, hideLoading } = useLoading();
  const { handleSubmit, control } = useForm<any>({
    defaultValues: props?.defaultValues ?? {
      accountName: "",
      reach: "",
      impressions: "",
      frequency: "",
      amountSpent: "",
      attributionSetting: "",
      messaginConversationStarted: "",
      costPerMessagingConversationStarted: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: any) => {
    try {
      showLoading();
      const item: any = props?.defaultValues
        ? await axiosInstance.put(URL_PATHS.UPDATE_BUSINESS.replace(":id", props?.defaultValues?.id), data)
        : await axiosInstance.post(URL_PATHS.CREATE_BUSINESS, data);
      if (item?.status === 200) {
        await props.getList();
        toast.success(props?.defaultValues ? MESSAGE_API.updateSuccessBusiness : MESSAGE_API.createSuccessBusiness, {
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
        props.handleClose();
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
    } finally {
      hideLoading();
    }
  };
  return (
    <BootstrapDialog
      maxWidth="md"
      fullWidth
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {props?.isView ? "View" : props?.defaultValues ? "Edit" : "Add New"}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={props.handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <img
            style={{ width: "20px", height: "20px", cursor: "pointer" }}
            onClick={props.handleClose}
            src={IconClose}
            alt=""
          />
        </IconButton>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid size={5.5}>
              <Controller
                control={control}
                name="accountName"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    disabled={props?.isView}
                    label="Account Name"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid size={1}></Grid>
            <Grid size={5.5}>
              <Controller
                control={control}
                name="reach"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    disabled={props?.isView}
                    label="Reach"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    fullWidth
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} paddingTop={2}>
            <Grid size={5.5}>
              <Controller
                control={control}
                name="impressions"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    disabled={props?.isView}
                    label="Impressions"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid size={1}></Grid>
            <Grid size={5.5}>
              <Controller
                control={control}
                name="frequency"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    disabled={props?.isView}
                    label="Frequency"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    fullWidth
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} paddingTop={2}>
            <Grid size={5.5}>
              <Controller
                control={control}
                name="amountSpent"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    disabled={props?.isView}
                    label="Amount Spent"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid size={1}></Grid>
            <Grid size={5.5}>
              <Controller
                control={control}
                name="attributionSetting"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    disabled={props?.isView}
                    label="Attribution Setting"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    fullWidth
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} paddingTop={2}>
            <Grid size={5.5}>
              <Controller
                control={control}
                name="messaginConversationStarted"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    disabled={props?.isView}
                    label="Messagin Conversation Started"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid size={1}></Grid>
            <Grid size={5.5}>
              <Controller
                control={control}
                name="costPerMessagingConversationStarted"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    disabled={props?.isView}
                    label="Cost Per Messaging Conversation Started"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    fullWidth
                  />
                )}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button disabled={props?.isView} variant="contained" color="success" autoFocus type="submit">
            Save changes
          </Button>
        </DialogActions>
      </form>
    </BootstrapDialog>
  );
};

export default ModalAdminBusiness;
