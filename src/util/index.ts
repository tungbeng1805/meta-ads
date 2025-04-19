export const getParamsId = () => {
    const { search } = window.location

    const params = new URLSearchParams(search);
    
    const obj: any = {};

    for (const [key, value] of params.entries()) {
        obj[key] = isNaN(value as any) ? value : Number(value);
    }
    return obj
}

export const STATUS = {
    ACTIVE: "Active",
    IN_ACTIVE: "InActive"
}