<template>
  <div
    class="py-4 p-st"
    :class="{
      'bg-light': !nightMode,
      'bg-dark2': nightMode,
      'text-light': nightMode,
    }"
  >
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >Education and Experiences</span
        >
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
      <div class="row">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <interests :list="interests" :nightMode="nightMode" />
          <Timeline :data="education" :nightMode="nightMode" />
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <Timeline :data="research_experience" :nightMode="nightMode" />
        </div>

        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <Timeline :data="teaching_experience" :nightMode="nightMode" />
        </div>

        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <Timeline :data="work_experience" :nightMode="nightMode" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from "./helpers/Timeline";
import info from "../../info";
import Interests from "./helpers/Interests.vue";

export default {
  name: "About",
  components: {
    Timeline,
    Interests,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      education: {
        title: "Education",
        data: info.education,
      },
      research_experience: {
        title: "Research Experiences",
        data: info.research_experience,
      },
      teaching_experience: {
        title: "Teaching Experiences",
        data: info.teaching_experience,
      },
      work_experience: {
        title: "Work Experiences",
        data: info.work_experience,
      },
      interests: info.interests,
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}
</style>
