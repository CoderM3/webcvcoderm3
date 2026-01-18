<template>
<div v-if="isLoading">
    <div ref="loaderRef" class="fixed inset-0 bg-zinc-950 z-1000 flex items-center justify-center overflow-hidden transition-transform duration-1000">
        <div class="text-center">
            <!-- Logo FIRST -->
            <div class="mb-8">
                <div class="w-20 h-20 mx-auto flex items-center justify-center">
                    <span class="text-6xl font-bold text-white font-logo letter letter-1">A</span>
                    <span class="text-6xl font-bold text-white font-logo letter letter-2">D</span>
                    <span class="text-6xl font-bold text-white font-logo letter letter-3">F</span>
                </div>
            </div>

            <div class="w-80 max-w-full mx-auto">
                <div class="h-1 bg-zinc-800 overflow-hidden mb-4">
                    <div
                        class="h-full bg-white transition-all duration-1000 ease-out"
                        :style="{ width: `${progress}%` }"
                    >
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<nav class="block w-full max-w-screen-lg px-4 py-2 mx-auto bg-black sticky top-3 shadow lg:px-8 lg:py-3 z-[999] rounded-lg">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <h1 href="#"
      class="mr-4 block cursor-pointer py-1.5 text-2xl text-white font-fancy">
      ADF
    </h1>
    <div class="hidden lg:block">
        <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mt-0 lg:mb-0 lg:flex-row lg:items-center lg:gap-6">
            <li>
                <a href="#home" class="block p-1 text-white text-base link link-underline link-underline-black">
                Home
                </a>
            </li>
            <li>
                <a href="#about" class="block p-1 text-white text-base link link-underline link-underline-black">
                About
                </a>
            </li>
            <li>
                <a href="#project" class="block p-1 text-white text-base link link-underline link-underline-black">
                Project
                </a>
            </li>
            <li>
                <a href="#services" class="block p-1 text-white text-base link link-underline link-underline-black">
                Services
                </a>
            </li>
            <li>
                <a href="#skills" class="block p-1 text-white text-base link link-underline link-underline-black">
                Skills
                </a>
            </li>
            <li>
                <a href="#contact" class="block p-1 text-white text-base link link-underline link-underline-black">
                Contacts
                </a>
            </li>
        </ul>
    </div>
    <button
      @click="toggleMenu"
      class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-white transition-all hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
      type="button">
      <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </span>
    </button>
  </div>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 -translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-4">
    <div v-if="isMenuOpen" class="lg:hidden mt-4">
        <ul class="flex flex-col gap-2 pb-4">
            <li><a href="#home" @click="closeMenu" class="block p-3 text-white rounded transition-all hover:bg-gray-800 hover:translate-x-2">Home</a></li>
            <li><a href="#about" @click="closeMenu" class="block p-3 text-white rounded transition-all hover:bg-gray-800 hover:translate-x-2">About</a></li>
            <li><a href="#project" @click="closeMenu" class="block p-3 text-white rounded transition-all hover:bg-gray-800 hover:translate-x-2">Project</a></li>
            <li><a href="#services" @click="closeMenu" class="block p-3 text-white rounded transition-all hover:bg-gray-800 hover:translate-x-2">Services</a></li>
            <li><a href="#skills" @click="closeMenu" class="block p-3 text-white rounded transition-all hover:bg-gray-800 hover:translate-x-2">Skills</a></li>
            <li><a href="#contact" @click="closeMenu" class="block p-3 text-white rounded transition-all hover:bg-gray-800 hover:translate-x-2">Contacts</a></li>
        </ul>
    </div>
    </Transition>
</nav>

<section id="home" class="scroll-mt-24 mt-24 w-full py-30 md:py-55">
    <video
      autoplay
      loop
      muted
      playsinline
      class="absolute inset-0 w-full h-full object-cover z-0">
      <source :src="'/videos/particles.mp4'" type="video/mp4">
    </video>
    <div class="absolute inset-0 bg-black/50 z-0"></div>
    <div class="max-w-screen-lg mx-auto px-4">
        <p class="block text-lg text-center md:text-left pb-2" data-aos="fade-up" >Hello!</p>
        <p class="block text-5xl text-center md:text-left break-all pb-6" data-aos="fade-up" data-aos-delay="100">I'm Adhitya Fajar Al-Huda</p>
        <p class="block text-2xl text-center md:text-left break-all" data-aos="fade-up" data-aos-delay="200">A Frontend Developer</p>
        <p class="block text-md text-center md:text-left break-all" data-aos="fade-up" data-aos-delay="300">Or am i?</p>
    </div>
    <div class="max-w-screen-lg mx-auto px-4 mt-8 text-center md:text-left">
    <a
        href="/cv/Adhitya_Fajar_Al-Huda-resume.pdf"
        download
        class="inline-block px-6 py-3 text-white bg-black rounded-lg shadow hover:bg-gray-800 transition"
        data-aos="fade-up"
        data-aos-delay="400"
    >
        Download CV
    </a>
</div>
</section>

<section id="about" class="scroll-mt-24 w-full  py-40">
    <div class="max-w-screen-lg mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div class="hidden lg:block lg:w-1/3 flex-shrink-0">
                <img :src="'/images/profpic.png'" alt="Profile Picture" class="rounded-full w-full max-w-sm shadow-lg" data-aos="fade-right">
            </div>
            <div class="w-full lg:w-2/3">
                <p class="block text-4xl text-left pb-10" data-aos="fade-left">About Me</p>
                <p class="block text-lg text-left break-normal pb-6" data-aos="fade-left" data-aos-delay="200">A fifth-semester computer science student focusing on front-end development. Experienced in building web interfaces using HTML and CSS, and setting up databases for CRUD applications.</p>
                <ul class="list-none flex flex-col gap-4 pb-10" data-aos="fade-left" data-aos-delay="240">
                    <li class="grid grid-cols-2">
                        <span class="font-bold">Name:</span>
                        <span>Adhitya Fajar Al-Huda</span>
                    </li>
                    <li class="grid grid-cols-2">
                        <span class="font-bold">Date of Birth: </span>
                        <span>October, 16 2005</span>
                    </li>
                    <li class="grid grid-cols-2">
                        <span class="font-bold">Address: </span>
                        <span>Samarinda, Kalimantan Timur</span>
                    </li>
                    <li class="grid grid-cols-2">
                        <span class="font-bold">Zip code: </span>
                        <span>75119</span>
                    </li>
                    <li class="grid grid-cols-2">
                        <span class="font-bold">Email: </span>
                        <span class="break-words">adhityafajaralhuda678@gmail.com</span>
                    </li>
                    <li class="grid grid-cols-2">
                        <span class="font-bold">Phone: </span>
                        <span>+62 812 5532 2900</span>
                    </li>
                </ul>
                <span class="block text-lg text-left" data-aos="fade-left" data-aos-delay="350">So far.. 2 Projects Completed</span>
            </div>
        </div>
    </div>
</section>

<section id="project" class="w-full py-30 scroll-mt-24 mt-24" data-aos="fade-down">
    <div class="max-w-screen-lg mx-auto px-4">
        <p class="block text-4xl text-center pb-6" data-aos="fade-down" data-aos-delay="100">Project Experience</p>
        <p class="block text-lg text-center break-normal pb-6" data-aos="fade-down" data-aos-delay="200">Here's some of the projects i've worked on, such as designing UI/UX for CV webmaker and an application to detect
            banana ripeness.
        </p>
        <ul class="list-none grid grid-cols-1 md:grid-cols-2 gap-6 pb-3">
            <li class="border border-gray-300 rounded-lg p-6 bg-white shadow space-y-3" data-aos="fade-right" data-aos-delay="300">
                <p class="text-xl">2025</p>
                <p class="text-xl">Mobile Application for Banana Ripeness Detection</p>
                <p class="text-md">Developed a mobile application using flutter to detect Banana Ripeness from images</p>
            </li>
            <li class="border border-gray-300 rounded-lg p-6 bg-white shadow space-y-3" data-aos="fade-left" data-aos-delay="300">
                <p class="text-xl">2024</p>
                <p class="text-xl">CV Maker Website</p>
                <p class="text-md">Contributed in CV Website Maker project in designing the UI/UX</p>
            </li>
        </ul>
    </div>
</section>

<section id="services" class="w-full py-30 scroll-mt-24 mt-24" data-aos="fade-up">
    <div class="max-w-screen-lg mx-auto px-4">
        <p class="block text-4xl text-center pb-6" data-aos="fade-up" data-aos-delay="100">Services</p>
        <p class="block text-lg text-center break-normal pb-6" data-aos="fade-up" data-aos-delay="200">Providing solutions in Frontend development, web design, app design, and graphic design.
        </p>
        <ul class="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-3">
            <li class="border border-gray-300 rounded-lg p-6 bg-white shadow text-center space-y-3" data-aos="fade-up" data-aos-delay="300">
                <i class="fa-solid fa-palette text-5xl block mx-auto pb-2"></i>
                <p class="smalltext text-md pb-15 relative font-small">GRAPHIC DESIGN</p>
            </li>
            <li class="border border-gray-300 rounded-lg p-6 bg-white shadow text-center space-y-3" data-aos="fade-up" data-aos-delay="400">
                <i class="fa-solid fa-code text-5xl block mx-auto pb-2"></i>
                <p class="smalltext text-md pb-15 relative font-small">FRONTEND DEVELOPMENT</p>
            </li>
            <li class="border border-gray-300 rounded-lg p-6 bg-white shadow text-center space-y-3" data-aos="fade-up" data-aos-delay="500">
                <i class="fa-solid fa-brain text-5xl block mx-auto pb-2"></i>
                <p class="smalltext text-md pb-15 relative font-small">MACHINE LEARNING</p>
            </li>
            <li class="border border-gray-300 rounded-lg p-6 bg-white shadow text-center space-y-3" data-aos="fade-up" data-aos-delay="600">
                <i class="fa-solid fa-laptop-code text-5xl block mx-auto pb-2"></i>
                <p class="smalltext text-md pb-15 relative font-small">WEB DEVELOPER</p>
            </li>
        </ul>
    </div>
</section>

<section id="skills" class="w-full py-30 scroll-mt-24 mt-24" data-aos="fade-down">
    <div class="max-w-screen-lg mx-auto px-4">
        <p class="block text-4xl text-center pb-6" data-aos="fade-up" data-aos-delay="100">My Skills</p>
        <p class="block text-lg text-center break-normal pb-6" data-aos="fade-up" data-aos-delay="200">My expertise includes web development, creative media, and app development. Here's the tools and language that i regularly use and how proficient I am in using these tools.
        </p>
        <ul class="list-none grid grid-cols-1 md:grid-cols-2 gap-6 pb-3">
            <li class="border border-gray-300 rounded-lg p-6 bg-white shadow text-center space-y-3" data-aos="fade-right" data-aos-delay="300">
                <i class="fa-brands fa-html5 text-5xl block mx-auto pb-2 text-orange-600"></i>
                <p class="text-xl font-semibold">HTML5</p>
                <div class="w-full bg-gray-200 rounded-full h-3">
                    <div class="bg-orange-600 h-3 rounded-full" style="width: 90%"></div>
                </div>
                <p class="text-sm text-white">90%</p>
            </li>
            <li class="border border-gray-300 rounded-lg p-6 bg-white shadow text-center space-y-3" data-aos="fade-left" data-aos-delay="300">
                <i class="fa-brands fa-css3-alt text-5xl block mx-auto pb-2 text-blue-600"></i>
                <p class="text-xl font-semibold">CSS</p>
                <div class="w-full bg-gray-200 rounded-full h-3">
                    <div class="bg-blue-600 h-3 rounded-full" style="width: 85%"></div>
                </div>
                <p class="text-sm text-white">85%</p>
            </li>
            <li class="border border-gray-300 rounded-lg p-6 bg-white shadow text-center space-y-3" data-aos="fade-right" data-aos-delay="400">
                <i class="fa-brands fa-python text-5xl block mx-auto pb-2 text-blue-500"></i>
                <p class="text-xl font-semibold">Python</p>
                <div class="w-full bg-gray-200 rounded-full h-3">
                    <div class="bg-blue-500 h-3 rounded-full" style="width: 80%"></div>
                </div>
                <p class="text-sm text-white">57%</p>
            </li>
            <li class="border border-gray-300 rounded-lg p-6 bg-white shadow text-center space-y-3" data-aos="fade-left" data-aos-delay="400">
                <i class="fa-solid fa-shapes text-5xl block mx-auto pb-2 text-red-600"></i>
                <p class="text-xl font-semibold">Photoshop</p>
                <div class="w-full bg-gray-200 rounded-full h-3">
                    <div class="bg-blue-700 h-3 rounded-full text-white" style="width: 75%"></div>
                </div>
                <p class="text-sm text-white">75%</p>
            </li>
            <li class="border border-gray-300 rounded-lg p-6 bg-white shadow text-center space-y-3" data-aos="fade-right" data-aos-delay="500">
                <i class="fa-solid fa-palette text-5xl block mx-auto pb-2 text-purple-600"></i>
                <p class="text-xl font-semibold">Canva</p>
                <div class="w-full bg-gray-200 rounded-full h-3">
                    <div class="bg-purple-600 h-3 rounded-full" style="width: 85%"></div>
                </div>
                <p class="text-sm text-white">85%</p>
            </li>
            <li class="border border-gray-300 rounded-lg p-6 bg-white shadow text-center space-y-3" data-aos="fade-left" data-aos-delay="500">
                <i class="fa-brands fa-php text-5xl block mx-auto pb-2 text-purple-300"></i>
                <p class="text-xl font-semibold">PHP</p>
                <div class="w-full bg-gray-200 rounded-full h-3">
                    <div class="bg-purple-600 h-3 rounded-full" style="width: 68%"></div>
                </div>
                <p class="text-sm text-white">85%</p>
            </li>
        </ul>
    </div>
</section>

<section id="contact" class="w-full py-30 scroll-mt-24 mt-24" data-aos="fade-up">
    <div class="max-w-screen-lg mx-auto px-4">
        <p class="block text-4xl text-center pb-6" data-aos="fade-down" data-aos-delay="100">Contact Me</p>
        <p class="block text-lg text-center break-normal pb-6" data-aos="fade-down" data-aos-delay="200">If you're interested in collaboration, have questions, or just want to connect, feel free to contact me through my social media below
        </p>
        <ul class="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-3">
            <li class="border border-gray-300 rounded-lg p-6 bg-white shadow text-center space-y-3" data-aos="fade-down" data-aos-delay="300">
                <i class="fa-brands fa-linkedin text-5xl block mx-auto pb-2 text-blue-600"></i>
                <p class="text-xl font-semibold">LinkedIn</p>
                <a href="https://www.linkedin.com/in/adhitya-fajar-al-huda-1bb346292/" class="text-blue-600 hover:underline break-all text-sm">linkedin.com/in/adhitya-fajar-al-huda</a>
            </li>
            <li class="border border-gray-300 rounded-lg p-6 bg-white shadow text-center space-y-3" data-aos="fade-down" data-aos-delay="400">
                <i class="fa-brands fa-discord text-5xl block mx-auto pb-2 text-indigo-600"></i>
                <p class="text-xl font-semibold">Discord</p>
                <p class="text-white">stellenbosch</p>
            </li>
            <li class="border border-gray-300 rounded-lg p-6 bg-white shadow text-center space-y-3" data-aos="fade-down" data-aos-delay="500">
                <i class="fa-brands fa-facebook text-5xl block mx-auto pb-2 text-blue-700"></i>
                <p class="text-xl font-semibold">Facebook</p>
                <a href="https://www.facebook.com/adhitiya.fajar/" class="text-blue-700 hover:underline break-all text-sm">facebook.com/adhitiya.fajar</a>
            </li>
            <li class="border border-gray-300 rounded-lg p-6 bg-white shadow text-center space-y-3" data-aos="fade-down" data-aos-delay="600">
                <i class="fa-brands fa-instagram text-5xl block mx-auto pb-2 text-pink-600"></i>
                <p class="text-xl font-semibold">Instagram</p>
                <a href="https://www.instagram.com/eci_504210/" class="text-pink-600 hover:underline">@eci_504210</a>
            </li>
            <li class="border border-gray-300 rounded-lg p-6 bg-white shadow text-center space-y-3" data-aos="fade-down" data-aos-delay="700">
                <i class="fa-solid fa-envelope text-5xl block mx-auto pb-2 text-red-600"></i>
                <p class="text-xl font-semibold">Email</p>
                <a href="mailto:adhityafajaralhuda678@gmail.com" class="text-red-600 hover:underline break-all text-sm">adhityafajaralhuda678@gmail.com</a>
            </li>
            <li class="border border-gray-300 rounded-lg p-6 bg-white shadow text-center space-y-3" data-aos="fade-down" data-aos-delay="800">
                <i class="fa-solid fa-phone text-5xl block mx-auto pb-2 text-green-600"></i>
                <p class="text-xl font-semibold">Phone</p>
                <a class="text-green-600 hover:underline">+62 812 5532 2900</a>
            </li>
        </ul>
    </div>
</section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  console.log('Menu toggled:', isMenuOpen.value) // Debug
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const progress = ref(0)
const isLoading = ref(true)
const loaderRef = ref(null)

let intervalId

onMounted(() => {
  intervalId = setInterval(() => {
    if (progress.value >= 100) {
      clearInterval(intervalId)
      progress.value = 100
      return
    }
    progress.value = Math.min(
      progress.value + Math.random() * 2 + 2,
      100
    )
  }, 300)
})

onUnmounted(() => {
  clearInterval(intervalId)
})

watch(progress, (val) => {
  if (val === 100) {
    setTimeout(() => {
      if (loaderRef.value) {
        loaderRef.value.style.transform = 'translateY(-100%)'
      }
      setTimeout(() => {
        isLoading.value = false
      }, 800)
    }, 800)
  }
})
</script>
