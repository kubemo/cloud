/** @type {import('./$types').LayoutServerLoad} */
export async function load({ request }) {
    return {
        user: {
            name: "mivinci"
        }
    }
}