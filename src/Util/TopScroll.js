const img = (path) => `/tesla-image/${path}`

export const topBanner = {
    
    topBanner: {
        enabled: true,
        height: 64,
        items: [
            { id: "tb-1", text: "테슬라를 타고 어디든 다녀보세요", href: "#"},
            { id: "tb-2", text: "테슬라 소프트웨어 업데이트", href: "#"},
            { id: "tb-3", text: "이벤트 진행 중 !", href: "#"},
        ]
    },

    button : {
        src : img("btn_aside_close.png"),
    }
}
