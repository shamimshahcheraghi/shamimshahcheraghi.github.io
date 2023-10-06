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
          >Projects</span
        >

        <hr
          width="50%"
          :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
        />

        <div class="row">
          <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
            <div
              v-for="(value, index) in firtSection"
              :key="index"
              class="text-left my-3"
            >
              <b>{{ value.title }}</b>

              <span> {{ value.desc }}</span>
            </div>
          </div>

          <!-- SECOND -->

          <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
            <div
              v-for="(value, index) in secondSection"
              :key="index"
              class="text-left my-3"
            >
              <b>{{ value.title }}</b>

              <span> {{ value.desc }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",

  props: {
    nightMode: {
      type: Boolean,
    },
  },

  data() {
    return {
      items: [
        {
          title: "SimBoost implementation",
          desc: `which is machine-learning approch for predicting drug–target binding aﬃnities, using gradient boosting using "Davis" dataset.`,
        },
        {
          title: "Classify ambulatory ECG recordings into 5 diﬀerent classes",
          desc: `using LSTM neural network, using preprocessed version of "the MIT-BIH Arrhythmia" Dataset.`,
        },
        {
          title: "DeepDTA and GraphDTA implementation",
          desc: `which are drug–target binding aﬃnity prediction system, using "Davis" dataset and "KIBA" dataset.`,
        },
        {
          title: "Dependency Parsing in Persian Text",
          desc: `investigated state-of-the-art methods in dependency parsing both in Persian and English text and propose a method to parse dependency relationships in three Persian datasets.`,
        },
        {
          title: "Image Colorization system",
          desc: `is a deep conditional convolution generative adversarial network (GAN), using frames extracted from a cartoon series.`,
        },
        {
          title: "Tumors classiﬁcation into malignant or benign",
          desc: `using Machine-learning methods, we used a dataset based on images of tumors. Features are computed from a digitized image of a ﬁne needle aspirate (FNA) of a breast mass.`,
        },
        {
          title: "Activity predictor of a compounds in AID604 bioassay",
          desc: `is a classiﬁer using Machine-learning methods. AID604 is a primary screening bioassay for Rho kinase 2 inhibitors from the Scripps Research Institute Molecular Screening Center.`,
        },
        {
          title: "Sequence generation",
          desc: `using Gated recurrent unit (GRU), we used Nietzsche’s text as a train dataset.`,
        },
        {
          title: "Denoising-autoencoder & conditional-VAE implementation",
          desc: `using MNIST dataset.`,
        },
      ],
    };
  },
  computed: {
    middleIndex() {
      return Math.ceil(this.items.length / 2);
    },

    firtSection() {
      return this.items.slice(0, this.middleIndex);
    },

    secondSection() {
      return this.items.slice(this.middleIndex);
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 400;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.btn {
  border-color: rgb(212, 149, 97);
  color: rgb(212, 149, 97);
}

.btn:hover {
  background-color: rgb(212, 149, 97);
  border-color: rgb(212, 149, 97);
  color: white;
}

.btn:focus {
  background-color: rgb(212, 149, 97);
  border-color: rgb(212, 149, 97);
  color: white;
}

/deep/ .vue-tabs .nav-tabs {
  border: none;
  font-size: 20px;
  font-weight: 500;
  display: flex;

  justify-content: center;
}

/deep/ .vue-tabs .tabs__link {
  color: #a0a0a0;
}

/deep/ .vue-tabs .nav-tabs > li.active > a {
  background: transparent;
  border: none;
  transition: all 0.5s;
  padding-right: 0;
  padding-left: 0;
  margin-right: 15px;
  margin-left: 15px;
}

/deep/ .vue-tabs .nav-tabs > li > a:hover {
  background: transparent;
  color: #cbcbcb;
  transition: all 0.5s;
}

/deep/ .vue-tabs .nav-tabs > li > a {
  background: transparent;
  border: none;
  transition: all 0.5s;
}

/deep/ .vue-tabs .nav-tabs > li > a:after {
  content: "";
  width: 20%;
  position: absolute;
  bottom: 3px;
  border-width: 0 0 2px;
  border-style: solid;
  transition: all 0.5s;
}

/deep/ .vue-tabs .nav-tabs > li.active > a:after {
  width: 100%;
  transition: all 0.5s;
}

.design-img {
  width: 100%;
  border-radius: 15px;
  transition: all 0.5s;
}

.dimg {
  position: relative;
  border-radius: 15px;
}
.middle {
  transition: all 0.5s;
  opacity: 0;
  position: absolute;
  bottom: 0px;
  left: 70px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
}

.dimg:hover .design-img {
  position: relative;
  border-radius: 15px;
  opacity: 0.1;
  cursor: pointer;
}

.dimg:hover .middle {
  opacity: 1;
}

/deep/.vueperslide {
  border-radius: 10px !important;
}
/deep/.vueperslides__parallax-wrapper {
  border-radius: 10px !important;
}

.btn {
  border-color: #669db3ff;
  color: #669db3ff;
}

.btn:hover {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.btn:focus {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}
/deep/ .vueperslides__arrow {
  outline: none !important;
  border: none;
  color: grey;
}

.badge {
  background-color: rgb(211, 227, 233);
  transition: all 0.5s;
  font-weight: 500;
  font-size: 13px;
}

.bg-dark4 {
  background-color: #494e55 !important;
}

.date {
  font-size: 14px;
  font-weight: 400;
  opacity: 0.75;
}
</style>
