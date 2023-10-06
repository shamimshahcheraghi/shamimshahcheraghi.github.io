<template>
  <div>
    <div class="mx-3 mt-3 mb-5">
      <div class="row">
        <div class="col-xl-12 col-bg-12 col-md-12 col-sm-12">
          <p
            class="title1"
            data-aos="fade"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-duration="1000"
          >
            Intersts
          </p>

          <span
            class="mx-2 badge p-2 mb-2"
            v-for="s in list"
            :key="s"
            :class="{ 'bg-dark2': nightMode }"
            >{{ s }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list", "nightMode"],
};
</script>

<style scoped>
.badge {
  background-color: rgb(211, 227, 233);
  transition: all 0.5s;
  font-weight: 700;
  font-size: 16px;
}
.title1 {
  font-size: 24px;
  font-weight: 500;
}
</style>
