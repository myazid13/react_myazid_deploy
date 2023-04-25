import { useCallback, useState } from "react";
import { api } from "../api";
import { message } from "antd";

export const useGetUsers = () => {
  const [isLoading, setIsloading] = useState(true);
  const [data, setData] = useState();

  const getData = useCallback(async () => {
    try {
      const res = await api.getUsers();
      setData(res.data);
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsloading(false);
      message.open({
        type: "success",
        content: `Berhasil fetch data!`,
      });
    }
  }, []);

  return [isLoading, data, getData];
};

//Read Data

export const useGetBiodata = () => {
  const [isLoading, setIsloading] = useState(true);
  const [data, setData] = useState();

  const getData = useCallback(async () => {
    try {
      const res = await api.getBiodata();
      setData(res?.data);
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsloading(false);
    }
  }, []);
  return [isLoading, data, getData];
};
