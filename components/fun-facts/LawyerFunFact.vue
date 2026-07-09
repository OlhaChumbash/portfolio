<template>
  <section class="fact__area fact__translate">
    <div class="container">
      <div class="row gx-2 gy-2 gy-lg-0">
        <div class="col-xxl-4 col-lg-4 col-md-6">
          <div class="fact__item h-100 white-bg d-flex align-items-center" data-sal="slide-down" data-sal-delay="130" data-sal-duration="1000">
            <div class="">
              <p class="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="39" stroke="#F8931E" stroke-width="2"/>
                  <path d="M40 50.6666C40 50.6666 28 43.9832 28 35.963C28 27.9429 37.3333 27.2745 40 33.5495C42.6667 27.2745 52 27.9429 52 35.963C52 43.9832 40 50.6666 40 50.6666Z" stroke="#F8931E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </p>
            </div>
            <div class="fact__content">
              <h4>Наша місія</h4>
              <p>Створити можливості для учнів реалізувати себе.</p>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-lg-4 col-md-6">
          <div class="fact__item h-100 white-bg d-flex align-items-center" data-sal="slide-down" data-sal-delay="150" data-sal-duration="1000">
            <div class="">
              <p class="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="39" stroke="#F8931E" stroke-width="2"/>
                  <path d="M43.9827 35.2991L40.6063 27.9792C40.3681 27.4627 39.6339 27.4627 39.3956 27.9792L36.0193 35.2991C35.9222 35.5097 35.7226 35.6546 35.4924 35.6819L27.4874 36.631C26.9225 36.698 26.6956 37.3963 27.1133 37.7825L33.0316 43.2556C33.2018 43.413 33.278 43.6475 33.2328 43.875L31.6618 51.7814C31.5509 52.3394 32.1449 52.7709 32.6413 52.4931L39.6753 48.5557C39.8777 48.4425 40.1243 48.4425 40.3266 48.5557L47.3606 52.4931C47.857 52.7709 48.451 52.3394 48.3401 51.7814L46.7691 43.875C46.7239 43.6475 46.8002 43.413 46.9704 43.2556L52.8887 37.7825C53.3063 37.3963 53.0794 36.698 52.5145 36.631L44.5096 35.6819C44.2793 35.6546 44.0798 35.5097 43.9827 35.2991Z" stroke="#F8931E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </p>
            </div>
            <div class="fact__content">
              <h4>Цінності</h4>
              <p>Якісна освіта, інновації, практика, індивідуальний підхід.</p> 
            </div>
          </div>
        </div>
          <div class="col-xxl-4 col-lg-4 col-md-6">
          <div class="fact__item  h-100 white-bg d-flex align-items-center" data-sal="slide-down" data-sal-delay="150" data-sal-duration="1000">
            <div>
              <p class="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="39" stroke="#F8931E" stroke-width="2"/>
                  <path d="M36 39.6667H29.3333C28.597 39.6667 28 40.2637 28 41.0001V51.6667H36V39.6667Z" stroke="#F8931E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M50.6667 26.6667H44V51.6667H52V28.0001C52 27.2637 51.403 26.6667 50.6667 26.6667Z" stroke="#F8931E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M42.6667 30.3333H37.3333C36.597 30.3333 36 30.9302 36 31.6666V51.6666H44V31.6666C44 30.9302 43.403 30.3333 42.6667 30.3333Z" stroke="#F8931E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </p>
            </div>
            <div class="fact__content">
              <h4>Переваги</h4>
              <p>Сучасне обладнання, викладачі-практики, реальні проєкти, стажування в ІТ-компаніях.</p> 
            </div>
          </div>
        </div>
        </div>
    </div>
  </section>
</template>

<script>
import fact_bg from '~/assets/img/counter/fact/fact-banner-bg.jpg';
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  data(){
    return {
      fact_bg
    }
  }
}
</script>

