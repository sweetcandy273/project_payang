import Vue from "vue";
import axios from "axios";

Vue.prototype.$axios = axios.create({
  baseURL: "https://causal-jigsaw-325013.appspot.com/"
});
