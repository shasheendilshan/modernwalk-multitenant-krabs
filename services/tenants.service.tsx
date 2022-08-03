import { get } from "./api.services";
import { IResponse } from "@interfaces/global/global.interface";

export const getTenantDetails = async (name: string) => {
  try {
    const TenantDetails = await get("/tenants");

    const tenant = TenantDetails?.data?.filter((t: any) => t.name === name);

    const response: IResponse = {
      data: tenant,
      error: null,
      status: TenantDetails.status,
    };
    return response;
  } catch (error: any) {
    const response: IResponse = {
      data: [],
      error: error,
    };
    return response;
  }
};
