/** @type {import('./$types').LayoutLoad} */
export async function load() {
    // TODO: fetch the model
    return {
        model: {
            title: 'Mocked Model Name',
            routes: [
                {
                    name: 'Overview',
                    icon: 'overview',
                    tag: '',
                    link: '/models/mocked-model-name',
                },
                {
                    name: 'Console',
                    icon: 'terminal',
                    tag: '',
                    link: '/models/mocked-model-name/console',
                },
                {
                    name: 'Issues',
                    icon: 'issue',
                    tag: '2k',
                    link: '/models/mocked-model-name/issue',
                    
                },
                {
                    name: 'Settings',
                    icon: 'setting',
                    tag: '',
                    link: '/models/mocked-model-name/setting',
                },
            ]
        }
    }
}
