import React from "react";
import axios from "axios";
import { UseGetDataOptions } from './types';
import { NO_DATA_ERROR, getCharacterError } from "../constants/errors";

export const useGetData = <T>(url: string, options: UseGetDataOptions) => {
    const [fetchedData, setFetchedData] = React.useState<T | undefined>(undefined);
    const [error, setError] = React.useState<string | undefined>(undefined);
    const { params, fetchLimiterText, minFetchLengthLimit } = options;
    const paramsString = JSON.stringify(params);
    React.useEffect(() => {
      const parameters = JSON.parse(paramsString);
          const fetchData = async () => {
            if (fetchLimiterText.length < minFetchLengthLimit) {
                setError(getCharacterError(3));
                setFetchedData(undefined);
                return;
            }
            else setError(undefined);
            try {
                const data: T = await axios.get(url, { params: parameters });
                setFetchedData(data);
            } catch (e) {
                setError(NO_DATA_ERROR);
            }
          }
          fetchData();    
      }, [fetchLimiterText.length, minFetchLengthLimit, paramsString, url]);
      return {data: fetchedData, error};
    }