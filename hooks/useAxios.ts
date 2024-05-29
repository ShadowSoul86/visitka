import axios from "axios";

const useAxios = async (url: string, params: any, method: string) => {
  try {
    const response = await axios({
      url,
      method,
      params,
      withCredentials: false,
      headers: {
        "Content-Type": "application/json"
      },
    }).catch(function (error: any) {
      if (error.message) {
        return error.message;
      }
    });
    return response;
  } catch (e: any) {
    console.log(e);
  }
};

export default useAxios;
