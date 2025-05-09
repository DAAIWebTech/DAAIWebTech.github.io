const compañeros = [
    {
      nombre: "Edwin Caraballo",
      avatar: "490715233_3805304323113300_1719546324572023788_n.jpg",
      enlace: "http://SoccerStore11.github.io/"
    },
    {
      nombre: "Jose Anderson Lopez",
      avatar: "490928977_1356090178848449_2703274786163012737_n.jpg",
      enlace: "http://joselopez0827.github.io/"
    },
    {
      nombre: "Victor Batista",
      avatar: "490987569_731247086090233_5497851121272589162_n.jpg",
      enlace: "https://infintylook.github.io/victor.github.io/"
    },
    {
      nombre: "Aslhy Valdez",
      avatar: "494823377_2038749706612351_3248249574178432895_n.png",
      enlace: "https://ash-19-day.github.io/INDEX3.html"
    },
    {
      nombre: "Melissa Ozoria",
      avatar: "490999806_711240181470743_8977976163449155384_n.jpg",
      enlace: "https://melissa050.github.io/CaprichodeModa.github.io/"
    },
    

    {
      nombre: "Yosaidy Miranda",
      avatar: "491024146_1494434201529936_8327082105455822895_n.jpg",
      enlace: "http://alliajewerly.github.io/"
    },
    {
      nombre: "Loranny Disla",
      avatar: "491023222_1214727426832343_5868812091235576272_n.jpg",
      enlace: "http://loranny87.github.io/"
    },
    
    {
      nombre: "Rafael Rodriguez y Gilberto Cabrera",
      avatar: "491026066_1179252420348218_7351783543363991174_n.jpg",
      enlace: "http://empleoplu.github.io/"
    },
    {
      nombre: "Rafelina Matos",
      avatar: "https://scontent.fsti6-1.fna.fbcdn.net/v/t1.15752-9/487957070_1368833981092363_255387928926278189_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=xIMcH6k-GgMQ7kNvwEriYDr&_nc_oc=Adn2Ppb8ShSUdmcD4PAc83feiWzj8NvkHXflmHegM1RzEuT7u7pCQJneQsz6MhAmFLI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fsti6-1.fna&oh=03_Q7cD2AEKvOwJUv8iEHL1Q2Eua0pc3cuWJYihBjef7wpY6htJNQ&oe=6827D461",
      enlace: "https://rafelina323.github.io/Rafelina03.github.io/"
    },

    {
      nombre: "Raynielis Arias",
      avatar: "490988613_951039557107989_5915441109842676956_n.jpg",
      enlace: "https://alejandra-2025.github.io/rainielis2/"
    },
    {
      nombre: "Jefferson Guzman",
      avatar: "490992579_1045832587404548_6260731617017014552_n.jpg",
      enlace: "https://jefferason.github.io/Gameverse.github.io/"
    },
    {
      nombre: "Yoxander Sanchez",
      avatar: "490993899_1395756538245507_1538972696088705499_n.jpg",
      enlace: "https://yoxandersanchez.github.io/"
    },
    {
      nombre: "Juana Nuñez",
      avatar: "494356166_9970819182961405_2383728034728912103_n.jpg",
      enlace: "http://juana987.github.io/"
    },

    {
      nombre: "Arianny Guzman",
      avatar: "491218726_1615246732510893_4235222128787347076_n.jpg",
      enlace: "https://ariianny34212.github.io/ariianny34212/index.html"
    },

  ];
  


  


  const grid = document.getElementById("grid-container");
  
  compañeros.forEach(c => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <a href="${c.enlace}" target="_blank">
        <img src="${c.avatar}" alt="${c.nombre}" />
        <p>${c.nombre}</p>
      </a>
    `;
    grid.appendChild(card);
  });
  
