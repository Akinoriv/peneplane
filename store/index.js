// function for Mock API
const sleep = m => new Promise(r => setTimeout(r, m))
const pepelanes = [
    {
        id: 0,
        src: "Tema",
        title: "XR-74 «Cooper»",
        description: "Brief description of the project, in a few lines.",
        prise: "1 278 $/h"
    },
    {
        id: 1,
        src: "Rectangle%2012",
        title: "XR-74 «Coopeееr»",
        description: "Brief description of the project, in a few lines.",
        prise: "145 278 $/h"
    },
    {
        id: 2,
        src: "Rectangle33",
        title: "XR-74 «Cooper»",
        description: "Brief description of the project, in a few lines.",
        prise: "1 278 $/h"
    },
    {
        id: 3,
        src: "Rectangle%2012",
        title: "XR-74 «Coopeееr»",
        description: "Brief description of the project, in a few lines.",
        prise: "145 278 $/h"
    },
    {
        id: 4,
        src: "Rectangle33",
        title: "XR-74 «Cooper»",
        description: "Brief description of the project, in a few lines.",
        prise: "1 278 $/h"
    },
    {
        id: 5,
        src: "Rectangle%2012",
        title: "XR-74 «Coopeееr»",
        description: "Brief description of the project, in a few lines.",
        prise: "145 278 $/h"
    },
    {
        id: 6,
        src: "Rectangle33",
        title: "XR-74 «Cooper»",
        description: "Brief description of the project, in a few lines.",
        prise: "1 278 $/h"
    },
    {
        id: 7,
        src: "Rectangle%2012",
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