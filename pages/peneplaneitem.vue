<template>
    <div class="peneplanes">
        <div class="peneplane">
            <div class="peneplane__box">
                <img :src="`${this.peneplans[0].src}`" class="peneplane__img" >
            </div>
            <div class="peneplane__text">
                <h1 class="peneplane__text-title"> {{peneplans[0].title}} </h1>
                <h2 class="peneplane__text-description">Brief description of the project, in a few lines.</h2>
                <p class="peneplane__text-prise">1 278 $/h</p>
            </div>
        </div>
     </div>   
</template>

<script>
export default {
    data() {
        return {
            peneplans: [
                {
                    id: 0,
                    picName: "Rectangle3.png",
                    src: "/_nuxt/assets/img/Rectangle3.png",
                    title: "XR-74 «Cooper»",
                    description: "Brief description of the project, in a few lines.",
                    prise: "1 278 $/h"

                }
            ]
        }
    },
    
    methods: {  

    getImgUrl(pic) {
        return require('../assets/img' + pic);
    }
},
}


</script>

<style lang="scss">

.peneplanes {
    .peneplane {
        height: 164px;
        width: 373px;
        background-color:#FCFCFC;
        border-radius: 32px;
        margin: 16px;
        display: flex;
        // justify-content: space-around;
        justify-content: stretch;;

        .peneplane__img {
            height: 88px;
            margin: 24px;
            border-radius: 24px;
        }
        .peneplane__text {
            padding: 24px;
            padding-left: 0px;
            
            .peneplane__text-title {
                font-family: 1;
                font-size: 16px;
                line-height: 14px;
                color: #012345;

            }
            .peneplane__text-description {
                width: 186px;
                font-family: 2;
                font-size: 12px;
                color: #677B8F;

            }
            .peneplane__text-prise {
                font-family: 1;
                font-size: 14px;
                line-height: 148%;
                color: #F84AB3;

            }

        }

    }

}
</style>