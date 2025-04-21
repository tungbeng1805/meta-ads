import IconClose from "@/assets/close.svg";
import SelectCustom from "@/components/SelectCustom";
import TextFieldCustom from "@/components/TextFieldCustom";
import MESSAGE_API from "@/constants/message";
import axiosInstance from "@/services/api-services";
import URL_PATHS from "@/services/url-path";
import { useLoading } from "@/stores/loadingStore";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  styled,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import { Controller, useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";

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
  const { handleSubmit, control, watch, setValue } = useForm<any>({
    defaultValues: props?.defaultValues ?? {
      amountSpent: "",
      attributionSetting: "",
      bidStrategy: "",
      budgetCost: "",
      budgetDescription: "",
      campaign: "",
      costPerResultCost: "",
      costPerResultDescription: "",
      deliveryDescription: "",
      deliveryStatus: "",
      endsDate: null,
      endsOngoing: false,
      impressions: "",
      reach: "",
      resultsCost: "",
      resultsDescription: "",
      status: false,
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: any) => {
    try {
      showLoading();
      const endsDate = data?.endsDate ? moment(new Date(data?.endsDate)).format("YYYY/MM/DD") : null;
      const item: any = props?.defaultValues
        ? await axiosInstance.put(URL_PATHS.UPDATE_CAMPAIGNS.replace(":id", props?.defaultValues?.id), {
            ...data,
            endsDate,
          })
        : await axiosInstance.post(URL_PATHS.CREATE_CAMPAIGNS, {
            ...data,
            endsDate,
          });
      if (item?.status === 200) {
        await props.getList();
        toast.success(props?.defaultValues ? MESSAGE_API.updateSuccessCampaigns : MESSAGE_API.createSuccessCampaigns, {
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
            <Grid size={12}>
              <Controller
                control={control}
                name="business_id"
                render={({ field: { onChange, value } }) => (
                  <SelectCustom
                    value={value ?? ""}
                    onChange={onChange}
                    name="Business"
                    options={props?.dataListBusiness?.map((item: any) => ({
                      value: item?.id,
                      label: item?.accountName,
                    }))}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} paddingTop={2}>
            <Grid size={5.5}>
              <Controller
                control={control}
                name="status"
                render={({ field: { onChange, value } }) => (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>On/Off</p>
                    <Checkbox onChange={onChange} value={value} defaultChecked={value} />
                  </div>
                )}
              />
            </Grid>
            <Grid size={1}></Grid>
            <Grid size={5.5}>
              <Controller
                control={control}
                name="campaign"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextFieldCustom
                    disabled={props?.isView}
                    label="Campaign"
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
                name="deliveryStatus"
                render={({ field: { onChange, value } }) => (
                  <SelectCustom
                    value={value ?? ""}
                    onChange={onChange}
                    name="Delivery Status"
                    options={[
                      { value: "Active", label: "Active" },
                      { value: "Off", label: "Off" },
                    ]}
                  />
                )}
              />
            </Grid>
            <Grid size={1}></Grid>
            <Grid size={5.5}>
              <Controller
                control={control}
                name="deliveryDescription"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextFieldCustom
                    disabled={props?.isView}
                    label="Delivery Description"
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
                name="budgetCost"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextFieldCustom
                    disabled={props?.isView}
                    label="Budget Cost"
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
                name="budgetDescription"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextFieldCustom
                    disabled={props?.isView}
                    label="Budget Description"
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
                name="attributionSetting"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextFieldCustom
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
            <Grid size={1}></Grid>
            <Grid size={5.5}>
              <Controller
                control={control}
                name="reach"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextFieldCustom
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
                name="resultsCost"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextFieldCustom
                    disabled={props?.isView}
                    label="Results Cost"
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
                name="resultsDescription"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextFieldCustom
                    disabled={props?.isView}
                    label="Results Description"
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
                  <TextFieldCustom
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
                name="amountSpent"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextFieldCustom
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
          </Grid>
          <Grid container spacing={2} paddingTop={2}>
            <Grid size={5.5}>
              <Controller
                control={control}
                name="costPerResultCost"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextFieldCustom
                    disabled={props?.isView}
                    label="Cost Per Result Cost"
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
                name="costPerResultDescription"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextFieldCustom
                    disabled={props?.isView}
                    label="Cost Per Result Description"
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
            <Grid size={12}>
              <Controller
                control={control}
                name="endsOngoing"
                render={({ field: { onChange, value } }) => (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>Ends OnGoing</p>
                    <Checkbox
                      onChange={(e) => {
                        onChange(e);
                        setValue("endsDate", null);
                      }}
                      value={value}
                      defaultChecked={value}
                    />
                  </div>
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} paddingTop={2}>
            <Grid size={5.5}>
              <Controller
                control={control}
                name="endsDate"
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    value={value ?? null}
                    onChange={onChange}
                    slots={{ textField: TextFieldCustom }}
                    disabled={!!watch("endsOngoing")}
                    format="DD/MM/YYYY"
                  />
                )}
              />
            </Grid>
            <Grid size={1}></Grid>
            <Grid size={5.5}>
              <Controller
                control={control}
                name="bidStrategy"
                render={({ field: { onChange, value } }) => (
                  <SelectCustom
                    value={value ?? ""}
                    onChange={onChange}
                    name="Bid Strategy"
                    options={[
                      { value: "Highest volume", label: "Highest volume" },
                      { value: "Using ad set bid strategy", label: "Using ad set bid strategy" },
                    ]}
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
