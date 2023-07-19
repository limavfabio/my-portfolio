<!-- This component is archived and not in use
The reason being that to send an email with a form one need a backend
or in this case, it's being handled by FormSpree -->
<script setup lang="ts">

</script>

<template>
  <div class="bg-zinc-8 pt-1 pt-20 text-zinc-1">
    <div class="container">
      <TextSection
        title="Contact"
      >
        Send a message on my
        <a class="text-zinc-4 decoration-dotted hover:text-zinc-2 hover:underline" href="https://www.linkedin.com/in/limavfabio/" target="_blank">LinkedIn</a>
        or an email with the form below.
      </TextSection>
      <div class="flex justify-center">
        <FormKit
          type="form"
          method="POST"
          action="https://formspree.io/f/xzbolebz"
          :actions="false"
          :classes="{
            form: 'mb-10 w-md',
            input: 'bg-zinc-4 px-4 py-3 mt-4',
            message: 'text-lg text-red-6',
          }"
        >
          <FormKit
            id="name"
            type="text"
            name="name"
            label="Name"
            validation="required|alpha_spaces|length:3"
            :classes="{
              input: 'px-3 py-2 text-xl w-full border border-zinc-3 text-zinc-8',
              outer: 'mb-3',
              message: 'text-lg text-red-6',
            }"
          />
          <FormKit
            id="email"
            type="text"
            name="email"
            label="Email"
            validation="required|email"
            :classes="{
              input: 'px-3 py-2 text-xl w-full border border-zinc-3 text-zinc-8',
              outer: 'mb-3',
              message: 'text-lg text-red-6',
            }"
          />
          <FormKit
            id="message"
            type="textarea"
            name="message"
            label="Message"
            validation="required|length:30"
            :classes="{
              input: 'px-3 py-2 text-xl w-full border border-zinc-3 text-zinc-8',
              outer: 'mb-3',
              message: 'text-lg text-red-6',
            }"
          />
          <FormKit
            type="submit"
            :classes="{
              input: 'px-3 py-2 text-zinc-1',
              outer: 'bg-zinc-6 w-min',
            }"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
