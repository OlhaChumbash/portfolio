import { readBody } from 'h3'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    return await $fetch('https://intita.com/api/v1/entrant', {
        method: 'POST',
        body
    })
})
