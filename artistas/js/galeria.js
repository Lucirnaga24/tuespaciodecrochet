new Vue({
  el: "#app",
  data: {
    images: [
    "./media/olek2.jpg",
    "./media/olek3.jpg",
    "./media/olek4.jpg",
    "./media/olek5.jpg",
    "./media/olek6.jpg",
    ],
    currentIndex: 0
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  }
});

new Vue({
  el: "#app2",
  data: {
    images: [
    "./media/y2.jpg",
    "./media/y1.jpg",
    "./media/y3.jpg",
    "./media/y4.jpg",
    "./media/y5.png",
    "./media/y6.jpg",
    ],
    currentIndex: 0
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  }
});

new Vue({
  el: "#app3",
  data: {
    images: [
    "./media/t1.jpg",
    "./media/t2.jpg",
    "./media/t3.jpg",
    "./media/t4.jpg",
    "./media/t5.jpg",
    "./media/t6.jpg",
    ],
    currentIndex: 0
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  }
});