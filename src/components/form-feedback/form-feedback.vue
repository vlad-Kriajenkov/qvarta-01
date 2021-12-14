<template>
    <div class="form-feedback">
        <div class="form-feedback__boxTitle">
            <div class="boxTitle__tetx textNormal">{{$t('formFeedbackTitle')}}</div>
            <div class="boxTitle__title textTitle">{{$t('formFeedbackText')}}</div>
        </div>
        <form action="" class="form-feedback__boxForm">
            <div class="boxForm__inputbox textNormal">
                <input type="text" name="nameUser" :placeholder="$t('PlaceholderUser')" id="" i18n-placeholder>
                <input type="text" name="nameCompani" :placeholder="$t('PlaceholderCompani')" id="">
                <input type="tel" name="numberPhone" :placeholder="$t('PlaceholderPhone')" id="">
                <input type="email" name="email" placeholder="E-mail" id="">
                <input type="text" name="details" :placeholder="$t('PlaceholderDetails')" id="">
            </div>
            <div class="boxBtn">
                <button class="boxForm__btn textBtn" type="submit">{{$t('btnSend')}}</button> 
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