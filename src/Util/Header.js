const img = (path) => `/tesla-image/${path}`

export const NavData = {

    menu: [
        { id: 'vehicles', label: '차량'},
        { id: 'charging', label: '충전'},
        { id: 'discover', label: '살펴보기'},
        { id: 'shop', label: 'Shop'},
    ],
    
    icon: [
        {id: 'earth', icon:img("header-icon-1.svg")},
    ]
}