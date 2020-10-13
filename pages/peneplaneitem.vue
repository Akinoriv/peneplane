<template>
    <div class="peneplanes">

        <div v-for="pepelane in pepelanes " :key="pepelane.id">

            <div class="peneplane"> 
                <div class="peneplane__box" >
                    <img :src="`/_nuxt/assets/img/${pepelane.src}.png`" class="peneplane__img" >
                </div>

                <div class="peneplane__text" >
                    <h1 class="peneplane__text-title"> {{ pepelane.title }} </h1>
                    <h2 class="peneplane__text-description"> {{ pepelane.description }} </h2>
                    <p class="peneplane__text-prise"> {{ pepelane.prise }} </p> 
                </div>
            </div> 

        </div>
     </div>   
</template>

<script>
export default {

 props: {
    pepelanes: {
      type: Array,
      default: () => []
    }
  },
    
    methods: {  

    },
}


</script>

<style lang="scss">

.peneplanes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1rem;
    // display: grid;
    // grid-template: 30% 30% 30% / 30% 30% 30%;
    // justify-content: space-around;
    // align-content: space-between;
    .peneplane {
        // height: 164px;
        // width: 373px;
        background-color:#FCFCFC;
        border-radius: 32px;
        margin-top: 12px;
        margin-bottom: 12px;
        display: flex;
        justify-content: stretch;
        min-width: 40%;
        max-width: 90%;

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
                max-width: 186px;
                
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