import Store from "./store";

type IpDataState = {
  ipAddress: string;
  coordinates: {
    lat: string;
    long: string;
  };
  timeZone: string;
  isp: string;
  location: string;
};

export const store = new Store<IpDataState>({
  ipAddress: "",
  coordinates: {
    lat: "",
    long: "",
  },
  timeZone: "",
  isp: "",
  location: "",
});
