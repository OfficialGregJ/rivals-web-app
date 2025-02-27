async function fetchData(url: string) {
    try {
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Fetch error: ', error.message);
            throw error;
        } else {
            console.error('An unexpected error occured: ', error)
            throw new Error(`An unexpected error occured: ${error}`)
        }
    }
}

export default async function dataRes(url: string) {
    try {
        const res = await fetchData(url);
        return res
    } catch (error) {
        if(error instanceof Error) {
            console.error('Failed to process data: ', error.message);
        } else {
            console.error('An unexpected error occured: ', error);
        }
    }
}