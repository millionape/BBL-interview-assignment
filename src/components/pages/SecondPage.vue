<template>
  <div class="grid button-center">
    <div class="center">
      <transition name="fade" class="center">
        <div class="button-center center">
          <div class="center text-box">
            <vs-input label="Loaded Data" class="input-margin" v-model="getLoadedData" readonly/>
            <vs-input label="Sum" class="input-margin" v-model="getSumOfData" readonly />
          </div>
          <div class="">
            <vs-button
              class="button-center-wt-margin"
              flat
              :active="active == 0"
              @click="gotoFirstPage"
            >
              Back
            </vs-button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FirstPage",
  data() {
    return {
      active: 0
    };
  },
  computed: {
    ...mapGetters(["getLoadedData","getSumOfData"])
  },
  methods: {
    gotoFirstPage(){
        this.$router.push('/')
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

.inner-button-center {
  position: absolute;
  left: 50%;
  margin-top: 1rem;
}


.button-center-wt-margin {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 250%);
}

.vs-input {
  width: 300px;
}
.input-margin{
    margin-top: 1.4rem;
}
.marginTop {
    margin-top: 4rem;
}
</style>
