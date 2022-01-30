<template>
    <div class="contacts">
        <div class="wrapperContHeder">
            <div class="contacts__columnInfo">
                <router-link 
                class="columnInfo__logo"
                to="/">
                    <div class="textTitle">QVARTA</div>
                </router-link>
                
                <div class="columnInfo__info">
                    <p class="info__text textNormal">{{$t('contactSubTitle')}}</p>
                    <div class="info__title textTitle">
                        {{$t('contactTitle')}}
                    </div>
                </div>
                <button 
                id="goto" 
                @click="goto('formFeedback')"
                class="box1__btn textBtn">
                    <p>{{$t('btnHeader')}}</p>
                    <div class="line"></div>
                </button>
            </div>
            <div class="contacts__conatinerContact">
                <div class="boxInfoCont__email">
                    <div class="email__title textTitleCard">E-mail</div>
                    <a herf="#" class="email__link textNormal">info@qvarta.com</a>
                </div>
                <div class="boxInfoCont__phone">
                    <div class="phone__title textTitleCard">{{$t('formContactPhone')}}</div>
                    <ul class="phone__text textNormal">
                        <li>+380 68 807 9625</li>
                        <li>+380 44 232 4696</li>
                    </ul>
                </div>
                <div class="boxInfoCont__address">
                    <div class="address__title textTitleCard">{{$t('formContactAddress')}}</div>
                    <div class="address__text textNormal">{{$t('formContactAddressText')}}</div>
                </div>
                <div class="boxInfoCont__networks">
                    <div class="network__link">
                        <a href="#" class="textNormal"> Behance</a>
                        <div class="border"></div>
                    </div>
                    <div class="network__link">
                        <a href="#" class="textNormal">Facebook</a>
                        <div class="border"></div>
                    </div>
                    <div class="network__link">
                        <a href="#" class="textNormal">Telegram</a>
                        <div class="border"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page" ref="formFeedback">
            <FormFeedback/>
        </div> 
        <div class="formContact__conatinerContact mobContac">
            <div class="conatinerContact__boxTitle">
                <div class="conatinerContact_text textNormal">{{$t('formContactTitile')}}</div>
                <div class="conatinerContact_title textTitle">{{$t('formContactText')}}</div>
            </div>
            <div class="conatinerContact__boxInfo">
                <div class="boxInfo__email">
                    <div class="email__title textTitleCard">E-mail</div>
                    <a herf="#" class="email__link textNormal">info@qvarta.com</a>
                </div>
                <div class="boxInfo__phone">
                    <div class="phone__title textTitleCard">{{$t('formContactPhone')}}</div>
                    <ul class="phone__text textNormal">
                        <li>+380 68 807 9625</li>
                        <li>+380 44 232 4696</li>
                    </ul>
                </div>
                <div class="boxInfo__address">
                    <div class="address__title textTitleCard">{{$t('formContactAddress')}}</div>
                    <div class="address__text textNormal">{{$t('formContactAddressText')}}</div>
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
        <GmapMap
        :center="{lat:50.44914612370747, lng:30.60060378286676}" 
        :zoom="15.5"
        map-type-id="terrain"
        class="contact__conatinerMap"
        :options="mapStyle"
        >          

        </GmapMap>
        
    </div>
</template>

<script>
import FormFeedback from '../components/form-feedback/form-feedback';
export default {
    name:'contacts',
     components:{
        FormFeedback
    },
    data(){
        return{
             mapStyle: {
            styles: [
            {
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#212121"
                }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#757575"
                }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                {
                    "color": "#212121"
                }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#757575"
                }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#9e9e9e"
                }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#bdbdbd"
                }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#757575"
                }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#181818"
                }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#616161"
                }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [
                {
                    "color": "#1b1b1b"
                }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                {
                    "color": "#2c2c2c"
                }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#8a8a8a"
                }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#373737"
                }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#3c3c3c"
                }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#4e4e4e"
                }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#616161"
                }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#757575"
                }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#000000"
                }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#3d3d3d"
                }
                ]
            }
            ]
           }
        }
    },
    methods:{
        goto(refName) {
            var element = this.$refs[refName];
            console.log(element);
            var top = element.offsetTop;
            window.scrollTo(0, top);
        },
    }

}
</script>
