import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import api from "@api/index";
import { METHODS } from "@config/constants";
import { getPath } from "@config/router";

const useDelete = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ endpoint, id }) => api[endpoint][METHODS.DELETE](id),
    onSuccess: () => navigate(getPath.solarSystem())
  });
};

export default useDelete;