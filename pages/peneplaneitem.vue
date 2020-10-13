<template>
    <div class="peneplanes">

        <div class="peneplane"  v-for="pepelane in pepelanes " :key="pepelane.id">
            <div class="peneplane__box" >
                <img :src="`/_nuxt/assets/img/${pepelane.src}.png`" class="peneplane__img" >
            </div>

            <div
            class="peneplane__text" >
                <h1 class="peneplane__text-title"> {{ pepelane.title }} </h1>
                <h2 class="peneplane__text-description"> {{ pepelane.description }} </h2>
                <p class="peneplane__text-prise"> {{ pepelane.prise }} </p> 
            </div>
        </div>
     </div>   
</template>

<script>
export default {
    // el: '#example-1',
    data() {
        return {
            pepelanes: [
                {
                    id: 0,
                    src: "Tema",
                    title: "XR-74 «Cooper»",
                    description: "Brief description of the project, in a few lines.",
                    prise: "1 278 $/h"
                },
                {
                    id: 1,
                    src: "Plane",
                    title: "XR-74 «Coopeееr»",
                    description: "Brief description of the project, in a few lines.",
                    prise: "145 278 $/h"
                }
            ]
        }
    },
    
    methods: {  

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