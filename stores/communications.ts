import { defineStore } from 'pinia'

export const useCommunicationsStore = defineStore('communications', {
  state: () => ({
    calls: [],
    messages: [],
    emails: []
  }),
  actions: {
    async sendMessage(to: string, message: string) {
      const { data } = await useFetch('/api/phone/send', {
        method: 'POST',
        body: { to, message }
      })
      this.messages.unshift(data.value)
    },
    async sendEmail(to: string, subject: string, content: string) {
      const { data } = await useFetch('/api/email/send', {
        method: 'POST',
        body: { to, subject, content }
      })
      this.emails.unshift(data.value)
    }
  }
})
