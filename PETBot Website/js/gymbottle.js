var Gym_Bottle = [
    {
        img: "images/Gym Images/g6.jpg",
        details: `GYM Plastic Water Bottle Outdoor Sports Fitness`,
        currency: "Price Pk",
        price: "4200", 
    },
    {
        img: "images/Gym Images/g1.jpg",
        details: `BlenderBottle Classic V2 Shaker Bottle`,
        currency: "Price Pk",
        price: "3300", 
    },
    {
        img: "images/Gym Images/g2.jpg",
        details: `BlenderBottle SportMixer Shaker Bottle    `,
        currency: "Price Pk",
        price: "2850", 
    },
    {
        img: "images/Gym Images/g3.jpg",
        details: `Under Armour 24oz Grip Water Bottle`,
        currency: "Price Pk",
        price: "2900", 
    },{
        img: "images/Gym Images/g4.jpg",
        details: `GYM Light Weight Partable Water Bottle`,
        currency: "Price Pk",
        price: "3250", 
    },
    {
        img: "images/Gym Images/g5.jpg",
        details: `Under Armour 24oz Water Bottle, Pro Lid`,
        currency: "Price Pk",
        price: "1940", 
    },
]


for (i = 0; i < Gym_Bottle.length; i++) { document.getElementById("gym").innerHTML +=

`
 <div class="border" ;">
    <img src="${Gym_Bottle[i].img}" onclick="openFullImg(this.src)" />
    <p class="detail">
        ${Gym_Bottle[i].details}
    </p>
    <p class="currency">
        ${Gym_Bottle[i].currency}:${Gym_Bottle[i].price}/=
    </p>
    <div class="pdfdiv">
    <P>
    Detail PDF Download Here
</P>
<a class="pdf" href="pdf/PlasticBottles.pdf"><img src="images/pdf icon/PDF_file_icon.png" ></a>
</div>
    </div>
    `
}