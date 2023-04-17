import useSWR from "swr";
import axios from "axios";
import { get } from "lodash";
import { usePortalContext } from "contexts";

const useApi = (
    path: string | null = null,
    body?: any
) => {
    const baseURL = get(usePortalContext().get('config'), 'api.base');

    const client = axios.create({
        baseURL,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        withCredentials: true
    });

    const fetcher = (url: string) => client.get(url).then((res) => res.data);

    const { data, error, isValidating, mutate } = useSWR(
        { path, body },
        fetcher
    );

    return { data, error, isValidating, mutate };
};

export default useApi;
