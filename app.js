const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const Profilename = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = `<img
    src="https://images.unsplash.com/photo-1677058569208-74e09eb0d437?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    alt="img"
  />`
    title.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`
    excerpt.innerHTML = `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, amet!`

    profile_img.innerHTML = `<img
  src="https://avatars.dicebear.com/api/adventurer-neutral/mail%40ashallendesign.co.uk.svg"
/>`

    Profilename.innerHTML = `Sudarshan Hosalli`
    date.innerHTML = `Feb 23, 2023`

    animated_bgs.forEach((item) => item.classList.remove('animated-bg'))
    animated_bg_texts.forEach((item) => item.classList.remove('animated-bg-text'))
}