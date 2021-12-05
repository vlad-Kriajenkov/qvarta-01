<template>
    <div class="formContact">
        <GmapMap
            :center="{lat:50.44914612370747, lng:30.60060378286676}" 
            :zoom="15.5"
            map-type-id="terrain"
            
            class="formContact__conatinerMap"
        >            
        </GmapMap>
        <div class="formContact__conatinerContact">
            <div class="conatinerContact__boxTitle">
                <div class="conatinerContact_text textNormal">связаться</div>
                <div class="conatinerContact_title textTitle">Контакты</div>
            </div>
            <div class="conatinerContact__boxInfo">
                <div class="boxInfo__email">
                    <div class="email__title textTitleCard">E-mail</div>
                    <a herf="#" class="email__link textNormal">info@qvarta.com</a>
                </div>
                <div class="boxInfo__phone">
                    <div class="phone__title textTitleCard">Телефон</div>
                    <ul class="phone__text textNormal">
                        <li>+380 68 807 9625</li>
                        <li>+380 44 232 4696</li>
                    </ul>
                </div>
                <div class="boxInfo__address">
                    <div class="address__title textTitleCard">Адрес</div>
                    <div class="address__text textNormal">02002, Киев, ул. Евгения Сверстюка 11а, оф. 818</div>
                </div>
                <hr>
                <div class="boxInfo__networks">
                    <div class="networks__link">
                        <a href="#" class="textNormal"> Behance</a>
                        <div class="border"></div>
                    </div>
                    <div class="networks__link">
                        <a href="#" class="textNormal">Facebook</a>
                        <div class="border"></div>
                    </div>
                   <div class="networks__link">
                       <a href="#" class="textNormal">Telegram</a>
                       <div class="border"></div>
                   </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'form-contact',
}
</script>