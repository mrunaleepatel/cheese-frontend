import {baseUrl} from './base_url'

export const cheeseLoader = async () => {
    const response = await fetch(baseUrl + '/cheese')
    const cheese = await response.json();
    return cheese
}
export const cheesesLoader = async ({params}) => {
    const response = await fetch(baseUrl + '/cheeses/' + params.id)
    const cheese = await response.json();
    return cheese
}
