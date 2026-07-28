const images = [
    "https://stimg.cardekho.com/images/carexteriorimages/630x420/Jaguar/F-Pace/10644/1755774688332/front-left-side-47.jpg?impolicy=resize&imwidth=480",
    "https://hips.hearstapps.com/hmg-prod/images/23cc1afc-c03c-4f77-868f-f44144d4167c.jpg?w=768&width=768&q=75&format=webp",
    "https://static0.hotcarsimages.com/wordpress/wp-content/uploads/2021/09/Mercedes-S-Class-Dynamic-3.jpg?q=50&fit=crop&w=825&dpr=1.5",
    "https://www.topgear.com/sites/default/files/news-listicle/image/2021/12/18.%20Koenigsegg%20Jesko.jpg?w=424&h=239",
    "https://media.gq-magazine.co.uk/photos/5fdcb8470d9a429c2d245628/16:9/w_2560%2Cc_limit/2021CARS_AUDIEtron.jpg",
    "https://cdn-s3.autocarindia.com/legacy/cdni/ExtraImages/20240306025230_BMW%20XM%20Web%20Resized%20and%20Watermarked.008.jpeg?w=728&q=75&fm=auto",
    "https://cimg3.ibsrv.net/ibimg/hgm/1920x1080-1/100/964/bugatti-tourbillon-with-quipe-pur-sang-package_100964115.jpg",
    "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2025/04/1-continental-gt.jpg?q=50&fit=crop&w=720&h=480&dpr=1.5",
    "https://www.topgearmag.in/uploads/News/Image/1736316460-be%206%20be%206e%20mahindra%20adas%20suv%20electric%20suv%20india.jpg",
    "https://www.topgear.com/sites/default/files/news-listicle/image/2023/09/LEAD.jpg",
];

let image1 = document.getElementById("img");
let Previousbutton = document.getElementById("PreviousButton");
let Nextbutton = document.getElementById("NextButton");

let index = 0;

function mainProgram() {
    image1.src = images[index];
}

mainProgram();

function previousImage() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    mainProgram();
}

function nextImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    mainProgram();
}

setInterval(()=>{
    nextImage()
},2000)