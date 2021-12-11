<template>
    <div class="services1">
        <div class="services1__header">
            <div class="header__servicesColum" >
                <img src="../assets/img/Industrial-design/img-Header.svg" alt="">
            </div>
            <div class="header__infoColum">
                <div class="infoColum__text textNormal">наши услуги</div>
                <div v-bind="headerTitle"
                 class="infoColum__title textTitle">{{headerTitle}}</div>
                <button class="box1__btn textBtn">
                    <p>Обсудить ваш проект</p>
                    <div class="line"></div>
                </button>
            </div>
        </div>
        <div class="services1__productInfo">
            <div class="productInfo__namePage textNormal">
                 Главная — Услуги <span class='textBold'> — Промышленный дизайн </span>
            </div>
            <div class="productInfo__serviceBox">
                <div class="serviceBox__infoServ">
                    <div 
                    v-for="industrial in serviceBox"
                    :key="industrial.id"
                    class="infoServ__boxIS">
                        <div class="boxIS__title textTitle">{{industrial.title}}</div>
                        <div class="boxIS__text textNormal">{{industrial.texr}}</div>
                    </div>
                </div>
                <div class="serviceBox__bgImg">
                    <img src="../assets/img/Industrial-design/serviceBox/img-Industrial.svg" alt="">
                </div>
            </div>
            <div class="productInfo__examples">
                <div class="examples__nameBox">
                    <div class="nameBox__text textNormal">реализации</div>
                    <div class="nameBox__title textTitle">Примеры работ</div>
                </div>
                <div class="examples__boxProduct">
                    <div 
                        v-for="product in products"
                        :key="product.id"
                        class="boxProduct">
                        <img  :src="require(`@/assets/${product.img}`)" alt="" class="boxProduct__img ">
                        <div  class="boxProduct__title textTitleCard">{{product.title}}</div>
                        <div  class="boxProduct__text textNormal">{{product.text}}</div>
                    </div>
                </div>
            </div>
            <div class="productInfo__stagesDev">
                <div class="stagesDev__nameBox">
                     <div class="nameBox__text textNormal">Промышленный дизайн</div>
                    <div class="nameBox__title textTitle">Этапы разработки</div>
                </div>
                <div class="stagesDev__stagesBox">
                    <div class="stagesBox__">
                        <span class="">Составление ТЗ</span>  
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name:'Services1',
    data(){
        return{
            headerTitle: "Промышленный дизайн",
            serviceBox:[
                {
                    "title": "Услуга промышленного дизайна",
                    "texr": "Промышленный или как его еще называют индустриальный или предметный дизайн — отрасль дизайна, которая занимается созданием вещей и предметов. Промышленный дизайн определяет не только внешний вид предметов. Главная задача промышленного дизайнера — качественно воплотить идею и сделать предмет удобным для использования, качественным долговечным, и конечно, эстетически привлекательным."
                },
                {
                    "title": "Цена",
                    "texr": "от 2000$"
                },
                {
                    "title": "Срок",
                    "texr": "от 3-х недель"
                },
                {
                    "title": "Результат",
                    "texr": "4-5 вариантов дизайна вашего прибора. Под словом дизайн мы подразумеваем внешний вид (внешняя геометрия) вашего прибора или устройства"
                }
            ],
            products:[
                {
                    "id": 1,
                    "img":"img/Industrial-design/product/img-1.svg",
                    "title": "LUXIE VASE LAMP",
                    "text":"Разработка дизайна ночной лампы"
                },
                {
                    "id": 2,
                    "img":"img/Industrial-design/product/img-2.svg",
                    "title": "SMART ASHRTAY",
                    "text": "Разработка дизайна, конструкции и функциональной части устройства"
                },
                {
                    "id": 3,
                   "img":"img/Industrial-design/product/img-3.svg",
                    "title": "BAMBOO FOOD STEAMER",
                    "text": "Разработка концепт-дизайна пароварки"
                },
                {
                    "id": 4,
                    "img":"img/Industrial-design/product/img-4.svg",
                    "title": "UV IRRADIATOR",
                    "text": "Разработка дизайна, конструкции и функциональной части устройства"
                },
            
               
                
            ]
        }
    },
}

</script>