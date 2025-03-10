import {$host} from './$host'

export const create = async (inpt:any) => {
    const { data } = await $host.post("api/", inpt);
    return data;
};