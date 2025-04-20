import SelectCustom from "@/components/SelectCustom";
import TextFieldCustom from "@/components/TextFieldCustom";
import { Button, Grid, IconButton } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import IconClose from "@/assets/close.svg";
import axiosInstance from "@/services/api-services";
import URL_PATHS from "@/services/url-path";
import { Bounce, toast } from "react-toastify";
import MESSAGE_API from "@/constants/message";
import moment from "moment";

const AdminFormFace: React.FC = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      namePage: "",
      locations: "",
      age: "",
      gender: "",
      budget: "",
      idPost: "",
      datePost: "",
      Description: "",
      image: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [imageUrl, setImageUrl] = useState<string>("");

  const onSubmit = async (data: any) => {
    if (imageUrl != data?.image && !!data?.image) {
      try {
        const formData = new FormData();
        formData.append("image", data.image);
        const uploadResponse = await axiosInstance.post(URL_PATHS.UPLOAD_IMAGE, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        data.image = uploadResponse?.data?.path;
      } catch (error) {}
    }
    try {
      delete data?.id;
      const response: any = await axiosInstance.put(URL_PATHS.UPDATE_FACE, {
        ...data,
        datePost: data?.datePost ? moment(data?.datePost).format("YYYY-MM-DD") : null,
      });
      if (response?.status === 200) {
        toast.success(MESSAGE_API.updateSuccessFormFace, {
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
    } catch (error) {}
  };

  const getDetailPost = async () => {
    try {
      const response = await axiosInstance.get(URL_PATHS.GET_DETAIL_FACE);
      if (response?.status === 200) {
        reset(response?.data);
        setImageUrl(response?.data?.image ? import.meta.env.VITE_BASE_FOLDER + response?.data?.image : "");
      }
    } catch (error) {}
  };

  useEffect(() => {
    getDetailPost();
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "20px" }}>
      <h1>Admin Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Controller
              control={control}
              name="image"
              render={({ field: { onChange, value } }) => (
                <div style={{ marginBottom: 20 }}>
                  <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="image-upload"
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        onChange(file);
                      }
                    }}
                  />
                  <label htmlFor="image-upload">
                    <Button variant="contained" component="span">
                      Upload Image
                    </Button>
                  </label>
                  {value && (
                    <div style={{ marginTop: 15, height: "100px", width: "100px", position: "relative" }}>
                      <img
                        src={
                          typeof value === "string"
                            ? import.meta.env.VITE_BASE_FOLDER + value
                            : URL.createObjectURL(value)
                        }
                        alt="Preview"
                        style={{ height: "100px", width: "100px", objectFit: "cover" }}
                      />
                      <IconButton
                        onClick={() => onChange(null)}
                        sx={{
                          position: "absolute",
                          top: -8,
                          right: -8,
                          width: "10px",
                          height: "10px",
                          backgroundColor: "#fff",
                          "&:hover": {
                            backgroundColor: "#f5f5f5",
                          },
                        }}
                      >
                        <img src={IconClose} alt="remove" style={{ width: 16, height: 16 }} />
                      </IconButton>
                    </div>
                  )}
                </div>
              )}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Controller
              control={control}
              name="namePage"
              render={({ field }) => <TextFieldCustom {...field} label="Page Name" fullWidth />}
            />
          </Grid>

          <Grid size={12}>
            <Controller
              control={control}
              name="locations"
              render={({ field }) => <TextFieldCustom {...field} label="Locations" fullWidth />}
            />
          </Grid>

          <Grid size={12}>
            <Controller
              control={control}
              name="age"
              render={({ field: { onChange, value } }) => (
                <SelectCustom
                  value={value ?? ""}
                  onChange={onChange}
                  name="Age"
                  options={[
                    { value: "18-20", label: "18-20" },
                    { value: "21-25", label: "21-25" },
                    { value: "26-30", label: "26-30" },
                    { value: "31-35", label: "31-35" },
                    { value: "36+", label: "36+" },
                  ]}
                />
              )}
            />
          </Grid>

          <Grid size={12}>
            <Controller
              control={control}
              name="gender"
              render={({ field: { onChange, value } }) => (
                <SelectCustom
                  value={value ?? ""}
                  onChange={onChange}
                  name="Gender"
                  options={[
                    { value: "Men", label: "Men" },
                    { value: "Women", label: "Women" },
                    { value: "All", label: "All" },
                  ]}
                />
              )}
            />
          </Grid>

          <Grid size={12}>
            <Controller
              control={control}
              name="budget"
              render={({ field }) => <TextFieldCustom {...field} label="Budget" fullWidth type="number" />}
            />
          </Grid>

          <Grid size={12}>
            <Controller
              control={control}
              name="idPost"
              render={({ field }) => <TextFieldCustom {...field} label="Post ID" fullWidth />}
            />
          </Grid>

          <Grid size={12}>
            <Controller
              control={control}
              name="datePost"
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  label="Post Date"
                  value={value ? dayjs(value) : null}
                  onChange={(newValue) => onChange(newValue?.toISOString())}
                  slots={{
                    textField: TextFieldCustom,
                  }}
                />
              )}
            />
          </Grid>

          <Grid size={12}>
            <Controller
              control={control}
              name="Description"
              render={({ field }) => <TextFieldCustom {...field} label="Description" fullWidth multiline rows={6} />}
            />
          </Grid>

          <Grid size={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AdminFormFace;
