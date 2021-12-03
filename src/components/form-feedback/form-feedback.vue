<template>
    <div class="form-feedback">
        <div class="form-feedback__boxTitle">
            <div class="boxTitle__tetx textNormal">обсудим ваши проект</div>
            <div class="boxTitle__title textTitle">Свяжитесь с нами</div>
        </div>
        <form action="" class="form-feedback__boxForm">
            <div class="boxForm__inputbox textNormal">
                <input type="text" name="nameUser" placeholder="Имя" id="">
                <input type="text" name="nameCompani" placeholder="Компания" id="">
                <input type="tel" name="numberPhone" placeholder="Телефон" id="">
                <input type="email" name="email" placeholder="E-mail" id="">
                <input type="text" name="details" placeholder="Детали" id="">
            </div>
            <div class="boxBtn">
                <button class="boxForm__btn textBtn" type="submit">Отправить</button> 
            </div>
              
        </form>
    </div>
</template>

<script>
export default {
    name: 'form-contact',
    data(){
        return{

        }
    },
}
</script>