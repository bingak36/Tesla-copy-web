const img = (path) => `/tesla-image/${path}`

export const NavData = {

    logo: {
        src: img('Logo.svg'),
        alt: 'TESLA',
        href: '/'
    },

    menu: [
        { id: 'vehicles', label: '차량'},
        { id: 'charging', label: '충전'},
        { id: 'discover', label: '살펴보기'},
        { id: 'shop', label: 'Shop'},
    ],
    
    icon: [
        {id: 'earth', icon:img("header-icon-1.svg")},
        {id: 'search', icon:img("header-icon-2.svg")},
        {id: 'acount', icon:img("header-icon-3.svg")},
        {id: 'cart', icon:img("header-icon-4.svg")},
    ]
}