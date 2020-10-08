<template>
  <div>
      <header class="header">
        
        <div class="header__logo">
            <img class="header__logo-img" src="~assets/img/Logo.png">
            <img class="header__logo-name" src="~assets/img/Pepelane.png">
        </div>
        <div class="header-item"> World's first affordable airsharing </div>
        <div class="header__tema">
            <img class="header__tema-img"  src="~assets/img/Tema.png"> 
            <div class="header__tema-name"> Night mod </div>
        </div>
        <div class="header__account">
            <img class="header__account-img" src="~assets/img/Frame.png">
            <img class="header__account-img" src="~assets/img/Subtract.png">
            <div class="header__account-name"> Bessie Cooper </div>
            <img class="header__account-photo" src="~assets/img/Rectangle 12.png">

        </div>
         
       

      </header>
  </div>
      

</template>

<script>


export default {
  components: {
   
  }
}
</script>

<style lang="scss">
.header {
    padding-top: 40px;
    padding-bottom: 40px;
    color: #677B8F;
    height: 48px;

    display: flex;
    justify-content: space-between;
}

.header__logo {
    display: flex;
    justify-content: space-around;
    .header__logo-img {
        height: 48px;
        width: 48px;
    }
    .header__logo-name {
        padding: 16px;
        height: 20px;
        width: 104px;
    }
}

.header-item {
    padding: 16px;

}

.header__tema {
    padding: 16px;
    display: flex;
    justify-content: space-around;
    .header__tema-img {
        height: 20px;
        width: 20px;
        padding-right: 16px ;
    }
}

.header__account {

    display: flex;
    justify-content: space-around;
    .header__account-img {
        padding: 16px;
        height: 20px;
      
    }
    .header__account-name {
        padding: 16px;
        font-family: 1;
        color: #000;
    }
    .header__account-photo {
        height: 48px;
        border-radius: 50%
    }
}

</style>
