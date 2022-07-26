<template>
  <div class="modal-body">
    <Form
      @submit="sendEmail" 
      id="contact" 
      class="input-box"
      :validation-schema="schema"
    >
      <TextInput
        name="name"
        type="text"
        label="보내는 분"
        placeholder="성함 혹은 기업명을 입력하세요."
      />
      <TextInput
        name="email"
        type="email"
        label="이메일"
        placeholder="이메일을 입력하세요."
      />
      <TextInput
        name="tel"
        type="tel"
        label="전화번호"
        placeholder="'-'를 제외한 전화번호를 입력하세요."
      />
      <div class="TextInput">
        <label for="message">메세지</label>
        <textarea 
          name="message" 
          id="message"
          placeholder="메세지를 입력해주세요" 
        >
        </textarea>
      </div>
    </Form>
  </div>
  <div class="modal-footer">
    <input id="submit-btn" type="submit" form="contact" value="보내기" class="btn btn--primary col-12 btn-lg">
  </div>
</template>

<script>
  import emailjs from '@emailjs/browser';

  import { Form } from "vee-validate";
  import * as Yup from "yup";
  import TextInput from "./AppTextInput";

  export default {
    name: "AppContact",
    data() {
      return {
        success: true,
      }
    },
    components: {
      TextInput,
      Form,
    },
    setup() {
      function sendEmail() {
        emailjs.sendForm(
          'service_2esgxbd', 
          'template_rb8n6yb', 
          document.querySelector('#contact'), 
          'lCBUF2uvwt97SJOoh'
        )
        .then((result) => {
          alert('메세지 발송완료했습니다.', result.text);
        }, (error) => {
          alert('메세지 발송에 실패했습니다...', error.text);
        });
      }

      // Using yup to generate a validation schema
      // https://vee-validate.logaretm.com/v4/guide/validation#validation-schemas-with-yup
      const schema = Yup.object().shape({
        name: Yup.string().min(2, '2자 이상 입력하세요').required('필수입력 사항입니다'),
        email: Yup.string().email('이메일이 올바르지 않습니다').required('필수입력 사항입니다'),
        tel: Yup.number().typeError('숫자만 입력하세요').min(11, '11자 이상 입력하세요').required('필수입력 사항입니다'),
      });

      return {
        sendEmail,
        schema,
      };
    },
  };
  </script>

<style lang="scss" scoped>
</style>