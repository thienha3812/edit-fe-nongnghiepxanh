<template>
  <div class="login" v-cloak>
    <Row>
      <Col span="24">
        <div class="background-login">
          <div>
            <div class="form">
              <div
                style="display:flex;justify-content:center;margin-bottom:20px"
              >
                <h3 style="color:white">ĐĂNG NHẬP TÀI KHOẢN</h3>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Tài khoản"
                required
                value=""
              />
              <input
                type="password"
                name="email"
                placeholder="Mật khẩu"
                required
                value=""
              />
              <div style="display:flex;justify-content:center">
                <Button type="success">Đăng nhập</Button>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";

export default {};
</script>
<style lang="scss" scoped>
.background-login {
  background-image: url("../../assets/images/login-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
  .form {
    height: 290px;
    width: 350px;
    background-color: transparent;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 2.5rem;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 0.625rem;
  }
  input {
    width: 100%;
    padding: 0.625rem 0;
    color: #fff;
    margin-bottom: 1.875rem;
    border: none;
    border-bottom: 0.065rem solid #fff;
    outline: none;
    background: transparent;
  }
  input::placeholder {
    color: white;
  }
}
</style>
