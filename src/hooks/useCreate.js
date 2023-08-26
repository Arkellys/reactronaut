import { useMutation } from "@tanstack/react-query";

import api from "@api";
import { METHODS } from "@config/constants";

const useCreate = () => (
  useMutation({
    mutationFn: ({ endpoint, data }) => (
      api[endpoint][METHODS.POST](data)
        .then(response => response.json())
        .then(({ id }) => ({ id }))
    )
  })
)

export default useCreate;