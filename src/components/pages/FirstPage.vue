<template>
  <div class="grid button-center">
    <div class="center">
      <transition name="fade">
        <vs-button
          class="button-center"
          :loading="isButtonLoading"
          flat
          v-if="!isLoadSuccess"
          :active="active == 0"
          size="large"
          @click="onButtonClicked"
        >
          Load
        </vs-button>
      </transition>
      <transition name="fade" class="center">
        <div class="button-center center" v-if="isLoadSuccess">
          <div class="center text-box">
            <vs-input
              class="center input-width"
              v-if="isLoadSuccess"
              v-model="getLoadedData"
              placeholder="......"
              readonly
            />
          </div>
          <div class="">
            <vs-button class="button-center-wt-margin" flat :active="active == 0" @click="gotoCalculatePage">
              Calculate
            </vs-button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FirstPage",
  data() {
    return {
      active: 0,
      isButtonLoading: false,
      isButtonShow: true,
      value: "skokok"
    };
  },
  computed:{
    ...mapGetters(["getAuthKey","getLoadedData","isLoadSuccess"]),
  },
  methods: {
    ...mapActions(["loadTheData"]),
    onButtonClicked(e) {
      console.log("button clicked");
      this.isButtonLoading = true;
      this.loadTheData()
    },
    gotoCalculatePage(){
      this.$router.push('/second')
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.highlight {
  background-color: beige;
}
.button-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.button-center-wt-margin {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 140%);
}
.text-box {
  text-align: center;
  margin-top: 3rem;
}
.inner-button-center {
  position: absolute;
  left: 50%;
  margin-top: 1rem;
}
.bcenter {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.vs-input {
  width: 300px;
}
</style>
