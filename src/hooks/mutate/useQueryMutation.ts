import { publicInstance, privateInstance } from "@/configs/axiosConfig";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

interface MutateProps {
  isPublic?: boolean;
  url: string;
  config?: any;
  isUpdateMethod?: boolean;
}
export const useQueryMutation = ({
  isPublic = false,
  url,
  config = {},
  isUpdateMethod = false,
}: MutateProps) => {
  const [backendErrors, setBackendErrors] = useState<any>(null);
  const postData = async (body: any) => {
    if (isUpdateMethod) {
      // on update put method added in the body
      body = {
        ...body,
        _method: "PUT",
      };
    }
    return (isPublic ? publicInstance : privateInstance)
      .post(url, body, config)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  const { mutate, isError, isPending } = useMutation({
    mutationFn: postData,
    onSuccess: (res) => {
      setBackendErrors(null);
    },
    onError: (err: any) => {
      let message = "";
      switch (err?.response?.status) {
        case 422:
          let validationError = err?.response?.data?.errors;
          setBackendErrors({
            ...backendErrors,
            ...validationError,
          });
          break;
        case 500:
          message = err?.response?.data?.message;
          break;
        case 417:
          message = err?.response?.data?.message;
        case 404:
          message = err?.response?.data?.message;
          break;
        default:
          message = err?.response?.data?.message;
          break;
      }

      message &&
        toast.error(message, {
          position: "top-right",
          iconTheme: {
            primary: "#FF5733",
            secondary: "#fff",
          },
        });
    },
  });

  return {
    mutate,
    isError,
    isLoading: isPending,
    backendErrors,
  };
};
