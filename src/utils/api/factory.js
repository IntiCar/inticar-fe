/* eslint-disable react-hooks/rules-of-hooks */

import { useInfiniteQuery, useMutation, useQuery } from "react-query";
import axiosMainClient from "./axiosMainClient";
import baseURL from "./baseUrl";

export function Networks(service) {
  const s = baseURL(service);
  return {
    query(endpoint, dependencies, options = {}, axiosConfigs = {}) {
      const queries = useQuery(
        dependencies,
        async () => {
          const res = await axiosMainClient(s).get(endpoint, {
            ...axiosConfigs,
          });
          return res.data.data;
        },
        {
          onError: (err) => console.log(err),
          ...options,
        }
      );

      return queries;
    },

    infiniteQuery(endpoint, dependencies, options = {}, axiosConfigs = {}) {
      const infiniteQuery = useInfiniteQuery(
        dependencies,
        async ({ pageParam = 1 }) => {
          const res = await axiosMainClient(s).get(endpoint, {
            ...axiosConfigs,
            params: { ...axiosConfigs.params, page: pageParam },
          });

          return res.data.data;
        },
        {
          getNextPageParam: (lastPage, allPages) => {
            const maxPages = lastPage.count / axiosConfigs.params.size;
            const nextPage = allPages.length + 1;
            return nextPage <= Math.ceil(maxPages) ? nextPage : undefined;
          },
          onError: (err) => alert(err),
          ...options,
        }
      );
      return infiniteQuery;
    },

    mutation(method, options = {}, outerAxiosConfigs = {}) {
      const mutation = useMutation(
        async ({ endpoint, data, axiosConfigs = {} }) => {
          const res = await axiosMainClient(s).request({
            method,
            url: endpoint,
            data,
            ...outerAxiosConfigs,
            ...axiosConfigs,
          });
          return res;
        },
        {
          onError: (err) => err,
          ...options,
        }
      );

      return mutation;
    },
  };
}
