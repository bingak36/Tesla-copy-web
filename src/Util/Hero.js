const img = (path) => `/tesla-image/${path}`

export const heroData = {

    model: [
        {
        id: 'Y',
        company: 'Tesla',
        tag01: '미래를 달리는 모델Y',
        tag02: '지속 가능한 에너지로 전 세계적인 전환 가속화',
        button: '테슬라 바로 예약하기',
        lebel : '모델Y',
        src : img("model-Y.png")

        },
        {
        id: 'X',
        company: 'Tesla',
        tag01: '혁신을 품은 모델X',
        tag02: '지속 가능한 에너지로 전 세계적인 전환 가속화',
        button: '테슬라 바로 예약하기',
        lebel : '모델X',
        src : img("model-X.png")
        },
        {
        id: 'S',
        company: 'Tesla',
        tag01: '정점에 도달한 모델S',
        tag02: '지속 가능한 에너지로 전세계적인 전환 가속화',
        button: '테슬라 바로 예약하기',
        lebel : '모델S',
        src : img("model-S.png")
        }
    ]

}