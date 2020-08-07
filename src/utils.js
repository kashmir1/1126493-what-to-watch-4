import moment from "moment";

export const formatRuntime = (runtime) => {
  const hours = moment.duration(runtime, `minutes`).hours();
  const minutes = moment.duration(runtime, `minutes`).minutes();
  return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
};

