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
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";
import dayjs from "dayjs";
import TextFieldCustom from "@/components/TextFieldCustom";
import { DatePicker } from "@mui/x-date-pickers";
import SelectCustom from "@/components/SelectCustom";
import moment from "moment";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const ModalAdminAdSets = (props: any) => {
  const { handleSubmit, control, setValue, watch } = useForm<any>({
    defaultValues: props?.defaultValues ?? {
      campaign_id: "",
      status: false,
      adSet: "",
      deliveryStatus: "",
      deliveryDescription: "",
      bidStrategyCost: "",
      bidStrategyDescription: "",
      lastSignificantEdit: null,
      budgetCost: "",
      budgetDescription: "",
      attributionSetting: "",
      resultsCost: "",
      resultsDescription: "",
      reach: "",
      impressions: "",
      costPerResultCost: "",
      costPerResultDescription: "",
      amountSpent: "",
      endsOngoing: false,
      endsDate: null,
      scheduleFrom: null,
      scheduleTo: null,
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: any) => {
    try {
      const lastSignificantEdit = data?.lastSignificantEdit
        ? moment(new Date(data?.lastSignificantEdit)).format("YYYY/MM/DD")
        : null;
      const scheduleFrom = data?.scheduleFrom ? moment(new Date(data?.scheduleFrom)).format("YYYY/MM/DD") : null;
      const scheduleTo = data?.scheduleTo ? moment(new Date(data?.scheduleTo)).format("YYYY/MM/DD") : null;
      const endsDate = data?.endsDate ? moment(new Date(data?.endsDate)).format("YYYY/MM/DD") : null;
      const response: any = props?.defaultValues
        ? await axiosInstance.put(URL_PATHS.UPDATE_AD_SET.replace(":id", props?.defaultValues?.id), {
            ...data,
            endsDate,
            lastSignificantEdit,
            scheduleFrom,
            scheduleTo,
          })
        : await axiosInstance.post(URL_PATHS.CREATE_AD_SET, {
            ...data,
            endsDate,
            lastSignificantEdit,
            scheduleFrom,
            scheduleTo,
          });
      if (response?.status === 200) {
        props.getList();
        toast.success(props?.defaultValues ? MESSAGE_API.updateSuccessAdSets : MESSAGE_API.createSuccessAdSets, {
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
    }
  };

  console.log("props?.dataCampaigns", props?.dataCampaigns);

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
                name="campaign_id"
                render={({ field: { onChange, value } }) => (
                  <SelectCustom
                    value={value ?? ""}
                    onChange={onChange}
                    name="Business"
                    options={props?.dataCampaigns?.map((item: any) => ({
                      value: item?.id,
                      label: item?.campaign,
                    }))}
                  />
                )}
              />
            </Grid>
            <Grid size={1}></Grid>
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
          </Grid>

          <Grid container spacing={2} style={{ marginTop: 15 }}>
            <Grid size={5.5}>
              <Controller
                control={control}
                name="adSet"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextFieldCustom
                    disabled={props?.isView}
                    label="Ad Set"
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
          </Grid>

          <Grid container spacing={2} style={{ marginTop: 15 }}>
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
            <Grid size={1}></Grid>
            <Grid size={5.5}>
              <Controller
                control={control}
                name="bidStrategyCost"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextFieldCustom
                    disabled={props?.isView}
                    label="Bid Strategy Cost"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    fullWidth
                  />
                )}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{ marginTop: 15 }}>
            <Grid size={5.5}>
              <Controller
                control={control}
                name="bidStrategyDescription"
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <p style={{ marginTop: "18px" }}></p>
                    <TextFieldCustom
                      disabled={props?.isView}
                      label="Bid Strategy Description"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      fullWidth
                    />
                  </>
                )}
              />
            </Grid>
            <Grid size={1}></Grid>
            <Grid size={5.5}>
              <Controller
                control={control}
                name="lastSignificantEdit"
                render={({ field: { onChange, value } }) => (
                  <>
                    <p>Last Significant Edit</p>
                    <DatePicker
                      value={value ?? null}
                      onChange={onChange}
                      slots={{ textField: TextFieldCustom }}
                      format="DD/MM/YYYY"
                    />
                  </>
                )}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{ marginTop: 15 }}>
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

          <Grid container spacing={2} style={{ marginTop: 15 }}>
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

          <Grid container spacing={2} style={{ marginTop: 15 }}>
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

          <Grid container spacing={2} style={{ marginTop: 15 }}>
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
          </Grid>

          <Grid container spacing={2} style={{ marginTop: 15 }}>
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

          <Grid container spacing={2} style={{ marginTop: 15 }}>
            <Grid size={5.5}>
              <Controller
                control={control}
                name="scheduleFrom"
                render={({ field: { onChange, value } }) => (
                  <>
                    <p>Schedule From</p>
                    <DatePicker
                      value={value ?? null}
                      onChange={onChange}
                      slots={{ textField: TextFieldCustom }}
                      format="DD/MM/YYYY"
                    />
                  </>
                )}
              />
            </Grid>
            <Grid size={1}></Grid>
            <Grid size={5.5}>
              <Controller
                control={control}
                name="scheduleTo"
                render={({ field: { onChange, value } }) => (
                  <>
                    <p>Schedule To</p>
                    <DatePicker
                      value={value ?? null}
                      onChange={onChange}
                      slots={{ textField: TextFieldCustom }}
                      format="DD/MM/YYYY"
                    />
                  </>
                )}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{ marginTop: 15 }}>
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

export default ModalAdminAdSets;
