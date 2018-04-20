<template>
   <div>
     <Nav></Nav>
     <Button>111</Button>
   </div>
    <!-- <Slider v-model="value" range></Slider> -->
</template>
<script>
import Nav from "../components/Nav";
    export default {
      name:'discover',
      component:{
          Nav
      },
        data () {
            // return {
            //     value: [20, 50]
            // }
        }
    }
</script>


