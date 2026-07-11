import Store from "./store";

export const LoadingState = {
  LOADING: 0,
  LOADED: 1,
  NOT_LOADED: 2,
  ERROR: 3,
};

type IpDataState = {
  ipAddress: string;
  coordinates: {
    lat: string;
    long: string;
  };
  timeZone: string;
  isp: string;
  location: string;
  loadingState: number;
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
  loadingState: LoadingState.NOT_LOADED,
});
