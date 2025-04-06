<template>
  <UContainer>
    <UPageHeader title="CallBack Contact" />
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <UCard>
        <template #header>
          Send Message
        </template>
        
        <UForm @submit="sendMessage">
          <UFormGroup label="Phone Number" name="phone">
            <UInput v-model="messageForm.phone" />
          </UFormGroup>
          
          <UFormGroup label="Message" name="message">
            <UTextarea v-model="messageForm.message" />
          </UFormGroup>
          
          <UButton type="submit">
            Send SMS
          </UButton>
        </UForm>
      </UCard>

      <UCard>
        <template #header>
          Send Email
        </template>
        
        <UForm @submit="sendEmail">
          <UFormGroup label="Email Address" name="email">
            <UInput v-model="emailForm.email" />
          </UFormGroup>
          
          <UFormGroup label="Subject" name="subject">
            <UInput v-model="emailForm.subject" />
          </UFormGroup>
          
          <UFormGroup label="Content" name="content">
            <UTextarea v-model="emailForm.content" />
          </UFormGroup>
          
          <UButton type="submit">
            Send Email
          </UButton>
        </UForm>
      </UCard>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const communicationsStore = useCommunicationsStore()

const messageForm = reactive({
  phone: '',
  message: ''
})

const emailForm = reactive({
  email: '',
  subject: '',
  content: ''
})

const sendMessage = () => {
  communicationsStore.sendMessage(messageForm.phone, messageForm.message)
}

const sendEmail = () => {
  communicationsStore.sendEmail(emailForm.email, emailForm.subject, emailForm.content)
}
</script>
