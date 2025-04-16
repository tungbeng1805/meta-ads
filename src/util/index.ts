export const getParamsId = () => {
    const { search } = window.location
    const id = search.split('=')[1]
    return id
}