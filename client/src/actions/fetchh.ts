import {$host} from './$host'

export const fetchh = async () => {
    const { data } = await $host.get("api/");

    return data[data.length - 1].message.toString()
};