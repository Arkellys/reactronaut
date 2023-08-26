import { useQuery } from "@tanstack/react-query";

import { METHODS } from "@config/constants";
import api from "@api";

const useGet = (endpoint, id) => {
  const fetchEndpoint = () => (
    api[endpoint][METHODS.GET](id)
      .then(response => response.json())
      .then(data => data)
  )

  return useQuery({ queryKey: [endpoint, id], queryFn: fetchEndpoint });
};

export default useGet;