const tips = [
    {
        tip : "소신, 강단, 강한 자기 확신",
    },
    {
        tip : "지능 지수, 공감 능력보다 중요한 건 스스로 사고하는 능력",
    },
    {
        tip : "다수가 항상 옳은 것은 아니다.",
    },
    {
        tip : "보통의 사람들은 듣고 싶은 것만 듣고, 보고 싶은 것만 보고, 믿고 싶은 것만 믿는다.", 
    },
    {
        tip : "꾸준함은 결국엔 재능을 추월한다.",
    },
];

const tip = document.querySelector("#tip span");

const todayTip = tips[Math.floor(Math.random() * tips.length)]

tip.innerText = todayTip.tip;