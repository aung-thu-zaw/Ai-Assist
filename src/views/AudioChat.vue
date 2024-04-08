<script setup lang="ts">
import MessageForm from "~/components/MessageForm.vue";
</script>

<template>
  <section class="w-full h-full pt-20">
    <div
      class="container mx-auto text-text py-8 px-14 flex flex-col md:flex-row items-start justify-between md:space-x-8 h-[780px]"
    >
      <div class="w-full md:w-4/12 h-full">
        <div class="space-y-6">
          <h1 class="text-md font-bold text-gray-300">
            Choose audio that has some speech that you would like to ask
            question about.
          </h1>

          <div class="flex items-center space-x-5">
            <button
              type="button"
              class="text-sm font-bold px-5 py-2 rounded-md border border-gradient2 bg-transparent text-white hover:border-gray-800 transition duration-300 hover:bg-secondary"
            >
              <i class="fas fa-file-audio mr-1.5"></i>
              Choose Audio
            </button>

            <button
              type="button"
              class="text-sm font-bold px-5 py-2 rounded-md border border-gradient3 bg-transparent text-white hover:border-gray-800 transition duration-300 hover:bg-secondary"
            >
              <i class="fas fa-undo mr-1.5"></i>
              Reset
            </button>
          </div>

          <p class="text-sm font-semibold">
            Your chosen file :
            <span
              class="bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text"
            >
              Hello.wav</span
            >
          </p>
        </div>

        <hr class="my-10" />

        <div class="space-y-6">
          <h1 class="text-md font-bold text-gray-300">
            Transcribe the speech to text :
          </h1>

          <div class="flex items-center space-x-5">
            <button
              type="button"
              class="text-sm font-bold px-5 py-2 border border-gradient1 bg-transparent text-white hover:border-gray-800 transition duration-300 hover:bg-secondary"
            >
              <i class="fas fa-microphone mr-1.5"></i>
              Transcribe
            </button>
          </div>

          <div>
            <textarea
              name="transcribe"
              cols="30"
              rows="10"
              class="bg-secondary border border-neutral-500 w-full rounded-md outline-none p-5 text-sm font-medium"
              disabled
            ></textarea>
          </div>
        </div>
      </div>
      <div class="relative w-full md:w-8/12 h-full">
        <div
          class="max-w-[800px] max-h-[590px] overflow-scroll mx-auto space-y-6 hide-scrollbar"
        >
          <div class="w-full mx-auto space-y-8">
            <div class="space-y-1.5">
              <h1 class="text-md font-bold">You</h1>

              <p class="text-sm text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                deleniti inventore ea, earum voluptate, dicta molestiae dolores
                facere quo sunt quam magnam! Corporis quae numquam velit sint
                illum ad dolorum?
              </p>
            </div>

            <div class="space-y-1.5">
              <h1 class="text-md font-bold">AI</h1>

              <p class="text-sm text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                deleniti inventore ea, earum voluptate, dicta molestiae dolores
                facere quo sunt quam magnam! Corporis quae numquam velit sint
                illum ad dolorum? Lorem ipsum dolor, sit amet consectetur
                adipisicing elit.
                <br />
                <br />
                Aut, est minus distinctio labore atque veritatis quis maiores
                reiciendis, explicabo fugit fuga vitae voluptatibus, iure quo
                neque mollitia exercitationem animi velit tempora officia.
                Suscipit tempora eligendi quia culpa eos, aperiam velit earum
                repudiandae vel deserunt! Optio dolorum omnis molestiae,
                corrupti pariatur iure porro expedita rem, modi voluptate
                voluptatem sed ullam doloribus illum alias officiis blanditiis
                tempore nostrum, quasi commodi aliquid? Expedita natus dolor
                tempore possimus iste beatae amet molestiae minima vitae
                distinctio provident animi ipsa, incidunt facilis reiciendis eos
                ratione dolorum? Error voluptatibus ratione eius consequatur
                facere nisi iusto eos molestias.
              </p>
            </div>
            <div class="space-y-1.5">
              <h1 class="text-md font-bold">You</h1>

              <p class="text-sm text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                deleniti inventore ea, earum voluptate, dicta molestiae dolores
                facere quo sunt quam magnam! Corporis quae numquam velit sint
                illum ad dolorum?

                <br />

                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                rerum maiores obcaecati debitis incidunt velit numquam quibusdam
                esse fugiat vitae facilis, laudantium quidem accusamus odit
                voluptate aliquam accusantium molestiae minus consectetur et
                eveniet quis ut alias deserunt. Enim error necessitatibus porro
                possimus nulla assumenda ab quasi suscipit impedit eaque
                temporibus unde libero id, numquam, molestiae vel rem doloribus
                quisquam eius inventore deserunt illum. Iste ipsa beatae laborum
                nostrum delectus enim quisquam asperiores maxime aliquid,
                praesentium sunt? Aut ipsa sit provident iusto quasi in libero
                hic quidem distinctio ea nulla animi incidunt et at minus,
                officiis pariatur. Iure libero nemo quos nesciunt commodi totam,
                beatae at delectus expedita cum tenetur tempora corrupti,
                officiis laudantium voluptatum, accusamus optio magni similique.
                Dignissimos ab, eveniet repellendus animi velit, veritatis
                aliquid dolor et, doloribus quibusdam fugit molestiae incidunt
                numquam delectus voluptates perferendis eaque accusamus nulla
                laborum ea harum impedit! Impedit ipsa laboriosam consequatur
                neque nemo dolorum labore saepe veritatis optio enim, ipsam
                voluptas quae fuga earum aut perferendis assumenda atque,
                numquam cum quas odit a obcaecati. Labore fuga ea sapiente natus
                eaque, odit perferendis autem corrupti repellendus magnam harum
                esse placeat eius, nesciunt, assumenda inventore voluptatem
                magni rerum error nostrum. Doloribus totam at suscipit ratione.
              </p>
            </div>
          </div>
        </div>

        <div class="absolute bottom-0 pb-3.5 w-full bg-background py-5 px-10">
          <MessageForm />
        </div>
      </div>
    </div>
  </section>
</template>
