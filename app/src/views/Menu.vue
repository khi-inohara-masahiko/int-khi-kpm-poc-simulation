<template>
  <div class="menu_body">
    <div class="menu" :class="{ active: isShow }">
      <div class="btn trigger" @click="toggleClass">
        <span class="line"></span>
      </div>
      <div class="icons">
        <div class="rotater">
          <div class="btn btn-icon">
            <i class="fas fa-cubes fa-3x"></i>
          </div>
        </div>
        <div class="rotater">
          <div class="btn btn-icon">
            <i class="fa fa-facebook"></i>
          </div>
        </div>
        <div class="rotater">
          <div class="btn btn-icon">
            <i class="fa fa-google-plus"></i>
          </div>
        </div>
        <div class="rotater">
          <div class="btn btn-icon">
            <i class="fa fa-twitter"></i>
          </div>
        </div>
        <div class="rotater">
          <div class="btn btn-icon">
            <i class="fa fa-dribbble"></i>
          </div>
        </div>
        <div class="rotater">
          <div class="btn btn-icon">
            <i class="fa fa-linkedin"></i>
          </div>
        </div>
        <div class="rotater">
          <div class="btn btn-icon">
            <i class="fa fa-github"></i>
          </div>
        </div>
        <div class="rotater">
          <div class="btn btn-icon">
            <i class="fa fa-behance"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadFile",
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    toggleClass() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
.menu_body {
  height: 100%;
  background: linear-gradient(45deg, #e10522 0%, rgba(225, 5, 34, 0) 70%),
    linear-gradient(135deg, #3105d1 10%, rgba(49, 5, 209, 0) 80%),
    linear-gradient(225deg, #0adbd8 10%, rgba(10, 219, 216, 0) 80%),
    linear-gradient(315deg, #09f505 100%, rgba(9, 245, 5, 0) 70%);
}

.absolute-center,
.menu,
.menu .btn .fa,
.menu .btn .fas,
.menu .btn.trigger .line {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.menu {
  width: 5em;
  height: 5em;
}
.menu .btn {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(128, 128, 128, 0.15);
  opacity: 0;
  z-index: -10;
  cursor: pointer;
  transition: opacity 1s, z-index 0.3s, transform 1s;
  transform: translateX(0);
}
.menu .btn .fa {
  font-size: 3em;
  transition: color 0.3s;
}
.menu .btn .fas {
  font-size: 3em;
  transition: color 0.3s;
}
.menu .btn:hover .fa {
  color: rgba(0, 128, 128, 0.7);
}
.menu .btn:hover .fas {
  color: rgba(0, 128, 128, 0.7);
}
.menu .btn.trigger {
  opacity: 1;
  z-index: 100;
  cursor: pointer;
  transition: transform 0.3s;
}
.menu .btn.trigger:hover {
  transform: scale(1.2);
}
.menu .btn.trigger:hover .line {
  background-color: rgba(0, 128, 128, 0.7);
}
.menu .btn.trigger:hover .line:before,
.menu .btn.trigger:hover .line:after {
  background-color: rgba(0, 128, 128, 0.7);
}
.menu .btn.trigger .line {
  width: 60%;
  height: 6px;
  background: #000;
  border-radius: 6px;
  transition: background-color 0.3s, height 0.3s, top 0.3s;
}
.menu .btn.trigger .line:before,
.menu .btn.trigger .line:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  width: 100%;
  height: 6px;
  background: #000;
  border-radius: 6px;
  transition: background-color 0.3s, transform 0.3s;
}
.menu .btn.trigger .line:before {
  top: -12px;
  transform-origin: 15% 100%;
}
.menu .btn.trigger .line:after {
  top: 12px;
  transform-origin: 25% 30%;
}
.menu .rotater {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: 50% 50%;
}
.menu.active .btn-icon {
  opacity: 1;
  z-index: 50;
}
.menu.active .trigger .line {
  height: 0px;
  top: 45%;
}
.menu.active .trigger .line:before {
  transform: rotate(45deg);
  width: 110%;
}
.menu.active .trigger .line:after {
  transform: rotate(-45deg);
  width: 110%;
}

.rotater:nth-child(1) {
  transform: rotate(-22.5deg);
}

.menu.active .rotater:nth-child(1) .btn-icon {
  transform: translateY(-15em) rotate(22.5deg);
}

.rotater:nth-child(2) {
  transform: rotate(22.5deg);
}

.menu.active .rotater:nth-child(2) .btn-icon {
  transform: translateY(-15em) rotate(-22.5deg);
}

.rotater:nth-child(3) {
  transform: rotate(67.5deg);
}

.menu.active .rotater:nth-child(3) .btn-icon {
  transform: translateY(-15em) rotate(-67.5deg);
}

.rotater:nth-child(4) {
  transform: rotate(112.5deg);
}

.menu.active .rotater:nth-child(4) .btn-icon {
  transform: translateY(-15em) rotate(-112.5deg);
}

.rotater:nth-child(5) {
  transform: rotate(157.5deg);
}

.menu.active .rotater:nth-child(5) .btn-icon {
  transform: translateY(-15em) rotate(-157.5deg);
}

.rotater:nth-child(6) {
  transform: rotate(202.5deg);
}

.menu.active .rotater:nth-child(6) .btn-icon {
  transform: translateY(-15em) rotate(-202.5deg);
}

.rotater:nth-child(7) {
  transform: rotate(247.5deg);
}

.menu.active .rotater:nth-child(7) .btn-icon {
  transform: translateY(-15em) rotate(-247.5deg);
}

.rotater:nth-child(8) {
  transform: rotate(292.5deg);
}

.menu.active .rotater:nth-child(8) .btn-icon {
  transform: translateY(-15em) rotate(-292.5deg);
}
</style>