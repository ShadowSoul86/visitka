import axios from "axios";

const useAxios = async (url: string, params: any, method: string) => {
  try {
    const response = await axios({
      url,
      method,
      params,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json"
      },
    }).catch(function (error: any) {
      if (error.response) {
        if (error.response.data.massage) {
          return error.response;
        }
      }
    });
    return response;
  } catch (e: any) {
    console.log(e);
  }
};

export default useAxios;
