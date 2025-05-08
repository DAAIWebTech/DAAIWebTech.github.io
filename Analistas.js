const compañeros = [
    {
      nombre: "Samarlin Rodríguez",
      avatar: "494339466_1059413139418493_4709066546759128239_n.jpg",
    },
    {
      nombre: "Lisset Rodríguez",
      avatar: "494334414_568152986306107_3110972580821475511_n.jpg",
    },
    {
      nombre: "Albelys Taveras ",
      avatar: "494329527_4160032540950699_978835865722171058_n.jpg",
    },
    {
      nombre: "Onormaree Ferreira",
      avatar: "494329575_1916475439284464_5662108931560883489_n.jpg",
    },
    {
      nombre: "Alberto López",
      avatar: "494329491_3620205311606370_8249588606133114325_n.jpg",
    },

    {
    nombre: "Claudio Hernández ",
    avatar: "494572837_1521532248823672_6600965819001184173_n.png",
  },

  {
    nombre: "Mía Paulino ",
    avatar: "494886244_1043505291060114_1863016685675652496_n.jpg",
  },

];

const grid = document.getElementById("grid-container");
  
compañeros.forEach(c => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
 
      <img src="${c.avatar}" alt="${c.nombre}" />
      <p>${c.nombre}</p>
    </a>
  `;
  grid.appendChild(card);
});



