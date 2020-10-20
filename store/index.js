// function for Mock API
// abc: [
//   require(~/assets/img/Plane.png)
// ]
const sleep = m => new Promise(r => setTimeout(r, m))
const pepelanes = [

  {
      id: 0,
      src: "Plane4",
      title: "XR-74 «Cooper»",
      description: "Brief description of the project, in a few lines.",
      prise: "1 278 $/h"
  },
  {
      id: 1,
      src: "Plane4",
      title: "XR-74 «Coopeееr»",
      description: "Brief description of the project, in a few lines.",
      prise: "145 278 $/h"
  },
  {
      id: 2,
      src: "Plane2",
      title: "XR-74 «Cooper»",
      description: "Brief description of the project, in a few lines.",
      prise: "1 278 $/h"
  },
  {
      id: 3,
      src: "Plane2",
      title: "XR-74 «Coopeееr»",
      description: "Brief description of the project, in a few lines.",
      prise: "145 278 $/h"
  },
  {
      id: 4,
      src: "Plane3",
      title: "XR-74 «Cooper»",
      description: "Brief description of the project, in a few lines.",
      prise: "1 278 $/h"
  },
  {
      id: 5,
      src: "Plane2",
      title: "XR-74 «Coopeееr»",
      description: "Brief description of the project, in a few lines.",
      prise: "145 278 $/h"
  },
  {
      id: 6,
      src: "Plane4",
      title: "XR-74 «Cooper»",
      description: "Brief description of the project, in a few lines.",
      prise: "1 278 $/h"
  },
  {
      id: 7,
      src: "Plane3",
      title: "XR-74 «Coopeееr»",
      description: "Brief description of the project, in a few lines.",
      prise: "145 278 $/h"
  },
  {
      id: 8,
      src: "Plane2",
      title: "XR-74 «Coopeееr»",
      description: "Brief description of the project, in a few lines.",
      prise: "145 278 $/h"
  },
  {
      id: 9,
      src: "Plane4",
      title: "XR-74 «Cooper»",
      description: "Brief description of the project, in a few lines.",
      prise: "1 278 $/h"
  },
  {
      id: 10,
      src: "Plane3",
      title: "XR-74 «Coopeееr»",
      description: "Brief description of the project, in a few lines.",
      prise: "145 278 $/h"
  }
]


export const state = () => ({
  peneplaneitem: []
})
export const mutations = {
  SET_pepelanes_LIST (state, pepelanes) {
    state.peneplaneitem = pepelanes
  }
}
export const actions = {
  async getpeneplaneitem ({ commit }) {
    try {
      await sleep(1000)
      await commit('SET_pepelanes_LIST', pepelanes)
    } catch (err) {
      console.log(err)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  }
}