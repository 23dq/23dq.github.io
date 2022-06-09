let carsArray = [
 
    { name: 'Піжами', model: 'Спальний одяг', year: 2020, price: 925, color: 'S, M, L', image: 'pijama.png' , brand:'H&M' , about: 'Забарвлення в чорно-червону клітку найтрендовіше. Підготуйся до осіннього сезону та періоду свят заздалегідь',},
    { name: 'Народний одяг', model: 'Святковий одяг', year: 2018, price: 3295, color: 'XS, S, M, L', image: 'narodniy.png' , brand:'E&R' , about: 'Комплект складають: блуза, спідниця, жилет, фартух і головний убір - очіпок. Костюм український виконаний в традиційних біло-червоних тонах.',},
    { name: 'Капелюхи', model: 'Головні убори', year: 2021, price: 695, color: '56 - 60 (см)', image: 'kapeluh.jpg', brand:'Stocker' , about: "Капелюх солом'яний чоловічий Stocker це чудовий головний убір, виконаний в стилі Борсаліно, який стане незамінним у спекотні літні дні.", },
    { name: 'Туфлі чоловічі', model: 'Взуття', year: 2019, price: 2210 , color: '41', image: 'tuflya.png', brand:'Libero' , about: 'Чорні чоловічі туфлі, висота підошви 1.5 см. висота каблука 3 см.', },
    { name: 'Піджак', model: 'Верхній одяг', year: 2021, price: 2000, color: 'XL, L', image: 'pidjak.png' , brand:'H&M' , about: "Чорний/білий чоловічий піджак, п'ятдесят другого розміру",},
    { name: 'Брюки', model: 'Нижній одяг', year: 2020, price: 1100, color: 'M', image: 'bruki.jpg', brand:'VD one' , about: 'Чоловічі ділові штани із вовняної тканини з добавкою еластану. Прямий елегантний крій, середня посадка, має дві фігурні бокові кишені і дві задні. Тканина не мається і зберігає форму.', },
 
];

let application = {
    data() {
        return {
            array: carsArray,
            currentCar: carsArray[0],
            selectIndex: 0,
            priceShow: false,
        }
    },
    methods: {
        numberCar(index){
            this.selectIndex = index;
            this.currentCar = this.array[index]
        },
        showPrice(){
            this.priceShow == false ? this.priceShow = true : this.priceShow = false;
            console.log(this.priceShow);
        }
    },
}
Vue.createApp(application).mount('#container')


let hiddenDiv = document.querySelector('.hidden-menu-div');
let hiddenUl = document.querySelector('.hidden-menu-ul');
let hiddenli = document.querySelector('.hidden-menu-li');
let btnHideMenu = document.querySelector('.btn-menu');
let imgBtnHide = document.querySelector('#img-btn-hide');

btnHideMenu.onclick = ()=>{
    hiddenDiv.classList.toggle('hide-menu');
    hiddenUl.classList.toggle('hide-menu');

    if (hiddenDiv.classList.contains('hide-menu') == true) {
        btnHideMenu.classList.remove('fa-times');
        btnHideMenu.classList.remove('move-right');
        console.log('сховано');
    }
    else{
        btnHideMenu.classList.add('fa-times');
        btnHideMenu.classList.add('move-right');
        console.log('видно');
    }

}


let moreBtn = document.querySelector('.more-btn');
let moreDiv = document.querySelector('.more-div');

moreBtn.onclick = ()=>{
    moreDiv.style.display = 'block'
}
moreDiv.onclick = ()=>{
    moreDiv.style.display = 'none'

}





